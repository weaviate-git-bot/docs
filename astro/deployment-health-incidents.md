---
sidebar_label: 'Deployment health incidents'
title: 'View and address Deployment health incidents'
id: deployment-health-incidents
description: A list of all possible Deployment incident types and steps for resolving each one.
---

import HostedBadge from '@site/src/components/HostedBadge';

:::caution

This feature is in [Public preview](feature-previews.md).

:::

Astro monitors your Deployment and displays notifications when issues arise that could affect your Deployment's functionality or performance. Use your Deployment health status to quickly check if your Deployment has any issues that need immediate attention.

## Deployment health

After you create a Deployment, its real-time health status appears at the top of the Deployment information page. Deployment health indicates if the components within your Deployment are running as expected.

![Deployment Health status](/img/docs/deployment-health.png)

The following are possible health statuses your Deployments can have:

- **Creating** (Grey): Astro is still provisioning Deployment resources. It is not yet available to run DAGs. See [Create a Deployment](create-deployment.md).
- **Deploying** (Grey): A code deploy or environment update is in progress. Hover over the status indicator to view specific information about the deploy, including whether it was an image deploy or a DAG-only deploy.
- **Healthy** (Green): The Airflow webserver and scheduler are both healthy and running as expected.
- **Unhealthy** (Red): Your Deployment webserver or scheduler are restarting or otherwise not in a healthy, running state.
- **Unknown** (Grey): The Deployment status can't be determined.

Your Deployment health status will also show a number next to the status if a [Deployment health incident](#deployment-incidents) is currently active. Incidents are classified as **Warning** or **Critical** level.

![A Deployment health status](/img/docs/health-status.png)

If your Deployment is unhealthy or the status can't be determined, check the status of your tasks and wait for a few minutes. If your Deployment is unhealthy for more than five minutes, review the logs in the [Airflow component logs](view-logs.md#view-airflow-component-logs-in-the-cloud-ui) in the Cloud UI or contact [Astronomer support](https://cloud.astronomer.io/open-support-request).

## Deployment incidents

<HostedBadge/>

Astro automatically monitors your Deployments and sends messages when your Deployment isn't running optimally or as expected. These messages are known as _Deployment incidents_. To view information about the incident, hover over the incident and click **View details**.

![A Deployment Health incident message appearing after a user hovers over the Deployment health status](/img/docs/incident-unfurl.png)

The following table contains all types of Deployment incidents. A **warning** incident indicates that specific tasks or DAGs might fail, while a **critical** incident indicates that your entire Deployment might not work as expected.

| Incident name                           | Severity | Description                                                                                        |
| --------------------------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| Scheduler Heartbeat Not Found           | Critical | The Airflow scheduler has not sent a heartbeat for longer than 10 minutes.                         |
| Airflow Database Storage Unusually High | Warning  | The metadata database has tables that are larger than 20GiB.                                       |
| Worker Queue at Capacity                | Warning  | At least one worker queue in this Deployment is running the maximum number of tasks and workers.   |
| Worker Queue Does Not Exist             | Warning  | There is at least 1 task instance that is configured to run on a worker queue that does not exist. |

Use the following topics to address each of these incidents.

### Scheduler Heartbeat Not Found

The scheduler has not sent a heartbeat for longer than 10 minutes. This could be a sign that the scheduler is down. Tasks will keep running, but new tasks will not be scheduled. 

If you receive this incident notification, Astronomer Support has already been notified and no action is required from you. Ensure that you [configured a Deployment contact email](deployment-details.md#configure-deployment-contact-emails) so that you can be notified if this issue requires additional follow-ups.

### Airflow Database Storage Unusually High

Your Deployment metadata database is currently storing tables that are larger than 20GiB. Click **View details** on the incident to view the affected tables.

This is typically caused due to XCom data and can result in tables running out of storage. You can reduce the amount of XCom data in a table in a few different ways:

- Configure an external backend for XCom data, such as AWS S3. See the [Astronomer XCom Backend Tutorial](https://docs.astronomer.io/learn/xcom-backend-tutorial).
- Implement intermediary data storage for tasks so that Airflow doesn't store large amounts of data when passing data between tasks. See [Intermediary data storage](https://docs.astronomer.io/learn/airflow-passing-data-between-tasks#intermediary-data-storage).

If you receive this incident notification and don't utilize XComs, submit a request to [Astronomer Support](https://cloud.astronomer.io/open-support-request).

### Worker Queue at Capacity

At least one worker queue in your Deployment is running the maximum possible number of tasks and workers. Tasks will continue to run but new tasks will not be scheduled until worker resources become available. Click **View details** on the incident to view the affected worker queue(s).

To limit this notification for a worker queue, increase its **Max # Workers** setting or choose a larger **Worker Type**. See [Configure worker queues](https://docs.astronomer.io/astro/configure-worker-queues).

### Worker Queue Does Not Exist

At least one task is configured to run on a worker queue that does not exist. Instances of this task will remain in the queued state until the worker queue is created. To resolve this incident:

1. Hover over the Deployment health status and click **View details** for the incident.
2. Check the DAG and task IDs that reference the non-existent worker queue. The non-existent worker queue name referenced from your DAG code is listed under **Queue**.
3. For each affected DAG, you can either create a new worker queue with the exact name as shown in **Queue** or update your DAG code to reference an existing worker queue. See [Configure worker queues](configure-worker-queues.md#assign-tasks-to-a-worker-queue).

## See also

- [Deployment metrics](deployment-metrics.md)
- [Astro alerts](alerts.md)
- [Deployment logs](view-logs.md)
