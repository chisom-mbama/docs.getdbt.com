---
title: "Microsoft Excel 365"
id: excel
description: "Integrate with Excel 365 to query your metrics in a spreadsheet."
tags: [Semantic Layer]
sidebar_label: "Microsoft Excel 365"
---

# Microsoft Excel 365 <Lifecycle status='beta'/>

<p style={{ color: '#808080', fontSize: '1.1em' }}>
The dbt Semantic Layer offers a seamless integration with Microsoft Excel 365 through a custom menu. This add-on allows you to build dbt Semantic Layer queries and return data on your metrics directly within Excel 365.
</p>

## Prerequisites

- You have [configured the dbt Semantic Layer](/docs/use-dbt-semantic-layer/setup-sl) and are using dbt v1.6 or higher.
- You need a Microsoft Excel account with access to install add-ons.
- You have a [dbt Cloud Environment ID](/docs/use-dbt-semantic-layer/setup-sl#set-up-dbt-semantic-layer) and a [service token](/docs/dbt-cloud-apis/service-tokens) to authenticate with from a dbt Cloud account.
- You must have a dbt Cloud Team or Enterprise [account](https://www.getdbt.com/pricing). Suitable for both Multi-tenant and Single-tenant deployment.
  - Single-tenant accounts should contact their account representative for necessary setup and enablement.

import SLCourses from '/snippets/_sl-course.md';

<SLCourses/>

## Installing the add-on

1. In Excel,authenticate with your host, dbt Cloud environment ID, and service token.
   - Access your Environment ID, Host, and URLs in your dbt Cloud Semantic Layer settings. Generate a service token in the Semantic Layer settings or API tokens settings
   <Lightbox src="/img/docs/dbt-cloud/semantic-layer/sl-and-gsheets.jpg" width="70%" title="Access your Environment ID, Host, and URLs in your dbt Cloud Semantic Layer settings. Generate a service token in the Semantic Layer settings or API tokens settings" />

2. Start querying your metrics using the **Query Builder**. For more info on the menu functions, refer to [Query Builder functions](#query-builder-functions). To cancel a query while running, press the **Cancel** button.

import Tools from '/snippets/_sl-excel-gsheets.md';

<Tools 
type="Excel 365"
bullet_1="There's no timeout limit."
bullet_2="If you're using this extension, make sure you're signed into 365 with the same Excel profile you used to set up the Add-In. Log in with one profile at a time as using multiple  profiles at once might cause issues."
queryBuilder="/img/docs/dbt-cloud/semantic-layer/sl-and-gsheets.jpg"
/>

**Limited use policy disclosure**

The dbt Semantic Layer for Excel's use and transfer to any other app of information received from Microsoft's APIs will adhere to Microsoft API Services User Data Policy including the Limited Use requirements.

## FAQs
<FAQ path="Troubleshooting/sl-alpn-error" />