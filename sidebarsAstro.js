/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  cloud: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'overview'
    },
    {
      type: 'category',
      label: 'Get started',
      items: [
        'create-project',
        'log-in-to-astro',
        'create-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop-project',
        {
          type: 'category',
          label: 'Write DAGs',
          items: [
            'astro-python-sdk',
            'deferrable-operators',
            'kubepodoperator-local',
            'kubernetespodoperator',
          ],
        },
        'upgrade-runtime',
        'airflow-api',
        'test-and-troubleshoot-locally',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy-code',
        'ci-cd',
      ],
    },
    {
      type: 'category',
      label: 'Manage Deployments',
      items: [
        'configure-deployment-resources',
        'configure-worker-queues',
        'api-keys',
        'environment-variables',
        'secrets-backend',
      ],
    },
    {
      type: 'category',
      label: 'Observability',
      items: [
        'view-logs',
        'deployment-metrics',
        {
          type: 'category',
          label: 'Data lineage',
          items: [
            'set-up-data-lineage',
            'data-lineage',
          ],
        },
        'airflow-alerts',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        {
          type: 'category',
          label: 'Install Astro',
          link: {
            type:'generated-index',
            title: 'Install Astro',
            description: 'Install the Astro platform in your cloud.'
          },
          items: [
            'install-aws',
            'install-azure',
            'install-gcp',
          ],
        },
        'manage-workspaces',
        {
          type: 'category',
          label: 'User access',
          items: [
            'add-user',
            'user-permissions',
            'configure-idp',
          ],
        },
        {
          type: 'category',
          label: 'Manage clusters',
          items: [
            'view-clusters',
            'create-cluster',
          ],
          {
            type: 'category',
            label: 'Configure cluster resources',
            link: {
              type:'generated-index',
              title: 'Configure cluster resources',
              description: 'Configure your AWS, Azure, or GCP cluster resources on Astro. Unless otherwise specified, new clusters on Astro are created with a set of default resources that should be suitable for most use cases.'
            },
            items: [
              'modify-cluster',
              'resource-reference-aws',
              'resource-reference-azure',
              'resource-reference-gcp',
            ],
          },
        },
        {
          type: 'category',
          label: 'Connect Astro',
          link: {
            type:'generated-index',
            title: 'Connect Astro to external data sources',
            description: 'Connect Astro to external data sources. A connection to AWS, Azure, or GCP allows Astro to access data stored on your AWS, Azure, or GCP instances and is a necessary step to running pipelines in a production environment.'
          },
          items: [
            'connect-aws',
            'connect-azure',
            'connect-gcp',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Release notes',
      items: [
        'release-notes',
        'runtime-release-notes',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'astro-support',
        {
          type: 'category',
          label: 'Astro Runtime',
          items: [
          'runtime-image-architecture',
          'runtime-version-lifecycle-policy',
          ],
        },
        'platform-variables',
        'data-plane-activation',
        {
          type: 'category',
          label: 'Data lineage',
          items: [
            'data-lineage-support-and-compatibility',
            'data-lineage-concepts',],
        },
        {
          type: 'category',
          label: 'Security',
          link: { type: 'doc', id: 'security' },
          items: [
            'shared-responsibility-model',
            'resilience',
            'disaster-recovery',
            'data-protection',
            'gdpr-compliance',
            'hipaa-compliance',
            'secrets-management',],
        },
      ],
    },
  ],
  cli: [
      {
        type: 'doc',
        label: 'CLI overview',
        id: 'cli/overview'
      },
      {
        type: 'doc',
        label: 'Install the CLI',
        id: 'cli/install-cli'
      },
    {
      type: 'doc',
      label: 'Configure the CLI',
      id: 'cli/configure-cli'
    },
    {
      type: 'doc',
      label: 'Release notes',
      id: 'cli/release-notes'
    },
    {
    type: 'category',
    label: 'Command reference',
    link: { type: 'doc', id: 'cli/reference' },
    items: [
      'cli/astro-login',
      'cli/astro-logout',
      'cli/astro-completion',
      'cli/astro-config-get',
      'cli/astro-config-set',
      'cli/astro-context-delete',
      'cli/astro-context-list',
      'cli/astro-context-switch',
      'cli/astro-deploy',
      'cli/astro-deployment-create',
      'cli/astro-deployment-delete',
      'cli/astro-deployment-list',
      'cli/astro-deployment-logs',
      'cli/astro-deployment-update',
      'cli/astro-deployment-variable-create',
      'cli/astro-deployment-variable-list',
      'cli/astro-deployment-variable-update',
      'cli/astro-dev-bash',
      'cli/astro-dev-init',
      'cli/astro-dev-kill',
      'cli/astro-dev-logs',
      'cli/astro-dev-parse',
      'cli/astro-dev-ps',
      'cli/astro-dev-pytest',
      'cli/astro-dev-run',
      'cli/astro-dev-start',
      'cli/astro-dev-stop',
      'cli/astro-dev-restart',
      'cli/astro-login',
      'cli/astro-logout',
      'cli/astro-user-invite',
      'cli/astro-version',
      'cli/astro-workspace-list',
      'cli/astro-workspace-switch',],
  },
  ],
};
