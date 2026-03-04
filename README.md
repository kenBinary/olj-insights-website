# OLJ Insights Website

Frontend website for visualizing results from the OLJ data analysis project.

The analysis pipeline (scraping, cleaning, and computation) lives in:
https://github.com/kenBinary/olj-insights

This repository is presentation-only: it displays precomputed JSON outputs in a cleaner, user-friendly chart dashboard.

## What this project does

- Presents insights from 25,000+ remote job listings.
- Renders interactive charts grouped by analysis theme.
- Uses static JSON files as data inputs.

## What this project does not do

- No scraping
- No data cleaning
- No transformation/analysis logic
- No backend/API processing

All chart data is exported in advance and stored under `src/data/`.

## Sections in the dashboard

- Salary Landscape
  - Salary distribution
  - Average pay by category and subcategory
  - Pay range by work type
- Market Demand
  - Top required skills
  - Skills by work type
  - Skill pairing heatmap
- Market Shape
  - Monthly posting volume
  - Weekly hour distribution
  - Work type breakdown
- Pay vs Hours
  - Scatter plot for pay versus required hours

## Getting started

### Prerequisites

- Node.js 20+ (recommended)
- pnpm

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

### Lint

```bash
pnpm lint
```

## Data and source repositories

- Analysis source: https://github.com/kenBinary/olj-insights
- Website source: https://github.com/kenBinary/olj-insights-website

## Notes

- If you update the analysis, export fresh JSON files from the analysis repo and replace the corresponding files in `src/data/`.
- Keep JSON schema consistent with chart component expectations to avoid runtime chart errors.
