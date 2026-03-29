---
title: "IFC Model Data in Excel: Using Copilot for IFC to Track Construction Progress"
date: 2026-03-29
draft: false
description: "Learn how to use the Flinker IFC Viewer for Excel and Copilot for IFC to extract element data from your BIM model into a spreadsheet — enabling structured, filter-driven progress tracking without any additional software."
slug: "ifc-excel-viewer-copilot-progress-tracking"
layout: "blogsingle"
keywords:
  - IFC Viewer Excel
  - Copilot for IFC
  - BIM progress tracking
  - IFC Excel Add-in
  - construction progress reporting
  - IFC element data export
  - BIM field reporting
  - Excel BIM integration
  - Flinker IFC Viewer
  - OpenBIM Microsoft 365
author: "Misbah Afzal"
author_image: "/assets/images/avatar/avatar-7.jpg"
featured_image: "Screenshot%202026-03-29%20161144_hero_IFC-Viewer-for-Excel_IFC-Copilot_Flinker.png"
categories:
  - Use Cases
  - Construction
  - Technology
tags:
  - IFC Viewer
  - Excel
  - Copilot for IFC
  - BIM
  - Progress Tracking
  - Microsoft 365
robots: "index, follow"
canonicalUrl: "https://flinker.app/blog/ifc-excel-viewer-copilot-progress-tracking"
image: "/blog/ifc-excel-viewer-copilot-progress-tracking/Screenshot%202026-03-29%20161144_hero_IFC-Viewer-for-Excel_IFC-Copilot_Flinker.png"
ogTitle: "IFC Model Data in Excel: Copilot for IFC and Progress Tracking"
ogDescription: "Use the Flinker IFC Viewer for Excel and Copilot for IFC to extract BIM element data into a spreadsheet and build a model-linked construction progress tracker — no additional software required."
twitterTitle: "Track Construction Progress with IFC Data in Excel"
twitterDescription: "Use Copilot for IFC to query your BIM model by storey and element type, push the data to Excel, and build a live progress tracker — all inside Microsoft 365."
schema:
  type: "Article"
  headline: "IFC Model Data in Excel: Using Copilot for IFC to Track Construction Progress"
  datePublished: "2026-03-29"
  dateModified: "2026-03-29"
  author:
    type: "Person"
    name: "Misbah Afzal"
  publisher:
    type: "Organization"
    name: "Flinker"
faq:
  - question: "What IFC versions does the Flinker Excel Add-in support?"
    answer: "The Flinker IFC Viewer for Excel supports IFC 2x3 and IFC 4, the two most widely used versions in the AECO industry."
  - question: "Do I need Autodesk or any other BIM software to use this?"
    answer: "No. The Flinker IFC Viewer is a standalone Excel Add-in. You only need a Microsoft 365 account and an IFC file."
  - question: "Can I track progress for individual building storeys?"
    answer: "Yes. Copilot for IFC lets you query elements by storey, class, property set, or any combination — so you can scope the data export to a single floor or a specific element type."
  - question: "Where is my IFC data processed?"
    answer: "IFC files are processed within your Microsoft 365 tenant. No data is sent to external servers."
  - question: "Can I update the Excel sheet when the model is revised?"
    answer: "Yes. Run the Copilot query again against the updated IFC file and push fresh element data to the sheet. The GUID column lets you reconcile new rows against existing status entries."
---

## The Progress Reporting Problem in Construction

Construction projects track hundreds or thousands of individual work packages across multiple floors, trades, and delivery phases. The data that would let a site manager, BIM coordinator, or project controller answer "what has been installed on floor 1 this week?" typically lives in two disconnected places: the BIM model — which contains every element, its type, its storey, and its properties — and a separate spreadsheet or site diary, which has status updates but no reliable link back to model elements.

The result is a familiar gap: status sheets are maintained manually, element identifiers are transcribed by hand or not captured at all, and reconciling what was planned in the model against what has been executed on site requires a meeting rather than a query.

The Flinker IFC Viewer for Excel closes this gap by making the IFC model queryable from inside Excel. Combined with Copilot for IFC — a natural-language interface for executing scripts against the loaded model — a BIM coordinator or project manager can extract a structured list of elements by storey and type, push them directly into a spreadsheet, and build a live status tracking table in minutes, without any additional software, without manual data exports, and without leaving Microsoft 365.

