/* ServiceNow CIS-CMDB practice quiz logic */
(function () {
  const ALL = window.QUESTIONS;
  const $ = (id) => document.getElementById(id);

  // ---------- State ----------
  const state = {
    mode: 'practice',     // 'practice' | 'exam' | 'review' | 'flagged'
    list: [],             // working list of question objects
    idx: 0,
    userAnswers: {},      // qid -> array (indices for single/multi) | array of selected right-side strings for match
    checked: {},          // qid -> true if revealed (practice/review)
    flagged: loadJSON('flagged', {}),  // qid -> true
    mastery: loadJSON('mastery', {}),   // qid -> {attempts, correct, lastResult}
    optionOrder: {},      // qid -> shuffled option index map
    matchOrder: {},       // qid -> shuffled right-side choices
    examineeName: '',     // captured from name modal for exam mode
  };

  function loadJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem('cmdb_' + key)) ?? fallback; }
    catch { return fallback; }
  }
  function saveJSON(key, val) { localStorage.setItem('cmdb_' + key, JSON.stringify(val)); }

  // ---------- Mastery helpers ----------
  function masteryStatus(qid) {
    const m = state.mastery[qid];
    if (!m || m.attempts === 0) return 'unseen';
    return m.lastResult === 'correct' ? 'mastered' : 'weak';
  }
  function masteryStats() {
    let mastered = 0, weak = 0, unseen = 0;
    ALL.forEach(q => {
      const s = masteryStatus(q.id);
      if (s === 'mastered') mastered++;
      else if (s === 'weak') weak++;
      else unseen++;
    });
    return { mastered, weak, unseen, total: ALL.length };
  }
  function saveMastery() { saveJSON('mastery', state.mastery); }
  function updateHomeProgress() {
    const st = masteryStats();
    const pct = Math.round((st.mastered / st.total) * 100);
    $('hp-mastered').textContent = st.mastered;
    $('hp-weak').textContent = st.weak;
    $('hp-unseen').textContent = st.unseen;
    $('hp-pct').textContent = pct + '%';
    $('hp-mastered-bar').style.width = ((st.mastered / st.total) * 100) + '%';
    $('hp-weak-bar').style.width = ((st.weak / st.total) * 100) + '%';
  }

  // ---------- Init ----------
  $('q-count').textContent = ALL.length;
  applyTheme(localStorage.getItem('cmdb_theme') || 'light');

  $('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('cmdb_theme', next);
  });

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    $('theme-toggle').textContent = t === 'dark' ? '☀️' : '🌙';
  }

  // ---------- Mode selection ----------
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.dataset.mode === 'exam') {
        showNameModal();
      } else {
        start(card.dataset.mode);
      }
    });
  });

  // ---------- Name modal ----------
  function showNameModal() {
    $('examinee-name').value = '';
    $('name-modal').style.display = 'flex';
    setTimeout(() => $('examinee-name').focus(), 50);
  }
  function hideNameModal() {
    $('name-modal').style.display = 'none';
  }
  $('name-cancel-btn').addEventListener('click', hideNameModal);
  $('name-confirm-btn').addEventListener('click', () => {
    const name = $('examinee-name').value.trim();
    if (!name) { $('examinee-name').focus(); $('examinee-name').classList.add('input-error'); return; }
    $('examinee-name').classList.remove('input-error');
    state.examineeName = name;
    hideNameModal();
    start('exam');
  });
  $('examinee-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('name-confirm-btn').click();
    $('examinee-name').classList.remove('input-error');
  });
  // ---------- Exam timer ----------
  let timerInterval = null;
  let timerSeconds = 0;

  function startTimer() {
    timerSeconds = 90 * 60;
    updateTimerDisplay();
    $('exam-timer').classList.remove('timer-warning');
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 300) $('exam-timer').classList.add('timer-warning');
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        alert('Time is up! Your exam is being submitted.');
        finish();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    $('exam-timer').classList.remove('timer-warning');
  }

  function updateTimerDisplay() {
    const h = Math.floor(timerSeconds / 3600);
    const m = Math.floor((timerSeconds % 3600) / 60);
    const s = timerSeconds % 60;
    $('exam-timer').textContent = '\u23F1 ' + String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  }

  function start(mode) {
    state.mode = mode;
    state.idx = 0;
    state.userAnswers = {};
    state.checked = {};
    state.optionOrder = {};
    state.matchOrder = {};

    let pool = [...ALL];
    if (mode === 'flagged') {
      pool = pool.filter(q => state.flagged[q.id]);
      if (pool.length === 0) {
        alert('You have no flagged questions yet. Flag some questions during practice to revisit them here.');
        return;
      }
    }
    if (mode === 'practice') {
      const filterEl = document.querySelector('input[name="pf"]:checked');
      const filter = filterEl ? filterEl.value : 'all';
      if (filter === 'weak') {
        pool = pool.filter(q => masteryStatus(q.id) === 'weak');
        if (!pool.length) { alert('No "Needs Work" questions yet! Practice some questions first, then come back.'); return; }
      } else if (filter === 'unseen') {
        pool = pool.filter(q => masteryStatus(q.id) === 'unseen');
        if (!pool.length) { alert("You've seen all questions! Great work. Try 'Needs Work' to strengthen weak spots."); return; }
      }
    }
    if (mode === 'exam') { pool = shuffle(pool); pool = pool.slice(0, 90); }

    state.list = pool;

    // Prebuild shuffled option order for each question
    const doShuffle = mode === 'exam';
    state.list.forEach(q => {
      if (q.type === 'match') {
        state.matchOrder[q.id] = doShuffle
          ? shuffle(q.options.map(o => o.right))
          : q.options.map(o => o.right);
      } else if (q.options) {
        state.optionOrder[q.id] = doShuffle
          ? shuffle(q.options.map((_, i) => i))
          : q.options.map((_, i) => i);
      }
    });

    if (mode === 'exam') startTimer(); else stopTimer();
    showScreen('quiz');
    render();
  }

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
    if (id === 'home') updateHomeProgress();
  }

  // ---------- Quiz rendering ----------
  $('prev-btn').addEventListener('click', () => navigate(-1));
  $('next-btn').addEventListener('click', () => navigate(1));
  $('check-btn').addEventListener('click', checkCurrent);
  $('submit-btn').addEventListener('click', submitExam);
  $('quit-btn').addEventListener('click', () => {
    if (confirm('Quit and return home? Progress for this session will be lost.')) {
      stopTimer();
      showScreen('home');
      updateHeader();
    }
  });
  $('flag-btn').addEventListener('click', toggleFlag);

  function navigate(delta) {
    // Save current selections before moving
    captureCurrentAnswer();
    const newIdx = state.idx + delta;
    if (newIdx < 0) return;
    if (newIdx >= state.list.length) {
      // In exam mode never auto-finish; bounce back and let user submit explicitly
      if (state.mode === 'exam') {
        promptSubmit();
        return;
      }
      finish();
      return;
    }
    state.idx = newIdx;
    render();
  }

  function jumpTo(i) {
    captureCurrentAnswer();
    state.idx = i;
    render();
  }

  function promptSubmit() {
    const unanswered = countUnanswered();
    const flagged = state.list.filter(q => state.flagged[q.id]).length;
    let msg = 'Submit exam and see your score?';
    if (unanswered > 0) msg = `You have ${unanswered} unanswered question${unanswered>1?'s':''}.\n\nSubmit anyway?`;
    else if (flagged > 0) msg = `You still have ${flagged} flagged question${flagged>1?'s':''}.\n\nSubmit exam?`;
    if (confirm(msg)) finish();
  }

  function submitExam() { promptSubmit(); }

  function countUnanswered() {
    return state.list.filter(q => !hasAnswer(q)).length;
  }
  function hasAnswer(q) {
    const ua = state.userAnswers[q.id];
    if (!ua) return false;
    if (q.type === 'match') return ua.filter(Boolean).length === q.options.length;
    return ua.length > 0;
  }

  function render() {
    const q = state.list[state.idx];
    const card = $('question-card');

    const typeLabel = ({ single: 'Single Choice', multi: 'Multi Select', match: 'Matching' })[q.type];

    let body = '';
    if (q.type === 'match') {
      const rights = state.matchOrder[q.id];
      body = `<div class="match-grid">` +
        q.options.map((pair, i) => {
          const selected = (state.userAnswers[q.id] || [])[i] || '';
          return `<div class="match-row">
            <div class="match-left">${escapeHtml(pair.left)}</div>
            <select class="match-select" data-i="${i}">
              <option value="">— select —</option>
              ${rights.map(r => `<option value="${escapeAttr(r)}" ${r===selected?'selected':''}>${escapeHtml(r)}</option>`).join('')}
            </select>
          </div>`;
        }).join('') +
        `</div>`;
    } else {
      const order = state.optionOrder[q.id];
      const sel = state.userAnswers[q.id] || [];
      body = `<div class="options">` +
        order.map(origIdx => {
          const opt = q.options[origIdx];
          const checked = sel.includes(origIdx);
          const inputType = q.type === 'multi' ? 'checkbox' : 'radio';
          return `<label class="option" data-idx="${origIdx}">
            <input type="${inputType}" name="opt-${q.id}" value="${origIdx}" ${checked?'checked':''}>
            <span class="label">${escapeHtml(opt)}</span>
          </label>`;
        }).join('') +
        `</div>`;
    }

    card.innerHTML = `
      <div class="qnum">Question ${state.idx + 1} of ${state.list.length} <span class="qtype-badge">${typeLabel}</span></div>
      <p class="qtext">${escapeHtml(q.question)}</p>
      ${body}
    `;

    // Attach input listeners
    card.querySelectorAll('.option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        if (state.checked[q.id] && state.mode !== 'exam') return;
        const idx = parseInt(opt.dataset.idx, 10);
        const arr = state.userAnswers[q.id] || [];
        if (q.type === 'single') {
          state.userAnswers[q.id] = [idx];
        } else {
          if (arr.includes(idx)) state.userAnswers[q.id] = arr.filter(x => x !== idx);
          else state.userAnswers[q.id] = [...arr, idx];
        }
        // Re-render selection state without losing focus is fine via small refresh
        render();
      });
    });
    card.querySelectorAll('.match-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const arr = state.userAnswers[q.id] || [];
        arr[parseInt(sel.dataset.i, 10)] = sel.value;
        state.userAnswers[q.id] = arr;
      });
    });

    // Mode-specific UI
    if (state.mode === 'review') {
      revealAnswers(q);
      $('check-btn').classList.add('hidden');
      $('check-btn').style.display = 'none';
      $('submit-btn').style.display = 'none';
      $('palette').classList.add('hidden');
    } else if (state.mode === 'exam') {
      $('check-btn').style.display = 'none';
      $('feedback').classList.add('hidden');
      $('palette').classList.remove('hidden');
      $('submit-btn').style.display = '';
      renderPalette();
    } else {
      $('check-btn').style.display = '';
      $('submit-btn').style.display = 'none';
      if (state.mode === 'practice') {
        $('palette').classList.remove('hidden');
        renderPalette();
      } else {
        $('palette').classList.add('hidden');
      }
      if (state.checked[q.id]) {
        revealAnswers(q);
      } else {
        $('feedback').classList.add('hidden');
      }
    }

    // Prev/Next labels
    $('prev-btn').disabled = state.idx === 0;
    const isLast = state.idx === state.list.length - 1;
    if (state.mode === 'exam') {
      // In exam mode Next never finishes; Submit button is always visible
      $('next-btn').textContent = 'Next →';
      $('next-btn').disabled = isLast;
    } else {
      $('next-btn').disabled = false;
      $('next-btn').textContent = isLast ? (state.mode === 'review' ? 'Done' : 'Finish ✓') : 'Next →';
    }

    // Flag button
    $('flag-btn').classList.toggle('flag-active', !!state.flagged[q.id]);

    // Progress
    const pct = ((state.idx + 1) / state.list.length) * 100;
    $('progress-fill').style.width = pct + '%';
    updateHeader();
  }

  function captureCurrentAnswer() {
    // The state.userAnswers is already kept in sync via listeners
  }

  function renderPalette() {
    const grid = $('palette-grid');
    if (state.mode === 'exam') {
      $('palette-title').textContent = 'Question Navigator';
      $('exam-timer').style.display = '';
      $('pal-exam-stats').style.display = '';
      $('pal-practice-stats').style.display = 'none';
      grid.innerHTML = state.list.map((q, i) => {
        const answered = hasAnswer(q);
        const flagged = !!state.flagged[q.id];
        const current = i === state.idx;
        const cls = ['pal-btn', answered?'answered':'', flagged?'flagged':'', current?'current':''].filter(Boolean).join(' ');
        return `<button class="${cls}" data-i="${i}" title="Q${i+1}${answered?' • answered':' • unanswered'}${flagged?' • flagged':''}">${i+1}</button>`;
      }).join('');
      const answeredCount = state.list.filter(hasAnswer).length;
      const flaggedCount = state.list.filter(q => state.flagged[q.id]).length;
      $('pal-answered').textContent = answeredCount;
      $('pal-unanswered').textContent = state.list.length - answeredCount;
      $('pal-flagged').textContent = flaggedCount;
    } else {
      $('palette-title').textContent = 'Practice Progress';
      $('exam-timer').style.display = 'none';
      $('pal-exam-stats').style.display = 'none';
      $('pal-practice-stats').style.display = '';
      grid.innerHTML = state.list.map((q, i) => {
        const ms = masteryStatus(q.id);
        const flagged = !!state.flagged[q.id];
        const current = i === state.idx;
        const cls = ['pal-btn', ms, flagged?'flagged':'', current?'current':''].filter(Boolean).join(' ');
        const label = {mastered:'✅ mastered', weak:'⚠️ needs work', unseen:'⬜ unseen'}[ms];
        return `<button class="${cls}" data-i="${i}" title="Q${i+1} • ${label}${flagged?' • flagged':''}">${i+1}</button>`;
      }).join('');
      let mastered = 0, weak = 0, unseen = 0;
      state.list.forEach(q => {
        const s = masteryStatus(q.id);
        if (s === 'mastered') mastered++;
        else if (s === 'weak') weak++;
        else unseen++;
      });
      $('pal-mastered').textContent = mastered;
      $('pal-weak').textContent = weak;
      $('pal-unseen').textContent = unseen;
    }
    grid.querySelectorAll('.pal-btn').forEach(btn => {
      btn.addEventListener('click', () => jumpTo(parseInt(btn.dataset.i, 10)));
    });
  }

  function toggleFlag() {
    const q = state.list[state.idx];
    if (state.flagged[q.id]) delete state.flagged[q.id];
    else state.flagged[q.id] = true;
    saveJSON('flagged', state.flagged);
    $('flag-btn').classList.toggle('flag-active', !!state.flagged[q.id]);
    if (state.mode === 'exam') renderPalette();
  }

  function checkCurrent() {
    const q = state.list[state.idx];
    if (!hasAnswer(q)) { alert('Please select an answer first.'); return; }
    state.checked[q.id] = true;
    revealAnswers(q);
    if (state.mode === 'practice' || state.mode === 'flagged') {
      const ok = isCorrect(q);
      const m = state.mastery[q.id] || { attempts: 0, correct: 0 };
      m.attempts++;
      if (ok) m.correct++;
      m.lastResult = ok ? 'correct' : 'wrong';
      state.mastery[q.id] = m;
      saveMastery();
      if (state.mode === 'practice') renderPalette();
    }
  }

  function revealAnswers(q) {
    const correct = isCorrect(q);
    const card = $('question-card');

    if (q.type === 'match') {
      card.querySelectorAll('.match-select').forEach((sel, i) => {
        const expected = q.options[i].right;
        sel.disabled = true;
        if (sel.value === expected) sel.classList.add('correct');
        else sel.classList.add('wrong');
      });
    } else {
      const userSel = state.userAnswers[q.id] || [];
      card.querySelectorAll('.option').forEach(opt => {
        const idx = parseInt(opt.dataset.idx, 10);
        opt.classList.add('disabled');
        if (q.answer.includes(idx)) opt.classList.add('correct');
        else if (userSel.includes(idx)) opt.classList.add('wrong');
      });
    }

    const fb = $('feedback');
    fb.classList.remove('hidden', 'correct', 'wrong');
    fb.classList.add(correct ? 'correct' : 'wrong');

    let answerText = '';
    if (q.type === 'match') {
      answerText = q.options.map(p => `<b>${escapeHtml(p.left)}</b> → ${escapeHtml(p.right)}`).join('<br>');
    } else {
      answerText = q.answer.map(i => '✓ ' + escapeHtml(q.options[i])).join('<br>');
    }
    fb.innerHTML = `<h4>${correct ? '✅ Correct!' : '❌ Not quite.'}</h4>
                    <p><b>Answer:</b><br>${answerText}</p>
                    ${q.explanation ? `<p style="margin-top:6px;"><b>Why:</b> ${escapeHtml(q.explanation)}</p>` : ''}`;
  }

  function isCorrect(q) {
    const ua = state.userAnswers[q.id] || [];
    if (q.type === 'match') {
      return q.options.every((pair, i) => ua[i] === pair.right);
    }
    if (q.type === 'single') {
      return ua.length === 1 && q.answer.includes(ua[0]);
    }
    // multi
    if (ua.length !== q.answer.length) return false;
    const sa = [...q.answer].sort().join(',');
    const su = [...ua].sort().join(',');
    return sa === su;
  }

  // ---------- Finish & results ----------
  function finish() {
    const total = state.list.length;
    let correct = 0;
    const breakdown = [];
    state.list.forEach((q, i) => {
      const ok = isCorrect(q);
      if (ok) correct++;
      breakdown.push({ i, q, ok });
    });
    const pct = total ? Math.round((correct / total) * 100) : 0;

    $('r-correct').textContent = correct;
    $('r-total').textContent = total;
    $('r-percent').textContent = pct + '%';
    $('result-bar-fill').style.width = pct + '%';

    const PASS = 75;
    const passed = pct >= PASS;
    let emoji, title;
    if (pct < 50) { emoji = '📚'; title = 'Bhai padhai kar le, ServiceNow tujhe dekh ke ro raha hai 😭'; }
    else if (pct < PASS) { emoji = '💪'; title = 'Itne paas aake bhi door reh gaya 🥲 - thoda aur dimaag laga, 75% chahiye boss!'; }
    else if (pct < 85) { emoji = '✅'; title = 'Pass ho gaya bhai! 🎉 Sambhal ke, abhi certificate door hai par raasta sahi hai.'; }
    else if (pct < 95) { emoji = '🏅'; title = 'Wah ustaad wah! 🔥 CMDB ka Shahrukh Khan ban gaya tu.'; }
    else { emoji = '🏆'; title = 'OYE HOYE! 🤯 Tu toh ServiceNow ka damaad nikla - seedha Bansal sir se shaadi karwa do!'; }
    $('result-emoji').textContent = emoji;
    $('result-title').textContent = title;

    // Pass / fail badge under the percent stat
    const pctEl = $('r-percent');
    pctEl.style.color = passed ? 'var(--correct)' : 'var(--wrong)';
    pctEl.title = `Passing score: ${PASS}%`;

    const list = $('result-list');
    list.innerHTML = breakdown.map(b => {
      return `<li class="${b.ok ? 'correct' : 'wrong'}">
        ${b.ok ? '✅' : '❌'} <span class="qlink" data-i="${b.i}">Q${b.i+1}:</span>
        ${escapeHtml(b.q.question.slice(0, 100))}${b.q.question.length>100?'…':''}
      </li>`;
    }).join('');
    list.querySelectorAll('.qlink').forEach(a => {
      a.addEventListener('click', () => {
        state.idx = parseInt(a.dataset.i, 10);
        // Force review-style display
        state.checked[state.list[state.idx].id] = true;
        showScreen('quiz');
        render();
      });
    });

    if (state.mode === 'practice') {
      const ms = masteryStats();
      $('r-mastered').textContent = ms.mastered + ' / ' + ms.total;
      $('r-mastery-wrap').style.display = '';
    } else {
      $('r-mastery-wrap').style.display = 'none';
    }

    // Show name on results & submit to Netlify if exam mode
    if (state.mode === 'exam' && state.examineeName) {
      $('result-name').textContent = '👤 ' + state.examineeName;
      $('result-name').style.display = '';
      submitResultForm(state.examineeName, pct + '%', correct, total);
    } else {
      $('result-name').style.display = 'none';
    }

    stopTimer();
    showScreen('results');
  }

  $('retry-btn').addEventListener('click', () => start(state.mode));
  $('back-home-btn').addEventListener('click', () => showScreen('home'));
  $('review-wrong-btn').addEventListener('click', () => {
    const wrongs = state.list.filter(q => !isCorrect(q));
    if (wrongs.length === 0) { alert('No wrong answers — perfect run!'); return; }
    state.list = wrongs;
    state.idx = 0;
    state.checked = {};
    state.list.forEach(q => {
      if (!state.optionOrder[q.id]) {
        if (q.type === 'match') state.matchOrder[q.id] = q.options.map(o => o.right);
        else state.optionOrder[q.id] = q.options.map((_, i) => i);
      }
    });
    showScreen('quiz');
    render();
  });

  // ---------- Header ----------
  function updateHeader() {
    if ($('quiz').classList.contains('active')) {
      $('progress-text').textContent = `${state.idx + 1} / ${state.list.length}`;
      if (state.mode === 'exam') {
        const answered = state.list.filter(hasAnswer).length;
        $('score-text').textContent = `Answered: ${answered} / ${state.list.length}`;
      } else {
        let cnt = 0;
        state.list.forEach(q => { if (isCorrect(q) && state.checked[q.id]) cnt++; });
        $('score-text').textContent = `Score: ${cnt}`;
      }
    } else {
      $('progress-text').textContent = `${ALL.length} questions`;
      $('score-text').textContent = `🚩 ${Object.keys(state.flagged).length} flagged`;
    }
  }

  // ---------- Utils ----------
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  }
  function escapeAttr(s) { return escapeHtml(s); }

  // ---------- Netlify form submission ----------
  function submitResultForm(name, score, correct, total) {
    const date = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    fetch('/.netlify/functions/record-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, score, correct: String(correct), total: String(total), date }),
    }).catch(() => {}); // silent fail — never block the results screen
  }

  $('reset-progress-btn').addEventListener('click', () => {
    if (confirm('Reset all practice progress? Your mastery tracking will be cleared.')) {
      state.mastery = {};
      saveMastery();
      updateHomeProgress();
    }
  });

  updateHomeProgress();
  updateHeader();
})();
