---
title: "Technical organizational measures (TOM)"
date: 2025-02-22
draft: false
description: "Technical organizational measures (TOM) for Flinker GmbH, detailing pseudonymization, encryption, data integrity, availability, and resilience."
keywords: ["Technical organizational measures", "TOM", "Flinker GmbH", "Data security", "Pseudonymization", "Encryption", "Data integrity", "Data availability", "Data resilience"]
author: "Flinker GmbH"
canonical_url: "https://www.flinker.app/tom"
url: "/tom/"
layout: "mdpage"
---

<!-- Your Terms & Conditions content goes here -->

# 1. Pseudonymization of Personal Data
In the case of pseudonymization: Separation of assignment data and storage in separate and secured systems (possibly encrypted).

Internal instruction: Personal data should, if possible, be anonymized/pseudonymized in the event of disclosure or after the expiration of the statutory deletion period.

# 2. Encryption of Personal Data
All IT systems that store and process personal data are encrypted.

The secure transmission of data is ensured by the **https** communication protocol.

# 3. Ensuring Integrity and Confidentiality
Flinker uses the services of the Azure Cloud provided by Microsoft Corporation. All information regarding the data center, data protection, and data security is described at the following URL: [Strong Data Integrity in the Cloud | Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center/privacy/data-management). This includes, among other things, the following points:

- A company-wide, risk-oriented Information Security Management System (ISMS) is implemented through Microsoft Data Governance.
- Only Microsoft Azure components with logging, backup, and security features are used. None of these services are self-hosted.
- The emergency management system includes release management, backup, and Azure technology, enabling easy restoration of services.
- The physical security of the data is ensured by the Microsoft data center in Europe.
- The service is fully developed by us and hosted entirely on Azure. Apart from Microsoft, no other party is involved.
- All SPFx web parts used execute JavaScript code in the browser, thus not triggering any installation or code execution on the customer’s side.

## Storage/Deletion of Data
- Access to security-relevant information via the live system is restricted to a few employees (based in Germany). These individuals have sole access to the production environment. All our employees are trained in handling customer data and are familiar with our data protection security standards.
- Customer-related data is never disclosed. There are also no legal obligations to share data with third parties. Apart from Microsoft, no third parties are involved.
- Only Microsoft data centers in Europe are used for the processing and storage of data.
- All your data can be completely deleted upon request at no cost to you.
- The customer can also host the entire application in their own Azure environment. In this case, no data is shared, and every process takes place solely within the customer’s tenant. In the event of insolvency, the service can seamlessly continue in your own Azure environment.

## Data Collection
Actions within the service are logged and can be provided to the customer as a CSV file upon request. Any associated costs are to be borne by the customer.

## Changes and Maintenance
- Our customers are informed about all security-relevant changes.
- Since no separate authentication provider is used, a security incident can only occur via Microsoft Azure. Should a security incident occur, it will be reported at the earliest possible time.
- All types of outages, maintenance, and security incidents will be communicated to you.

# 4. Ensuring Availability and Resilience
Flinker uses the services of the Microsoft Azure Germany Cloud as well as Microsoft Corporation. All information regarding the data center, data protection, and data security is described at the following URL: [Strong Data Integrity in the Cloud | Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center/privacy/data-management). This includes, among other things, the following points:

- Authentication is handled by Microsoft SharePoint / Office 365. Flinker does not provide its own authentication; only the token is passed on.
- Access to sensitive data via the live system is restricted to a few employees. There is no possibility of external access to the customer’s data. Access restriction is monitored and ensured through the Azure Authentication Log.
- Monitoring and logging are ensured through Azure Log Analytics.
- Regular data backups are provided by Microsoft Azure.
- Regarding technical dependencies, reference is made to the browsers recommended by Microsoft for Office 365. Flinker adheres to these recommendations and adapts the source code accordingly.

## Technologies Used
Access to the service is provided via Microsoft Teams or SharePoint. For the use of Teams or SharePoint applications by Flinker, an app registration (Azure AD App Registration) is required, which must be approved by the administrator.

This application is used for every customer and also for accessing the tenants. It employs multi-tenancy methods using Azure AD for authentication and identity management.

## Resilience
- The presence of regular code reviews, functional, component, and integration tests, taking security aspects into account, is ensured. This additionally guarantees compliance with programming and hardening guidelines.
- The change management process is implemented in the form of agile software development in sprints using Microsoft Azure. Deployment occurs only after automated and manual tests and approval.

# 5. Restoration of the Availability of Personal Data
Flinker uses the services of the Microsoft Azure Germany Cloud as well as Microsoft Corporation. All information regarding restoration and availability is described at the following URL: [Strong Data Integrity in the Cloud | Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center/privacy/data-management).

# 6. Review, Assessment, and Evaluation of the Effectiveness of the Aforementioned Measures
An internal control system has been established to review the measures described. The results are regularly reviewed, assessed, and updated.

- To verify the security mechanisms and processes, an audit by Flinker employees is possible. Any costs incurred are to be borne by the customer.
- For an audit by a Microsoft employee, please direct your request directly to Microsoft.