> **Available on Microsoft AppSource** — The Flinker IFC Viewer for Excel supports IFC 2x3 and IFC 4. Install directly from the Excel Add-ins store or [from Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/WA200008867?tab=Overview).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 120" width="100%" height="120" font-family="Segoe UI, Arial, sans-serif" style="max-width:900px;display:block;margin:1.5rem 0;">
  <rect width="900" height="120" fill="#ffffff"/>
  <rect x="20" y="30" width="170" height="60" rx="8" fill="#1a73e8"/>
  <text x="105" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Unstructured</text>
  <text x="105" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Data Received</text>
  <line x1="192" y1="60" x2="228" y2="60" stroke="#888" stroke-width="2"/>
  <polygon points="228,55 240,60 228,65" fill="#888"/>
  <rect x="242" y="30" width="170" height="60" rx="8" fill="#1a73e8"/>
  <text x="327" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Copilot for IFC</text>
  <text x="327" y="74" text-anchor="middle" font-size="12" fill="#cce5ff">in Excel</text>
  <line x1="414" y1="60" x2="450" y2="60" stroke="#888" stroke-width="2"/>
  <polygon points="450,55 462,60 450,65" fill="#888"/>
  <rect x="464" y="30" width="170" height="60" rx="8" fill="#1a73e8"/>
  <text x="549" y="56" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Extract to</text>
  <text x="549" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Excel Table</text>
  <line x1="636" y1="60" x2="672" y2="60" stroke="#888" stroke-width="2"/>
  <polygon points="672,55 684,60 672,65" fill="#888"/>
  <rect x="686" y="30" width="194" height="60" rx="8" fill="#1a73e8"/>
  <text x="783" y="49" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Clean Excel</text>
  <text x="783" y="65" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">&amp; PDF Report</text>
  <text x="783" y="81" text-anchor="middle" font-size="11" fill="#cce5ff">for Stakeholders</text>
</svg>

*From unstructured site data to a clean Excel progress report — using Copilot for IFC as the extraction layer inside Excel.*

[![Flinker IFC Viewer button in the Excel ribbon, highlighted in the Flinker Add-In tab](Screenshot%202026-03-29%20150629_Open-xsl-sheet-find-open_ifc-viewer-for-excel-microsoft-app.png)](Screenshot%202026-03-29%20150629_Open-xsl-sheet-find-open_ifc-viewer-for-excel-microsoft-app.png)
*Open any Excel workbook and launch the Flinker IFC Viewer from the Add-In ribbon to get started.*

## What the Flinker IFC Viewer for Excel Does

The Flinker IFC Viewer is an Office Add-in that opens a task pane alongside any Excel workbook. From that pane you can load an IFC file — from a local path, from SharePoint, or from a Teams-shared document library — and interact with the 3D model and its structured data without leaving Excel.

The viewer provides four primary interaction modes:

- **Visual navigation**: rotate, pan, zoom, isolate, and section the 3D model
- **Element selection and property inspection**: click any element to see its GlobalId, Name, ObjectType, and all populated property sets
- **Filter-based selection**: query elements by type, storey, property set, or property value using the built-in Filter panel
- **Copilot for IFC**: a natural-language scripting interface that lets you describe a selection or operation in plain language and execute it against the loaded model

For progress tracking workflows, the third and fourth modes do the heavy lifting.

[![IFC Viewer task pane open inside Excel with the 3D model rendered and the navigation panel visible](Screenshot%202026-03-29%20150851_Open-a-ifc-bim-modell-of-choice.png)](Screenshot%202026-03-29%20150851_Open-a-ifc-bim-modell-of-choice.png)
*Browse to your IFC file and load it — the 3D model renders directly inside the Excel task pane, no external viewer needed.*

## Copilot for IFC: Natural Language Queries on Your BIM Model

Copilot for IFC is a code-generation and execution interface specifically designed for IFC model operations. When you type a prompt, Copilot:

1. Interprets the intent against the loaded IFC schema and the specific model's actual data
2. Generates a script — shown transparently before execution
3. Executes the script against the model
4. Returns results (selections, colorings, statistics, or downloadable data) with a Markdown summary

The critical operational characteristic is that script generation is **model-aware**: Copilot inspects the actual storey names, element types, and property set values present in the loaded file before building the selection logic. Queries like "select all walls on the first floor" do not require you to know the exact storey identifier in the IFC file — Copilot resolves that from the model data.

**Example prompt:**

> *select all walls on first floor only, color them green*

Copilot inspects the `IfcBuildingStorey` instances in the loaded model, identifies the storey whose name matches "first floor" (checking common patterns such as "1", "01", "EG", "First"), selects all `IfcWall` instances belonging to that spatial container, applies green coloring, and returns a count and summary.

