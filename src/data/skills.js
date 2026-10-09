export const links = {
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  email: 'mailto:your-email@example.com',
  resume: '/resume.pdf',
};
export const skills = {
  'Manual Testing': ['SDLC', 'STLC', 'Requirement Analysis', 'Test Planning', 'Test Case Design', 'Functional', 'Regression', 'Smoke', 'Sanity', 'Integration', 'System', 'UAT', 'Exploratory', 'Compatibility', 'Usability'],
  'Defect Management': ['Bug Life Cycle', 'Severity vs Priority', 'Defect Reporting', 'Bug Tracking', 'Root Cause Analysis', 'Retesting'],
  Automation: ['JavaScript ES6+', 'Playwright', 'Selenium concepts', 'Page Object Model', 'Data-Driven Testing', 'Assertions', 'Locators', 'Wait Strategies', 'Trace Viewer', 'Parallel Testing'],
  'API Testing': ['REST API', 'HTTP Methods', 'Status Codes', 'Headers', 'Request Body', 'Response Validation', 'Postman'],
  Database: ['SQL', 'SELECT', 'WHERE', 'JOIN', 'GROUP BY', 'ORDER BY', 'Data Validation'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Playwright', 'Jira', 'Chrome DevTools'],
};
export const lifecycle = ['Requirement Analysis', 'Test Planning', 'Test Case Design', 'Test Execution', 'Defect Reporting', 'Retesting', 'Regression Testing', 'Automation', 'CI/CD'];
export const metrics = { total: 250, passed: 220, failed: 18, blocked: 12, automated: 150, manual: 100 };
export const codeSample = `import { test, expect } from '@playwright/test';

test('user login test', async ({ page }) => {
  await page.goto('https://example.com');

  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
});`;
export const frameworkTree = `automation-framework/
├── tests/
│   ├── login.spec.js
│   ├── product.spec.js
│   └── checkout.spec.js
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   └── CheckoutPage.js
├── fixtures/
├── test-data/
├── utils/
├── playwright.config.js
└── package.json`;
export const frameworkFeatures = ['Page Object Model', 'Reusable utilities', 'Custom fixtures', 'Test data management', 'Screenshots & video', 'Trace viewer', 'Parallel execution', 'HTML reporting'];
export const repoUrl = 'https://github.com/your-username/automation-framework';
