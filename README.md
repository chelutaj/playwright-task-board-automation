# playwright-task-board-workflow

## Description

This project automates the testing of the Task Board application, including:
    • Login flow testing.
    • Task column verification (e.g., “To Do,” “In Progress”).
    • Task tag validation (e.g., “Feature,” “High Priority”).
    • Navigation across sections like “Web Application” and “Mobile Application.”

The project leverages:
    • Playwright for automated end-to-end testing.
    • GitHub Actions for Continuous Integration (CI/CD).
    • Docker Compose for an easily configurable test environment.

Features
 • Automated Testing:
     • End-to-end testing for login flows and task management.
     • Column and tag validation for tasks.
     • Cross-section navigation testing.
 • Continuous Integration:
     • Preconfigured GitHub Actions workflow for running tests on every pull request.
 • Docker Compose:
     • Simplified environment setup for consistent test runs across different machines.

## Installation

### Steps

Prerequisites

Before getting started, ensure the following are installed: • Node.js (v16+ recommended) • npm (v8+ recommended) • Docker Desktop (latest version)

Steps
Clone the Repository:

git clone https://github.com/chelutaj/playwright-task-board-automation.git cd task-board-automation

Install Dependencies:

npm install --force

Run Docker Compose to set up the environment:

docker-compose up -d

Run Playwright's installation for browsers:

npx playwright install

Usage
Run Tests Locally:

npm run test

Continuous Integration

This project includes a preconfigured GitHub Actions workflow located at .github/workflows/playwright.yml. The workflow: • Installs dependencies. • Runs Playwright tests on a GitHub-hosted runner. • Reports test results in the Actions tab.

Docker Compose Commands Start the Environment:

docker-compose up --build

Stop the Environment:

docker-compose down