[![Copilot for IFC prompt with the result: elements selected and colored in the 3D viewer](Screenshot%202026-03-29%20151046_One-model-loaded_select-copilot-for-ifc_make-selection-prompt_e-g-your-elements-that-are-built-done-validated.png)](Screenshot%202026-03-29%20151046_One-model-loaded_select-copilot-for-ifc_make-selection-prompt_e-g-your-elements-that-are-built-done-validated.png)
*Copilot for IFC interprets the natural-language prompt, generates a model-aware script, executes it, and returns a count of matched elements — all in a single step.*

The result is immediately visible in the 3D viewer — all matched elements turn green — and the selection is ready for the next step: pushing the element data to the Excel sheet.

## Step-by-Step: Building a Progress Tracking Sheet

### Step 1: Install the Flinker IFC Viewer

Open Excel, navigate to **Insert → Add-ins → Get Add-ins**, and search for "Flinker IFC Viewer". Install and accept permissions. The **IFC Viewer** button appears in the far-right section of the **Home** ribbon under the **Flinker Add-In** group.

### Step 2: Load Your IFC Model

Click the IFC Viewer button to open the task pane. Select **Excel IFC Viewer → Visualize IFC files in Excel**. Browse to your IFC file and load it. The 3D model renders in the viewer panel alongside your workbook.

For this walkthrough, the model is a medical clinic (`NBU_MedicalClinic_Arch-Optimized.ifc`). The same workflow applies to any IFC 2x3 or IFC 4 file.

### Step 3: Query Elements by Floor and Type Using Copilot

Open the **Copilot for IFC** panel (the copilot icon in the left sidebar of the viewer). Type a natural-language prompt describing the elements you want to track. For a first-floor wall completion report:

> *select all walls on first floor only, color them green*

Copilot generates and executes the script. In this example, it found and selected **656 walls** on the first floor — immediately visible as green geometry in the viewer. The summary confirms the element count and provides a brief scope breakdown.

**Narrowing the scope:** You can refine the query by element type (`IfcSlab`, `IfcBeam`, `IfcDoor`), by property value (`load-bearing only`, `fire-rated elements`), or by combining criteria across multiple storeys:

> *select all load-bearing walls on storeys 1 and 2, color them red*

### Step 4: Push Element Data to Excel

With elements selected in the viewer, Copilot presents a **"push to Excel sheet"** action. Clicking this writes the structured element table directly into the active Excel workbook. Each row corresponds to one IFC element:

| Column | IFC Source | Purpose |
|--------|-----------|---------|
| `GUID` | `IfcRoot.GlobalId` | Unique element identifier, persistent across model revisions |
| `Name` | `IfcRoot.Name` | Type-name string (e.g., `Basic Wall:Exterior - Insul Panel on Mtl. Stud`) |
| `ObjectType` | `IfcObject.ObjectType` | Detailed classification string (e.g., `Partition (92mm Stud):128369`) |

[![Copilot prompt to push element selection to the Excel sheet — pro feature shown](Screenshot%202026-03-29%20151344_Prompt-ifc-copilot-to-push-selection-to-excel-sheet-pro-feature_free-plan-cand-download-excel.png)](Screenshot%202026-03-29%20151344_Prompt-ifc-copilot-to-push-selection-to-excel-sheet-pro-feature_free-plan-cand-download-excel.png)
*Copilot pushes the selected element data directly into the active Excel workbook. The GUID column links each row back to the exact IFC element.*

[![Free plan allows Excel download; pro plan syncs directly to the active sheet](20260329-1303-56.5727558_free-plan-can-download_pro-viewer-can-sync-to-sheet.gif)](20260329-1303-56.5727558_free-plan-can-download_pro-viewer-can-sync-to-sheet.gif)
*Free plan: download an Excel file with the element data. Pro plan: sync the selection directly into the active workbook sheet.*

### Step 5: Extend the Table with Tracking Columns

Excel will prompt you to format the range as a table — accept this, as it enables filtering, sorting, and structured references. With the IFC data as the base, add tracking columns to the right:

| Column | Content |
|--------|---------|
| `Status` | Dropdown: `Not Started` / `In Progress` / `Complete` / `Inspected` |
| `Completion Date` | Date when element installation was confirmed on site |
| `Responsible Party` | Subcontractor or trade responsible for this element |
| `Notes` | Free text for site observations or punch list items |

The `GUID` column is the stable link between each Excel row and the corresponding IFC element. When the model is updated and a new extract is run, GUIDs allow you to reconcile new element lists against existing status entries — provided the authoring tool preserves GlobalIds across revisions, which is the standard expectation for IFC exports.

### Step 6: Use the Filter Panel for Visual Verification

The IFC Viewer's **Filter panel** lets you isolate elements by type, storey, or property value directly in the 3D view. Selecting a specific element type (for example, `Basic Wall:Exterior - Insul Panel on Mtl. Stud:130854`) shows only those elements in the model, making it practical to visually verify status calls: a site manager can confirm that the walls marked "Complete" in the sheet correspond to the installed elements visible in the viewer.

