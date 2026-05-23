// CIS-CMDB practice questions extracted from study PDFs.
// Each item: { id, type: 'single'|'multi'|'match', question, options:[...], answer:[indices], explanation? }
// For 'match', options = [{left, right}] pairs; user matches by drag/select.

window.QUESTIONS = [
  {
    id: 1, type: 'single',
    question: 'A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM Sell/Consume domain?',
    options: [
      'Business Service Offering, Business Service',
      'Business Capability, Information Object, Business Application',
      'Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)'
    ],
    answer: [0],
    explanation: 'The Sell/Consume domain contains Business Service Offering and Business Service published to business consumers.'
  },
  {
    id: 2, type: 'match',
    question: 'Drag and drop the application-service / discovery type to the best description.',
    options: [
      { left: 'Recommended for mission-critical application services that require a precise approach using patterns', right: 'Service Mapping (Top-down)' },
      { left: 'Best fit to map cloud-native, container-based, virtual machine environments', right: 'Service Mapping (Connection Suggestion)' },
      { left: 'Logical grouping of CIs based on a filter / tag', right: 'Dynamic CI Group' },
      { left: 'Identifies services through resource tagging', right: 'Tag-Based' }
    ]
  },
  {
    id: 3, type: 'single',
    question: 'A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?',
    options: ['Completeness', 'Correctness', 'Compliance'],
    answer: [1],
    explanation: 'Staleness is a Correctness sub-metric.'
  },
  {
    id: 4, type: 'single',
    question: 'After installing the Service Graph Connector Central plugin, what workspace will have the new Service Graph Connector Central tab available?',
    options: ['Service Graph Connector Workspace', 'CMDB Workspace', 'Discovery Admin Workspace'],
    answer: [1]
  },
  {
    id: 5, type: 'single',
    question: 'A Configuration Manager needs a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should be created?',
    options: ['Certification', 'Delete', 'Retire', 'Archive'],
    answer: [3],
    explanation: 'Archive policies retain records for a configurable period before deletion.'
  },
  {
    id: 6, type: 'single',
    question: 'A CMDB Administrator is asked to clean up CMDB duplicates. What is the preferred way to manage this task?',
    options: [
      'My Tasks in the Application Navigator',
      'The de-duplication task module',
      'The de-duplication dashboard on the CMDB Workspace'
    ],
    answer: [2]
  },
  {
    id: 7, type: 'single',
    question: 'A Business Relationship Manager wants to implement Service Portfolio Management (SPM) and present offerings to business consumers. Which CSDM Domain does this align with?',
    options: ['Build and Integration (Build)', 'Service Consumption (Sell/Consume)', 'Design and Planning (Design)', 'Service Delivery'],
    answer: [1]
  },
  {
    id: 8, type: 'single',
    question: 'A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area allows this?',
    options: ['Tool box', 'Map', 'Contextual side panel', 'Content controls'],
    answer: [2]
  },
  {
    id: 9, type: 'multi',
    question: 'Which are CMDB Data Manager end-of-life policy types? (Choose 2)',
    options: ['Retire', 'Lost', 'Decommission', 'Disposed', 'Archive'],
    answer: [0, 4]
  },
  {
    id: 10, type: 'multi',
    question: 'What are benefits of using the CMDB Data Foundations Dashboard? (Choose 2)',
    options: [
      'Has a framework to create custom metrics for the CMDB',
      'Checks that important data is valid and properly configured',
      'Provides playbooks to assist in the remediation of potential risks',
      'Uses automation to remediate potential risks'
    ],
    answer: [1, 2]
  },
  {
    id: 11, type: 'single',
    question: 'A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in a datacenter. In which lifecycle state would servers be affected?',
    options: ['End of Life - Retired', 'Missing - Stolen', 'Inventory - Available', 'In any lifecycle state'],
    answer: [0]
  },
  {
    id: 12, type: 'multi',
    question: 'What insights are gained from CMDB 360 saved queries? (Choose 2)',
    options: [
      'Unique CIs created from different data sources',
      'Gaps in attribute data from different data sources',
      'Different attribute values from different data sources',
      'Orphan CIs created from different data sources',
      'Duplicate configuration items from different data sources'
    ],
    answer: [1, 2]
  },
  {
    id: 13, type: 'single',
    question: 'In which area of the CMDB Workspace can users locate de-duplication tasks generated by the IRE?',
    options: [
      'Total status tile under the My Work tab',
      'CMDB feature adoption tile under the Insights tab',
      'Important actions tile under the Home tab'
    ],
    answer: [2]
  },
  {
    id: 14, type: 'single',
    question: 'An organization needs to maintain non-discoverable attributes (e.g., warranty expiration dates) for hardware CIs. What method ensures these attributes are accurately maintained?',
    options: [
      'Use a scheduled data import to update the attributes from an external source',
      'Create a new CI class specifically for non-discoverable attributes',
      'Use the CMDB Reconciliation Engine to update the attributes'
    ],
    answer: [0]
  },
  {
    id: 15, type: 'single',
    question: 'Which CSDM domain provides guidance on establishing relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services?',
    options: [
      'Build and Integration (Build)',
      'Foundation',
      'Design and Planning (Design)',
      'Service Consumption (Sell/Consume)',
      'Service Delivery (Manage Technical Services)'
    ],
    answer: [4]
  },
  {
    id: 16, type: 'match',
    question: 'Match each feature to its outcome for duplicate CI handling.',
    options: [
      { left: 'Can be assigned to groups for resolving duplicate CIs', right: 'De-Duplication Tasks' },
      { left: 'Offers insight into duplicate CIs within the CMDB', right: 'CMDB Health Dashboard Correctness Scorecard' },
      { left: 'Offers a solution to resolve de-duplication tasks in bulk', right: 'De-Duplication Templates' },
      { left: 'Provides a wizard to resolve de-duplication tasks individually', right: 'Duplicate CI Remediator' }
    ]
  },
  {
    id: 17, type: 'multi',
    question: 'A CMDB Administrator sees low CMDB Data Foundations Dashboard scores. Which actions can improve CMDB Health? (Choose 2)',
    options: [
      'Use the Remediation Playbooks linked beside each metric',
      'Focus on metric(s) with Critical and High priorities',
      'Remove non-operational and retired CIs',
      'Adjust the metrics using exclusion rules to improve the scores'
    ],
    answer: [0, 1]
  },
  {
    id: 18, type: 'single',
    question: 'Which management tool provides the fastest time-to-value for importing Windows computer data from SCCM?',
    options: [
      'Import set using JDBC data source connection to SCCM using transform maps',
      'SCCM Usage Metering Spoke',
      'SCCM Service Graph Connector',
      'IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)'
    ],
    answer: [2]
  },
  {
    id: 19, type: 'multi',
    question: 'Which roles are needed to add or remove classes from the Principal Class filter? (Choose 2)',
    options: ['cmdb_query_builder', 'personalize_dictionary', 'sn_csdm_admin', 'sn_cmdb_admin'],
    answer: [1, 3]
  },
  {
    id: 20, type: 'single',
    question: 'A Configuration Management team wants to confirm all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type do they create?',
    options: ['Retire', 'Delete', 'Attestation', 'Certification', 'Archive'],
    answer: [3]
  },
  {
    id: 21, type: 'single',
    question: 'Server class uses lowest-value reconciliation for Disk Space; Windows Server class uses most-reported. Sources report Tivoli=75, ServiceNow=75, LANDesk=50, Altiris=80. Which value is added for cmdb_ci_win_server Disk Space (GB)?',
    options: ['50', '75', '80'],
    answer: [1],
    explanation: 'Windows Server class rule (most reported) wins because it is more specific; 75 appears most.'
  },
  {
    id: 22, type: 'multi',
    question: 'How does an Asset Manager ensure Asset records and CI records are kept synchronized automatically? (Choose 2)',
    options: [
      'Ensure one-to-one physical mapping between Asset and CI',
      'Ensure that the business rule to update Asset fields on change on the CI table is active',
      'Ensure that scheduled jobs are run during off-business hours to ensure sync happens',
      'Ensure that the business rule to update CI fields on change on the asset table is active'
    ],
    answer: [1, 3]
  },
  {
    id: 23, type: 'single',
    question: 'What automated action populates the "Assigned to" field on the Asset based on the related Computer CI?',
    options: [
      'Use the Asset-CI Field Mapping module to create a new rule to replicate the "Assigned to" value between the asset and associated CI',
      'Configure a business rule on the computer table to use a script to populate "Assigned to" on the asset',
      'Hide the "Assigned to" field on the asset record and create a new field that dot-walks to the related CI'
    ],
    answer: [0]
  },
  {
    id: 24, type: 'single',
    question: 'Which CSDM attribute is used to prioritize customer-facing services for incident handling?',
    options: [
      'Assignment Group on the CI record',
      'Affected CIs in the Incident record',
      'Service classification in the Technical Service',
      'Business Criticality in the Service Offering'
    ],
    answer: [3]
  },
  {
    id: 25, type: 'single',
    question: 'Which field on the Change Request form needs to be populated with a Dynamic CI Group?',
    options: ['Configuration Item', 'Business Service', 'Service Offering'],
    answer: [0]
  },
  {
    id: 26, type: 'single',
    question: 'What is the purpose of an Information Object in CSDM?',
    options: [
      'It describes data in general on a group of Configuration Items',
      'It describes the logical data to the Business Applications',
      'It describes data exchanged between an API interface and an Application'
    ],
    answer: [1]
  },
  {
    id: 27, type: 'single',
    question: 'Where can an administrator perform Natural Language Queries (NLQ)?',
    options: ['CMDB Data Manager', 'CI Class Manager', 'CMDB Workspace', 'CMDB Health Dashboard'],
    answer: [2]
  },
  {
    id: 28, type: 'single',
    question: 'Hardware identifier uses serial_number/serial_number_type then name. CI1 matches an existing record by name; CI2 matches by IP address. Which is correct?',
    options: [
      'CI1 will be updated with matching record and CI2 will be inserted as new record',
      'CI1 and CI2 both will be inserted as new records',
      'CI1 will be inserted as new record and CI2 will be updated with matching record',
      'CI1 and CI2 both will be updated with matching records'
    ],
    answer: [0]
  },
  {
    id: 29, type: 'single',
    question: 'In CI Class Manager (Basic Info tab), how is a class set as a Principal Class?',
    options: [
      'Click the Principal Class UI Action button',
      'Check the Principal Class check box',
      'Select "Yes" from the Principal Class choice list'
    ],
    answer: [1]
  },
  {
    id: 30, type: 'single',
    question: 'A Configuration Manager implementing end-to-end service modeling needs status and playbooks for quality. What is referenced?',
    options: [
      'CMDB Data Foundation Dashboard',
      'CMDB Workspace',
      'CSDM Data Foundation Dashboard',
      'Service Mapping Data Foundation Dashboard'
    ],
    answer: [2]
  },
  {
    id: 31, type: 'multi',
    question: 'Which CSDM classes are appropriate on the Incident form? (Choose 2)',
    options: ['Business Application', 'Service Offering', 'Application Service', 'Service Portfolio'],
    answer: [1, 2]
  },
  {
    id: 32, type: 'single',
    question: 'For an application identification rule that handles the same application installed more than once on the same server, which is the best criterion attribute?',
    options: ['Configuration File Name', 'Configuration File Path', 'Class', 'Version', 'Port'],
    answer: [1]
  },
  {
    id: 33, type: 'single',
    question: 'Where can a CMDB 360/Multisource Saved Query be viewed and created in the CMDB Workspace?',
    options: [
      'CMDB Query Builder',
      'Coverage window on the CMDB 360 tab',
      'Saved queries window on the CMDB 360 tab',
      'Saved queries window on the Insights tab'
    ],
    answer: [2]
  },
  {
    id: 34, type: 'single',
    question: 'A CI Class Owner responsible for Windows Servers wants to streamline managing the class in CI Class Manager. Which feature helps?',
    options: ['Search CI Classes', 'Pinned Classes', 'CI Favorites'],
    answer: [1]
  },
  {
    id: 35, type: 'single',
    question: 'Transitioning from legacy CMDB status fields to CSDM life cycle status fields — which table can be modified?',
    options: [
      'Life Cycle Stages [life_cycle_stage]',
      'Life Cycle Controls [life_cycle_control]',
      'Life Cycle Stage Status [life_cycle_stage_status]',
      'Life Cycle Mapping [life_cycle_mapping]'
    ],
    answer: [3]
  },
  {
    id: 36, type: 'single',
    question: 'How does an administrator prevent duplicate CI creation from import sets loading vendor shipment files into the CMDB?',
    options: [
      'Create comparison rules in the IRE',
      'Use the CMDBTransformUtil API in the transform script',
      'Set the system property to utilize the IRE within transform maps',
      'Set the coalesce on two mappings within the transform map'
    ],
    answer: [1]
  },
  {
    id: 37, type: 'match',
    question: 'Match each CMDB Health Dashboard sub-metric to the correct KPI.',
    options: [
      { left: 'Required', right: 'Completeness' },
      { left: 'Suggested / Recommended', right: 'Completeness' },
      { left: 'Audit', right: 'Compliance' },
      { left: 'Orphan', right: 'Correctness' },
      { left: 'Stale', right: 'Correctness' },
      { left: 'Duplicate', right: 'Correctness' }
    ]
  },
  {
    id: 38, type: 'match',
    question: 'Match the CMDB 360/Multisource system property to its functionality.',
    options: [
      { left: 'Enables CMDB 360', right: 'glide.identification_engine.multisource_enabled' },
      { left: 'Enables capturing CMDB 360 data for CIs from non-CMDB classes', right: 'glide.identification_engine.multisource_cmdb_ci_enabled' },
      { left: 'Enables logging for CMDB 360', right: 'glide.email.logger.source.cmdb_multisource' },
      { left: 'Maximum number of CIs included in a CMDB 360 recompute operation', right: 'glide.identification_engine.multisource.recompute.max_ci_limit' }
    ]
  },
  {
    id: 39, type: 'single',
    question: 'CIs do not have a support group. How can support group be automatically populated and maintained?',
    options: [
      'Dynamic CI group',
      'Technology Management Service (Technical Service)',
      'CI Class Manager',
      'Technology Management Service Offering (Technical Service Offering)'
    ],
    answer: [3]
  },
  {
    id: 40, type: 'single',
    question: 'Where does a user review and manage tasks generated after configuring CMDB Data Manager policies?',
    options: [
      'CMDB Health Dashboard > Duplicate CIs tab',
      'CMDB Workspace > My Work tab',
      'CMDB Workspace > Management tab',
      'CMDB Health Dashboard > Audit tab'
    ],
    answer: [1]
  },
  {
    id: 41, type: 'multi',
    question: 'Multiple discovery sources cause duplicate records and inconsistencies. What actions resolve the issue? (Choose 2)',
    options: [
      'Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources',
      'Allow each discovery source to define its own CI class, even if it results in inconsistencies',
      'Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification',
      'Create a custom script to manually adjust incoming data before storing it in the CMDB'
    ],
    answer: [0, 2]
  },
  {
    id: 42, type: 'single',
    question: 'A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected. Which tool can be used?',
    options: ['Relationship Map', 'Unified Map', 'Business Service Map'],
    answer: [1],
    explanation: 'The Unified Map in CMDB Workspace shows connections between CIs.'
  },
  {
    id: 43, type: 'single',
    question: 'Hardware CIs are missing serial number information. Which provides a structured approach to address these gaps?',
    options: ['CMDB Data Foundation Playbook', 'CI Class Manager', 'Service Graph Connectors'],
    answer: [0]
  },
  {
    id: 44, type: 'multi',
    question: 'Which categories of Service Graph Connectors are available? (Choose 2)',
    options: ['Workflow Automation', 'Cloud', 'DevOps', 'Observability'],
    answer: [1, 3]
  },
  {
    id: 45, type: 'single',
    question: 'Tomcat identification rule has Class + Install Directory criteria. Which option allows trying the parent Application rule if no Tomcat match is found?',
    options: ['Applies to', 'Independent', 'Allow fallback to parent\'s rules', 'Criterion attributes'],
    answer: [2]
  },
  {
    id: 46, type: 'match',
    question: 'Match each product to its description.',
    options: [
      { left: 'Automatically identifies devices/applications in the network, populating the CMDB', right: 'ServiceNow Discovery' },
      { left: 'Facilitates integration between ServiceNow and external systems to import and synchronize data', right: 'Service Graph Connectors' },
      { left: 'Complete topology of services and shows how they are supported by underlying infrastructure/applications', right: 'Service Mapping' },
      { left: 'Provides real-time visibility into endpoint configurations, populating the CMDB', right: 'Agent Client Collector (ACC)' }
    ]
  },
  {
    id: 47, type: 'single',
    question: 'Where would identification rules be configured to prevent duplicate server records via IRE?',
    options: ['CMDB Health Dashboard', 'CMDB Workspace', 'CMDB CI Class Manager', 'CMDB Data Manager'],
    answer: [2]
  },
  {
    id: 48, type: 'single',
    question: 'Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?',
    options: [
      'Establishing clear governance and continuously monitoring CMDB health',
      'Relying on automated discovery tools to maintain and update CMDB records',
      'Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs',
      'Allowing IT teams to modify CMDB records as needed to promote flexibility in data management'
    ],
    answer: [0]
  },
  {
    id: 49, type: 'single',
    question: 'Recommended field to use for CMDB Data Manager policy-task assignment aligned with the group attribute on a class?',
    options: ['Approval group', 'Managed by group', 'Change group', 'Support group'],
    answer: [1]
  },
  {
    id: 50, type: 'single',
    question: 'Which CI Class Manager tab is used to change the icon for the UNIX Server class?',
    options: ['Basic Info', 'Suggested Relationships', 'CI List', 'Attributes'],
    answer: [0]
  },
  {
    id: 51, type: 'multi',
    question: 'Building a query for all application services with a database that has incidents AND all infrastructure in those application services — which two steps? (Choose 2)',
    options: [
      'Add a non-CMDB table to the query',
      'Use a Service Mapping Query to include non-CMDB tables like the Incident table',
      'Use a Service Mapping Query to find all incidents related to the database',
      'Use a CMDB Query to include application services and their related infrastructure'
    ],
    answer: [0, 3]
  },
  {
    id: 52, type: 'single',
    question: 'A CMDB Administrator installs a Service Graph Connector and customizes the mappings. Which is a consequence?',
    options: [
      'The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC',
      'The customization will prevent the SGC from executing without an approval record attached to the affected mapping record',
      'Fields populated by a customization will have a special tag associated with them in the CMDB'
    ],
    answer: [0]
  },
  {
    id: 53, type: 'multi',
    question: 'Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service? (Choose 2)',
    options: ['IntegrationHub ETL', 'Service Mapping', 'Data Manager', 'Event Management', 'Discovery'],
    answer: [1, 4]
  },
  {
    id: 54, type: 'single',
    question: 'A Configuration Manager wants a CMDB Health Dashboard score per region but only sees the overall score and grouping by CI Class. How to get a regional score?',
    options: [
      'Create CMDB groups with type: health, by region',
      'Customize the CMDB Health Dashboard scheduled jobs to group results by region',
      'On CMDB health settings, activate the option "Group scores by region"'
    ],
    answer: [0]
  },
  {
    id: 55, type: 'single',
    question: 'Which feature filters specific CI classes that display on the CMDB Health Dashboard?',
    options: ['Health Inclusion Rules', 'Data Refresh Rules', 'Reconciliation Rules', 'Identification Rules'],
    answer: [0]
  },
  {
    id: 56, type: 'match',
    question: 'Match each design architecture to its CMDB management tool.',
    options: [
      { left: 'Automated agent-based solution running patterns', right: 'Agent Client Collector' },
      { left: 'Organization-built solution using transform maps', right: 'Import Sets' },
      { left: 'Third-party integrations from other vendors / Pre-built store integration solutions', right: 'Service Graph Connector' },
      { left: 'Automated agentless solution running patterns', right: 'ServiceNow Discovery' }
    ]
  },
  {
    id: 57, type: 'single',
    question: 'Which is the most complete list of CMDB Data Manager policy types?',
    options: [
      'Retire, Archive, Attestation, Certification, and Delete',
      'Archive and Delete',
      'Delete, Attestation, Retire, and Certification',
      'Attestation, Retire, and Certification'
    ],
    answer: [0]
  },
  {
    id: 58, type: 'single',
    question: 'A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?',
    options: ['Reconciliation Rules', 'CMDB Workspace', 'CMDB Data Manager', 'CMDB 360/Multisource CMDB'],
    answer: [3]
  },
  {
    id: 59, type: 'multi',
    question: 'How is the CMDB aligned to business processes? (Choose 2)',
    options: [
      'Extends service delivery management to all enterprise departments',
      'Enhances decision-making and operational efficiency across the organization',
      'Enables the CFO/CIO to track software licenses',
      'Provides a centralized view of configuration items and their relationships'
    ],
    answer: [1, 3]
  },
  {
    id: 60, type: 'single',
    question: 'A Configuration Manager needs to ingest third-party CIs. Which method minimizes the risk of technical debt?',
    options: ['Table API', 'Vendor-provided integration', 'Service Graph Connector', 'Import Sets and Transform Maps'],
    answer: [2]
  },
  {
    id: 61, type: 'single',
    question: 'What is the relationship between an application and a server?',
    options: [
      'Application > Runs on::Runs > Server',
      'Application > Uses::Used by > Server',
      'Application > Used by::Uses > Server',
      'Application > Runs::Runs On > Server'
    ],
    answer: [0]
  },
  {
    id: 62, type: 'single',
    question: 'How does a CMDB Administrator use the ServiceNow Platform to ensure data quality of CIs in the CMDB?',
    options: ['Data Quality Business Rule', 'CMDB Workspace', 'Data Quality Scheduled Job', 'CMDB Audit Business Rule'],
    answer: [2]
  },
  {
    id: 63, type: 'single',
    question: 'The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs. What CSDM stage would this be completed in?',
    options: ['Crawl', 'Run', 'Fly', 'Walk', 'Foundation'],
    answer: [3],
    explanation: 'Walk stage is where Technology Management Offerings are used to populate support groups on CIs.'
  },
  {
    id: 64, type: 'single',
    question: 'Where are legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values reviewed?',
    options: ['Life cycle properties', 'Life cycle choice list', 'Life cycle mappings'],
    answer: [2]
  },
  {
    id: 65, type: 'multi',
    question: 'On the Duplicate CI Remediator wizard, which attributes are used to identify the Main CI? (Choose 2)',
    options: ['Oldest Created', 'Newest Created', 'Least Related Items', 'Most Related Items'],
    answer: [0, 3]
  },
  {
    id: 66, type: 'single',
    question: 'Where can an Administrator obtain the CMDB and CSDM Data Foundations Dashboard?',
    options: [
      'It is a free application on the ServiceNow Innovation Lab',
      'It is a paid application on the ServiceNow Store',
      'It is a free application on the ServiceNow Store',
      'It is active by default'
    ],
    answer: [2]
  },
  {
    id: 67, type: 'match',
    question: 'Match each CSDM Governance domain to the roles that make up the governance team.',
    options: [
      { left: 'Service Owner(s), Platform Owner', right: 'Foundation Domain' },
      { left: 'Technology Service Owner(s), Application Service Owner(s), Platform Owner', right: 'Portfolio Domain' },
      { left: 'Enterprise Architect(s), Platform Owner', right: 'Design Domain' },
      { left: 'Enterprise Architect(s), Data Steward(s), Process Owner(s)', right: 'Technical Domain' }
    ]
  },
  {
    id: 68, type: 'match',
    question: 'Match each CSDM domain to its benefit.',
    options: [
      { left: 'Understand CIs related to business application and related capabilities; identify redundancies, monitor costs and make better investment decisions around roadmap', right: 'Design and Planning' },
      { left: 'Understand technical services, technical service offerings, service support and all relationships to underlying technology CIs', right: 'Service Delivery' },
      { left: 'Understand business services and ownership, cost, scope of what is offered to the business/consumer and request access to the business service', right: 'Service Consumption' },
      { left: 'Use the base system tables when implementing CSDM to derive highest value from ServiceNow products and the Now Platform', right: 'Foundation' }
    ]
  },
  {
    id: 69, type: 'single',
    question: 'CMDB Data Foundations Dashboard shows Unique Locations Result percentage is low. Recommended process from the associated playbook?',
    options: [
      'Retain the location matching the org standard naming convention and delete the duplicate without further validation',
      'Keep both locations as either can be used as a valid alternate location',
      'Review both locations, update CIs with the correct location and delete the duplicate location',
      'Use the Duplicate CI Remediator to merge the duplicate location records'
    ],
    answer: [2]
  },
  {
    id: 70, type: 'multi',
    question: 'A CMDB Manager starts adding CSDM Design and Planning (Design) domain components. Who is involved? (Choose 2)',
    options: ['Application Service Owner', 'Application Owner', 'Enterprise Architect', 'Business Relationship Manager'],
    answer: [1, 2]
  },

  // Additional questions from the 98-page PDF that don't overlap with the 71 above
  {
    id: 71, type: 'single',
    question: 'A CMDB Administrator begins populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance management tool will accomplish this?',
    options: ['CI Class Manager', 'CMDB and CSDM Data Foundations Dashboard', 'CMDB Health Dashboard', 'CMDB Data Manager', 'De-duplication Templates'],
    answer: [3]
  },
  {
    id: 72, type: 'multi',
    question: 'What types of policies can be created within CMDB Data Manager? (Choose 2)',
    options: ['De-duplication', 'Archive', 'Reconciliation', 'Retire'],
    answer: [1, 3]
  },
  {
    id: 73, type: 'multi',
    question: 'What actions can be initiated from the CMDB Workspace? (Choose 2)',
    options: [
      'Execute ServiceNow Discovery',
      'Create a CMDB Data Manager certification policy',
      'Remediate duplicate CI records',
      'Create a new CMDB class'
    ],
    answer: [1, 2]
  },
  {
    id: 74, type: 'single',
    question: 'A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact?',
    options: [
      'The Data Source for the SCCM Service Graph Connector will be marked as Inactive',
      'Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured',
      'Any updates for the SCCM Service Graph Connector will be skipped during the upgrade'
    ],
    answer: [2],
    explanation: 'Customizing a Service Graph Connector means future upgrades will skip those customized parts.'
  },
  {
    id: 75, type: 'single',
    question: 'Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?',
    options: ['Be marked as inactive', 'Be marked as critical', 'Be retired and in end of life', 'Be fully operational and in use'],
    answer: [2]
  },
  {
    id: 76, type: 'single',
    question: 'Which tab in the CSDM Data Foundations Dashboard shows metrics on alignment of product models, locations, and business units with best practices?',
    options: ['Run', 'Foundation', 'Crawl', 'Walk', 'Fly'],
    answer: [1]
  },
  {
    id: 77, type: 'single',
    question: 'A CMDB Administrator wants to ensure all short-lived CIs not discovered in the past week are removed. After retiring them, which recommended action follows?',
    options: ['Create a delete policy', 'Create a scheduled job', 'Create a business rule'],
    answer: [0]
  },
  {
    id: 78, type: 'single',
    question: 'Which ServiceNow modules can be leveraged to configure recommended fields and generate task records when fields like Support Group or Managed By Group are missing for operational Linux servers?',
    options: [
      'Technical Service Offerings and Dynamic CI groups',
      'CMDB Workspace and Scheduled Jobs',
      'Dynamic CI groups and CMDB groups',
      'CI Class Manager and Health Preferences'
    ],
    answer: [3]
  },
  {
    id: 79, type: 'single',
    question: 'Steps to build a query showing all operational CIs belonging to a specific application service via CMDB Query Builder?',
    options: [
      'Add Business Application, Application Service, and Configuration Item classes; define filters for app service name and operational status; configure relationships; run',
      'Add Application Service and Configuration Item classes; configure the relationship; define filter for app service name and operational status; run',
      'Add Application Service and Configuration Item classes; configure relationship; add Operational Status and Name as columns; run'
    ],
    answer: [1]
  },
  {
    id: 80, type: 'multi',
    question: 'What is the value of the CMDB in security operations? (Choose 2)',
    options: [
      'Allows the security team to assess and remediate an incident',
      'Enables audits and attestations across CIs',
      'Auto-resolves a vulnerability',
      'Identifies the IT infrastructure with a vulnerability'
    ],
    answer: [0, 3]
  },
  {
    id: 81, type: 'single',
    question: 'An organization uses multiple data sources with different priority levels. A high-priority source stops updating server records. Which configuration allows a lower-priority source to update records after a specified inactivity period?',
    options: ['Data Refresh Rules', 'Health Inclusion Rules', 'Identification Rules', 'Reconciliation Rules'],
    answer: [0]
  },
  {
    id: 82, type: 'single',
    question: 'What is the default duration of the Staleness metric on the CMDB Health Dashboard - Correctness Scorecard?',
    options: ['24 hours', '30 days', '7 days', '60 days'],
    answer: [3]
  },
  {
    id: 83, type: 'match',
    question: 'Match each CMDB Health Dashboard metric to its description.',
    options: [
      { left: 'CMDB records that represent the same physical or logical asset multiple times', right: 'Duplicate' },
      { left: 'Fields necessary to create or update a CI record in the CMDB', right: 'Required' },
      { left: 'CMDB records that no longer maintain their logical or physical relationships with other CIs', right: 'Orphan' },
      { left: 'CMDB records that are no longer actively updated, but remain stored in the database', right: 'Stale' },
      { left: 'Fields that support the accuracy, completeness, and usability of CI records in the CMDB', right: 'Recommended' },
      { left: 'Actual values of specified fields are compared to the expected values defined in a template', right: 'Audit' }
    ]
  },
  {
    id: 84, type: 'single',
    question: 'A healthy CMDB with discovered infrastructure, accurately referenced non-discoverable data, and Service Mapping. How does this enhance change management?',
    options: [
      'Automatically schedules and deploys changes without human review or approval',
      'Provides insight into the potential impact of the change',
      'Ensures that no changes result in service downtime, regardless of planning or execution',
      'Enables auto-population of the assignment group field to dynamically route changes'
    ],
    answer: [1]
  },
  {
    id: 85, type: 'single',
    question: 'A report lists all CMDB Services that do not have an owner. Which governance process play prevents this from recurring?',
    options: [
      'Make the field Managed by mandatory on all CIs',
      'Make the field Owned by mandatory',
      'Set a default value on the Service Owner field so it is never empty'
    ],
    answer: [1]
  },
  {
    id: 86, type: 'single',
    question: 'Where does a CMDB Administrator collect attributes, IRE rules, and suggested relationships info for several classes?',
    options: ['CI Class Manager', 'CMDB Data Manager', 'CI Identifiers', 'CMDB Workspace'],
    answer: [0]
  },
  {
    id: 87, type: 'multi',
    question: 'Certification policy data filter: Table = Server [cmdb_ci_server]; Filter = Operating System contains "Server" OR contains "Linux". Which OS are affected? (Choose 2)',
    options: ['Windows Server 2022 Datacenter', 'Linux CentOS', 'Windows 2019 Datacenter', 'All'],
    answer: [0, 1]
  },
  {
    id: 88, type: 'single',
    question: 'How does a Manager set Principal Classes to restrict CI reference field classes on an incident form?',
    options: [
      'Use the Principal Class check box on the CI Class Manager\'s "Attributes" tab for a Class',
      'Use the Principal Class check box on the CMDB Workspace',
      'Use the Principal Class attribute on the CI',
      'Use the Principal Class check box on the CI Class Manager\'s "Basic Info" tab for a Class'
    ],
    answer: [3]
  },
  {
    id: 89, type: 'multi',
    question: 'Comparing the Unified Map to the Service Mapping map — what are additional capabilities of the Unified Map? (Choose 2)',
    options: [
      'Visibility to an application and the host it is installed on',
      'Number of levels displayed on a map can be modified',
      'Map nodes can be filtered based on user preferences',
      'Map can be zoomed in and out'
    ],
    answer: [1, 2]
  },
  {
    id: 90, type: 'multi',
    question: 'Default user groups available when setting up a CMDB Data Manager policy with Assignment type = "User Group Field"? (Choose 2)',
    options: ['Managed By Group', 'Support Group', 'Assignment Group', 'Owned by Group'],
    answer: [0, 1]
  },
  {
    id: 91, type: 'single',
    question: 'After selecting Enable Life Cycle Sync, what is the next step?',
    options: [
      'Fix the incorrect values in the Life Cycle Stage to match legacy values',
      'Activate the CSDM Life Cycle field mappings',
      'Resolve any incomplete field mappings identified in the Discrepancy Report'
    ],
    answer: [2]
  },
  {
    id: 92, type: 'single',
    question: 'What must be true for CMDB 360/Multisource CMDB to be able to report on and analyze data?',
    options: [
      'ServiceNow Discovery must be used to populate the CI data',
      'Reconciliation rules with priorities must be configured',
      'The CI data must go through the IRE',
      'The CI data must be from an authorized Service Graph Connector'
    ],
    answer: [2]
  },
  {
    id: 93, type: 'single',
    question: 'A Windows server is reclassified from Server [cmdb_ci_server] to Windows Server [cmdb_ci_win_server] through IRE. Which process occurred?',
    options: ['Class Switch', 'Class Change', 'Class Upgrade', 'Class Downgrade'],
    answer: [2]
  },
  {
    id: 94, type: 'multi',
    question: 'How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery? (Choose 2)',
    options: [
      'Assist integration choices',
      'Gain visibility and control',
      'Enhanced Service Management operations',
      'Reduced hardware costs'
    ],
    answer: [1, 2]
  },
  {
    id: 95, type: 'multi',
    question: 'Which Groups are synced to CIs from a Technology Management Service Offering (Technical Service Offering) that has a relationship to a Dynamic CI Group? (Choose 2)',
    options: ['Approval Group', 'Managed by Group', 'Support Group', 'Owned by Group'],
    answer: [1, 2],
    explanation: 'Managed by Group and Support Group are automatically synced from the Technical Service Offering to the member CIs.'
  },
  {
    id: 96, type: 'single',
    question: 'Which CSDM Data Foundation Dashboard tab shows metrics on alignment of Technology Management Services and Technology Management Offerings with best practices?',
    options: ['Crawl', 'Walk', 'Fly', 'Run'],
    answer: [1]
  },
  {
    id: 97, type: 'single',
    question: 'Adding a new CI class for new equipment that has not been seen before — which action ensures it integrates properly with the existing CMDB structure?',
    options: [
      'Use Service Catalog to define the new CI class',
      'Create a new CI class directly in the CI Class Manager and configure table inheritance to inherit from a relevant parent class',
      'Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type',
      'Use the CI Class Manager to create a new CI class but avoid setting up any inheritance'
    ],
    answer: [1]
  },
  {
    id: 98, type: 'multi',
    question: 'Characteristics or functions of ServiceNow IntegrationHub ETL? (Choose 2)',
    options: [
      'Integrates third-party data into the CMDB or into non-CMDB tables',
      'Performs discovery data collection and updates the CMDB',
      'Uses the IRE to process and integrate data',
      'Imports Microsoft SCCM/Intune data into the CMDB'
    ],
    answer: [0, 2]
  },
  {
    id: 99, type: 'multi',
    question: 'A CMDB Administrator using the CMDB Data Foundations Dashboard wants to run a playbook. Which documentation types are provided? (Choose 2)',
    options: ['Problem Analysis', 'Root Cause', 'Problem Overview', 'Automated Remediations'],
    answer: [0, 2]
  },
  {
    id: 100, type: 'match',
    question: 'Match each service type to its definition.',
    options: [
      { left: 'Logical representation of a deployed system or application stack', right: 'Application Service' },
      { left: 'Published to Service Owners and underpins one or more business or application services', right: 'Technology Management Service (Technical Service)' },
      { left: 'Published to Business Users and underpins one or more business capabilities', right: 'Business Service' }
    ]
  },
  {
    id: 101, type: 'single',
    question: 'A benefit of the CMDB Data Foundation Dashboard?',
    options: [
      'Provides the ability to configure health-related metrics',
      'Provides key health-related metrics to make decisions',
      'Provides the ability to resolve certification policy tasks'
    ],
    answer: [1]
  },
  {
    id: 102, type: 'single',
    question: 'Why would a Manager use CMDB 360/Multisource CMDB?',
    options: [
      'To identify CI attributes from multiple data sources',
      'To ingest data from multiple data sources using Service Graph Connector(s)',
      'To ingest data from multiple data sources using Import Set(s)',
      'To populate the CMDB from multiple data sources'
    ],
    answer: [0]
  },
  {
    id: 103, type: 'single',
    question: 'The Configuration Management team wants to confirm all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type?',
    options: ['Attestation', 'Delete', 'Retire', 'Archive', 'Certification'],
    answer: [0]
  },
  {
    id: 104, type: 'single',
    question: 'Many similar de-duplication tasks need to be remediated in bulk. How?',
    options: [
      'Configure and run a custom de-duplication background script',
      'Create and run a de-duplication template',
      'Create de-duplication tasks manually and remediate each',
      'Utilize the Duplicate CI Remediator Wizard'
    ],
    answer: [1]
  },

  // Questions from revised answers PDF (correct answers confirmed)
  {
    id: 105, type: 'single',
    question: 'The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. Which field is used to calculate the duration of this metric?',
    options: [
      'Last modified on (last_modified)',
      'Created (sys_created_on)',
      'Updated (sys_updated_on)',
      'First discovered (first_discovered)',
      'Most recent discovery (last_discovery)'
    ],
    answer: [2],
    explanation: 'Staleness is measured using the sys_updated_on (Updated) field.'
  },
  {
    id: 106, type: 'single',
    question: 'When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?',
    options: ['onComplete', 'onBefore', 'onStart', 'onAfter'],
    answer: [1],
    explanation: 'An onBefore script in the transform map ensures data is processed through the Identification and Reconciliation Engine.'
  },
  {
    id: 107, type: 'multi',
    question: 'Reconciliation Rules were configured for ServiceNow, Altiris, and SCCM. Which are true? (Choose 2)',
    options: [
      'Data collected with a discovery source of ServiceNow can insert new records but cannot update records created by Altiris or SCCM',
      'Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server table',
      'Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server table',
      'Data collected with SCCM can update any record because it has the highest priority number'
    ],
    answer: [1, 2]
  },
  {
    id: 108, type: 'single',
    question: 'Yesterday, an Apache Web Server CI was discovered via Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery. What will happen in the CMDB?',
    options: [
      'A new Apache Web Server CI is created',
      'The Apache Web Server CI will be reclassified as a Web Server CI',
      'The existing Apache Web Server CI will be reconciled and its version will be updated',
      'A duplication error will occur'
    ],
    answer: [0],
    explanation: 'Because the version changed, the identifier no longer matches the existing CI, so a new CI is created.'
  },
  {
    id: 109, type: 'match',
    question: 'A new ServiceNow customer is assembling a Configuration Management team. Drag each role to its corresponding job description.',
    options: [
      { left: 'Has read-only access to CMDB data and basic user interface such as CMDB reports and dashboards', right: 'CI Analyst' },
      { left: 'Accountable for managing all elements that make up a portfolio throughout their entire lifecycle', right: 'Service or Product Owner' },
      { left: 'Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records', right: 'Configuration Manager/CMDB Admin' },
      { left: 'Obtains highest level role for CMDB privileges', right: 'CMDB Process Owner' }
    ]
  },
  {
    id: 110, type: 'single',
    question: 'A healthcare provider faces a critical incident affecting its patient management system and needs to determine impacted users. Which CSDM-related data should they leverage?',
    options: [
      'Service Offerings by Department or Location',
      'Affected CI [task_ci] related list',
      'Application Service environment attribute',
      'Incident history of similar CIs'
    ],
    answer: [0],
    explanation: 'Service Offerings by Department or Location identifies which users/groups are impacted by the incident.'
  },
  {
    id: 111, type: 'multi',
    question: 'Which "Dynamic Rule Types" are available within the "Create Reconciliation Rule" wizard in CMDB 360/Multisource CMDB? (Choose 2)',
    options: ['Most Reported', 'Last Created', 'Last Updated', 'Smallest Value'],
    answer: [0, 3],
    explanation: 'Dynamic Reconciliation Rule types include Most Reported and Smallest Value.'
  },
  {
    id: 112, type: 'single',
    question: 'The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured?',
    options: [
      'Technical Service Offerings, Dynamic CI Groups, CMDB Groups',
      'Certification Filter, Certification Template, Audit',
      'Stale, Orphan, Duplicate',
      'Certification Policies, Data Filters, Scheduled Jobs'
    ],
    answer: [1],
    explanation: 'A Certification Filter, Certification Template, and Audit are required to configure CMDB Health Dashboard Compliance Scorecard metrics.'
  },
  {
    id: 113, type: 'single',
    question: 'Which is a purpose or requirement of CMDB Data Manager in ServiceNow?',
    options: [
      'Automates the enforcement of relationship rules between CIs in the CMDB',
      'Encrypts archived records for enhanced security',
      'Automates the archival and deletion of records based on retention policies'
    ],
    answer: [2],
    explanation: 'CMDB Data Manager automates lifecycle management including archival and deletion based on configured retention policies.'
  },
  {
    id: 114, type: 'multi',
    question: 'A CMDB Administrator wants to run the "Services Have Owners Identified" playbook on the CMDB Data Foundations Dashboard. Which remediation plays would be used? (Choose 2)',
    options: ['Fix Data', 'Govern Data', 'Report Data', 'Analyze Data'],
    answer: [0, 3],
    explanation: 'Fix Data and Analyze Data are the plays used in the Services Have Owners Identified playbook.'
  },
  {
    id: 115, type: 'single',
    question: 'Which use case requires Information Objects in CSDM?',
    options: [
      'Event Operations team wants to automate events into incidents for operational actions',
      'Asset Management team wants to understand the asset life cycle compliancy in a Business Application context',
      'SecOps team wants to understand the operational risk in the Business Application context',
      'Business Service Management team wants to understand operational impact for consumer parties',
      'Customer Service team wants to onboard pro-active case management'
    ],
    answer: [2],
    explanation: 'Information Objects represent data exchanged between applications and are needed for SecOps operational risk context in Business Applications.'
  },
  {
    id: 116, type: 'multi',
    question: 'A CMDB Administrator is considering using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits? (Choose 2)',
    options: [
      'Offers insight into the downstream impacts of poorly performing metrics',
      'Offers remediation templates to improve poorly performing metrics',
      'Offers remediation options to address and improve poorly performing metrics',
      'Offers automated scripts to resolve poorly performing metrics'
    ],
    answer: [0, 2]
  },
  {
    id: 117, type: 'multi',
    question: 'A Windows administration team wants a grouping of CIs using CMDB groups. Which methods can be used? (Choose 2)',
    options: ['Tag-based queries', 'Encoded queries', 'Scripted queries', 'Saved queries'],
    answer: [1, 3],
    explanation: 'CMDB Groups support Encoded queries and Saved queries for dynamic CI grouping.'
  },
  {
    id: 118, type: 'single',
    question: 'A CMDB Architect intends to populate the CMDB using the CSDM guidance. Which key stakeholders should be involved in decisions regarding CMDB population using the CSDM Crawl Stage?',
    options: [
      'Business Service Manager, Technology Service Owner',
      'Application Owner, Application Service Owner',
      'Customer Service Manager, Infrastructure Manager'
    ],
    answer: [1],
    explanation: 'The Crawl stage focuses on Application Services, so Application Owner and Application Service Owner are the key stakeholders.'
  },
  {
    id: 119, type: 'single',
    question: 'A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on. What stage of CSDM would map this relationship?',
    options: ['Fly', 'Crawl', 'Foundation', 'Run', 'Walk'],
    answer: [3],
    explanation: 'The Run stage maps Business Service Offerings to Application Services.'
  },
  {
    id: 120, type: 'single',
    question: 'A CMDB Administrator needs to set a CI Class as a Principal Class. Which CI Class Manager tab would need to be accessed?',
    options: ['Health > Attributes', 'Class Info > Basic Info', 'Class Info > Attributes'],
    answer: [1],
    explanation: 'The Principal Class check box is located on the Class Info > Basic Info tab in CI Class Manager.'
  },
  {
    id: 121, type: 'single',
    question: 'A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager to achieve this?',
    options: ['Principal Class', 'Independent', 'Extensible', 'Main Record'],
    answer: [0],
    explanation: 'Checking the Principal Class checkbox in CI Class Manager limits the CI reference field on ITSM records to only that class.'
  },

  // Additional questions from full 98-page CIS-CMDB Data Foundation 2 PDF
  {
    id: 122, type: 'single',
    question: 'A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?',
    options: [
      'glide.identification_engine.multisource_enabled',
      'glide.identification_engine.multisource.query.max.limit',
      'glide.identification_engine.multisource_cmdb_ci_enabled',
      'glide.identification_engine.multisource_non_cmdb_ci_enabled'
    ],
    answer: [0],
    explanation: 'The system property glide.identification_engine.multisource_enabled must be enabled to activate CMDB 360 / Multisource CMDB functionality.'
  },
  {
    id: 123, type: 'single',
    question: 'A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager has Managed by Group = Enterprise IT Services. Technical Service Offering has Managed by Group = Windows Support and Change Group = Change Management Team. What would be the Managed By Group for CIs from this class based on the configured values?',
    options: ['Enterprise IT Services', 'Change Management Team', 'Windows Support'],
    answer: [2],
    explanation: 'Values from the Technical Service Offering take precedence over CI Class Manager defaults, so the Managed By Group resolves to Windows Support.'
  },
  {
    id: 124, type: 'single',
    question: 'A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature will show that information?',
    options: ['Integration Hub', 'CMDB Integrations Dashboard', 'IntegrationHub ETL'],
    answer: [2],
    explanation: 'IntegrationHub ETL provides the field-to-field mapping details for Service Graph Connector imports into the CMDB.'
  },
  {
    id: 125, type: 'single',
    question: 'A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusion Rules tab available under a CI Class. How are these rules utilized by the IRE?',
    options: [
      'To narrow the scope of CIs included in the identification process',
      'To reduce the data ingested into the CMDB',
      'To reconcile specific attributes based on data sources'
    ],
    answer: [0],
    explanation: 'Health Inclusion Rules narrow the scope of CIs included in the IRE identification process.'
  },
  {
    id: 126, type: 'single',
    question: 'Two new CI records are imported into the hardware class of the CMDB. CI1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?',
    options: [
      'CI1 and CI2 both will be updated with matching records',
      'CI1 will be updated with matching record and CI2 will be inserted as new record',
      'CI1 will be inserted as new record and CI2 will be updated with matching record',
      'CI1 and CI2 both will be inserted as new records'
    ],
    answer: [1],
    explanation: 'The hardware class identification rule uses name (not IP) as an identifier, so CI1 (name match) is updated and CI2 (only IP match) is inserted as new.'
  },
  {
    id: 127, type: 'single',
    question: 'A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature?',
    options: [
      'Offers insight into the downstream impacts of poorly performing metrics',
      'Offers remediation templates to improve poorly performing metrics',
      'Offers remediation options to address and improve poorly performing metrics',
      'Offers automated scripts to resolve poorly performing metrics'
    ],
    answer: [2],
    explanation: 'CMDB Data Foundation Dashboard playbooks offer remediation options to address and improve poorly performing metrics.'
  },
  {
    id: 128, type: 'single',
    question: 'A CMDB Administrator is reviewing the health of the CMDB and notices a large percentage of the Hardware CIs are missing serial numbers. What structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue?',
    options: [
      'CSDM Now Create Playbooks',
      'CMDB Data Foundations Dashboard Playbooks',
      'CMDB Health Dashboard Playbooks',
      'CSDM Data Foundations Dashboard Playbooks'
    ],
    answer: [2],
    explanation: 'CMDB Health Dashboard Playbooks provide structured guidelines to troubleshoot and resolve CMDB health issues such as missing serial numbers.'
  },
  {
    id: 129, type: 'single',
    question: 'A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?',
    options: [
      'Work with the Database administration team to classify the data on each database that holds patient information, and use Relationships to map that back to the Business Application',
      'Create fields on the Business Application record to mark the Business Application as containing patient information, and ask the Business Application owner to mark the application accordingly',
      'Create an Information Object to represent the patient information, and link it through a relationship to the Business Application'
    ],
    answer: [2],
    explanation: 'CSDM recommends creating an Information Object to represent regulated data and linking it via relationship to the Business Application.'
  },
  {
    id: 130, type: 'multi',
    question: 'ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management? (Choose 2)',
    options: [
      'Mapped services provide visibility to users consuming the service',
      'Binding of alerts to specific CIs',
      'Correlation of alerts to knowledge base articles',
      'Mapped services provide visibility to the business impact of an alert'
    ],
    answer: [1, 3],
    explanation: 'A well-populated CMDB enables binding alerts to specific CIs and provides visibility to the business impact of alerts through mapped services.'
  },
  {
    id: 131, type: 'single',
    question: 'A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?',
    options: ['Promotion', 'Verification', 'Attestation', 'Certification'],
    answer: [3],
    explanation: 'A Certification policy in Data Manager is used to confirm/attest that CI records continue to exist and are accurate.'
  },
  {
    id: 132, type: 'single',
    question: 'A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class?',
    options: ['API Integrations', 'IRE Application', 'CI Class Manager', 'CI Identifiers module'],
    answer: [2],
    explanation: 'CI Class Manager is the single pane of glass to view and configure identification rules for a CI class.'
  },
  {
    id: 133, type: 'single',
    question: 'A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use?',
    options: [
      'Service Delivery (Manage Technical)',
      'Foundation',
      'Build and Integration (Build)',
      'Service Consumption (Sell/Consume)',
      'Design and Planning (Design)'
    ],
    answer: [0],
    explanation: 'Production line monitoring systems align to the Service Delivery (Manage Technical) domain of CSDM.'
  },
  {
    id: 134, type: 'single',
    question: 'A Configuration Manager is planning the implementation of the CMDB. Which is the prescribed CSDM rollout order?',
    options: [
      'Initiate, Plan, Execute, Deliver, Close',
      'Architecture, Business, Technical, Governance',
      'Foundation, Crawl, Walk, Run, Fly',
      'Initial, Developing, Defined, Managed'
    ],
    answer: [2],
    explanation: 'The prescribed CSDM rollout order is Foundation, Crawl, Walk, Run, Fly.'
  },
  {
    id: 135, type: 'single',
    question: 'A CMDB Manager wants to improve data quality using the CMDB Health Dashboard. What needs to happen to generate CMDB health scores?',
    options: [
      'The scheduled jobs for the CMDB Health Dashboard must be activated',
      'Nothing, CMDB health scores are calculated by default',
      'The plugin, CMDB health calculation, needs to be installed'
    ],
    answer: [0],
    explanation: 'CMDB health scores are produced only after the scheduled jobs for the CMDB Health Dashboard are activated.'
  },
  {
    id: 136, type: 'single',
    question: 'A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?',
    options: [
      'Determine the root cause of the change issue',
      'Identify blackout windows for the change',
      'Understand the impact of the change on services',
      'Route the change dynamically'
    ],
    answer: [2],
    explanation: 'CSDM provides the service mapping context that enables Change Management to understand the impact of a change on services.'
  },
  {
    id: 137, type: 'single',
    question: "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that need to be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store the information that will be used to satisfy the audits?",
    options: [
      'Customer Service Offerings and Databases',
      'Business Applications and Information Objects',
      'Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups'
    ],
    answer: [1],
    explanation: 'Business Applications and Information Objects are the CSDM elements used to store regulatory/audit information such as PII and PCI.'
  },
  {
    id: 138, type: 'multi',
    question: 'A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundation Dashboard. Which benefits support the decision to continually monitor the results on this dashboard? (Choose 2)',
    options: [
      'Provides metrics for CIs Processed by the IRE',
      'Reports on all orphan CIs in the CMDB',
      'Provides metrics on active CIs updated in the last 90 days',
      'Provides a list of all CIs that failed health audits'
    ],
    answer: [0, 2],
    explanation: 'The CMDB Data Foundation Dashboard provides metrics for CIs processed by the IRE and active CIs updated in the last 90 days.'
  },
  {
    id: 139, type: 'single',
    question: 'A Configuration Manager wants to use the Unified Map. Where would it be accessed?',
    options: ['CI Class Manager', 'CMDB Workspace', 'CMDB Data Manager'],
    answer: [1],
    explanation: 'The Unified Map is accessed from the CMDB Workspace.'
  },
  {
    id: 140, type: 'single',
    question: 'According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?',
    options: ['Enterprise Architect', 'Application Service Owners', 'Technology Service Owners'],
    answer: [2],
    explanation: 'Technology Service Owners initiate infrastructure-related catalog requests and define the requirements per CSDM.'
  },
  {
    id: 141, type: 'single',
    question: "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    options: [
      "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
      'Improves the implementation velocity of APM Foundation for future business application rationalization',
      'Enables impact assessments for incident, problem, and change on Business Services'
    ],
    answer: [2],
    explanation: 'At the Walk stage, the CMDB enables impact assessments for incident, problem, and change on Business Services.'
  },
  {
    id: 142, type: 'multi',
    question: 'Which are business values of CMDB? (Choose 2)',
    options: [
      'Collecting and managing financial data',
      'Streamlining incident and change management',
      'Strengthening operational resiliency',
      'Automating maintenance for CI relationships'
    ],
    answer: [1, 2],
    explanation: 'Key business values of the CMDB include streamlining incident and change management and strengthening operational resiliency.'
  }
];
