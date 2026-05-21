// Netlify serverless function — receives exam result and creates a GitHub Issue
// GitHub sends an automatic email notification to the repo owner for every new issue.

const GH_TOKEN = process.env.GH_TOKEN;
const REPO     = 'hazard-web/Service-Now-CIS-CMDB';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Bad Request' };
  }

  const { name, score, correct, total, date } = data;
  const passed  = parseInt(score) >= 75;
  const badge   = passed ? '✅ PASSED' : '❌ FAILED';
  const title   = `[Exam Result] ${badge} – ${name} scored ${score}`;
  const body    = [
    `## CIS-CMDB Exam Result`,
    ``,
    `| Field   | Value |`,
    `|---------|-------|`,
    `| **Name**    | ${name} |`,
    `| **Score**   | ${score} |`,
    `| **Result**  | ${badge} |`,
    `| **Correct** | ${correct} / ${total} |`,
    `| **Date**    | ${date} |`,
    ``,
    `---`,
    `*Submitted via [CIS-CMDB Quiz](https://cis-cmdb-quiz.netlify.app)*`,
  ].join('\n');

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ title, body, labels: ['exam-result'] }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('GitHub API error:', err);
      return { statusCode: 500, body: 'Failed to create issue' };
    }

    const issue = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, issue: issue.number }),
    };
  } catch (err) {
    console.error('Fetch error:', err);
    return { statusCode: 500, body: 'Internal error' };
  }
};