[![Add more table batches by clearing the selection and running a new Copilot query for the next element scope](Screenshot%202026-03-29%20151602_Clear-selection_and_add-more-table-batches-as-needed.png)](Screenshot%202026-03-29%20151602_Clear-selection_and_add-more-table-batches-as-needed.png)
*After the first push, clear the selection and run a new Copilot query — for a different floor, element type, or system — to append another batch to the sheet.*

[![IFC Viewer bidirectional referencing: selecting a row in Excel highlights the element in the 3D viewer](Screenshot%202026-03-29%20151602_If-your-prompt-generates-no-data-table_create-it-so-you-benefit-from-bidirectional-referecing-of-element-selection.png)](Screenshot%202026-03-29%20151602_If-your-prompt-generates-no-data-table_create-it-so-you-benefit-from-bidirectional-referecing-of-element-selection.png)
*The Filter panel and element selection work bidirectionally between the viewer and the spreadsheet — isolate a type in the viewer to cross-check against the status rows in Excel.*

The right-click context menu in the viewer adds further options: Show properties, Add topic, Hide selection, Isolate selection, Reset filters, and Clear selection — covering the full coordination and inspection workflow without leaving the Excel environment.

## What You Can Build on Top

Once the structured IFC element table exists in the workbook, standard Excel capabilities handle the analysis layer:

**Pivot Tables**: Summarize completion rates by storey, element type, or responsible party. A single pivot on `Status` and `Name` gives you a completion percentage per wall type across the project.

**Conditional Formatting**: Color-code rows by status — green for Complete, amber for In Progress, red for Not Started — to produce a visual progress dashboard with no additional tooling.

**COUNTIF / SUMIF formulas**: Calculate overall completion percentages, elements remaining per trade, or days elapsed since the last status update.

**Power Query refresh**: If the status data is stored in SharePoint and the IFC is re-queried against an updated model version, Power Query can merge updated element lists against existing status rows by `GUID`, preserving historical entries and flagging newly added elements that appear in the latest model revision.

[![Multiple element scopes merged into a consolidated progress view in Excel](20260329-1347-57.6375731_Finally-you-can-combine-data-tables-and-show-in-consolidated-view.gif)](20260329-1347-57.6375731_Finally-you-can-combine-data-tables-and-show-in-consolidated-view.gif)
*Combine multiple batches — walls, doors, slabs across storeys — into a single consolidated Excel view for reporting across the full project scope.*

## Why This Approach Works in Practice

The workflow is practical for several operational reasons.

**No proprietary software dependency.** The only requirement is Microsoft 365 (Excel) and an IFC file. Site managers, project controllers, and clients who are not BIM software users can participate in the tracking process through a familiar tool.

**Model-linked identifiers.** Because the exported data carries the IFC `GlobalId` for every element, the Excel sheet is not a disconnected copy — it is a structured extract of the model with a stable reference back to the source geometry and property data. This enables meaningful reconciliation when models are updated during the delivery phase.

**Scoped queries reduce noise.** A progress tracker for floor 1 walls does not need all 15,000 elements in the building model. Copilot's natural-language queries let you extract precisely the scope relevant to a given reporting period — one floor, one element class, one system at a time — keeping the tracking sheet manageable and focused.

**Auditability.** The GUID-based table provides a complete audit record: which elements were in scope, when their status was updated, and who updated it. Combined with SharePoint version history (when the workbook is stored in a project document library), this creates a time-series record of construction progress anchored to model elements — directly usable for handover documentation, defect liability period reporting, or facility management intake.

## Getting Started

The Flinker IFC Viewer for Excel is available on Microsoft AppSource. Installation takes under two minutes and requires no IT deployment or admin consent for individual users.

- [Install the IFC Viewer for Excel from Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/WA200008867?tab=Overview)
- [Visualize IFC files in Excel — product page](https://flinker.app/products/ifc-viewer/)
- [IFC Viewer for SharePoint](https://marketplace.microsoft.com/en-us/product/WA200006238?tab=Overview) and [IFC Viewer for Microsoft Teams](https://marketplace.microsoft.com/en-us/product/WA200007412?tab=Overview) are available for teams that need model access across the full Microsoft 365 surface area

For teams running the IFC Viewer across SharePoint, Teams, and Excel — the three platforms where the Flinker viewer is available — element GlobalIds, shared IFC file storage in SharePoint, and consistent deep-link references enable a coordinated workflow where the model is the single source of truth across all project communication and reporting surfaces.
