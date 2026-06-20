# Change Order System

This system is part of the Narrative Intelligence Method (NIM) and GitHub Brain workflow. It provides a structured approach for managing changes to specifications, code, and documentation.

## Directory Structure

- `change_orders/`: Stores individual change order documents
- `logs/`: Contains audit trails and processing logs
- `specs/`: Holds current specifications under change management
- `archive/`: Stores historical/obsolete change orders and specs

## Workflow

1. Change proposals are created as Markdown files in `change_orders/`
2. Proposals are reviewed and discussed using GitHub issues/PRs
3. Approved changes are implemented and logged in `logs/`
4. Updated specs are committed to `specs/`
5. Processed change orders are moved to `archive/`

This system ensures traceability and maintains a living history of project evolution.
