import { test } from '../page-objects/base';
import testData from '../data/testData.json';

interface TestCase {
  testCase: string;
  testName: string;
  path: string;
  task: {
    name: string;
    column: string;
    tags: string[];
  };
}

const testCases: TestCase[] = testData;

  // test.use({ storageState: { cookies: [], origins: [] } });


test.describe('Task Verification Suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Dynamically create tests for each test case
  testCases.forEach(({ testCase, testName, path, task }) => {
    test(`${testCase}: ${testName}`, async ({ sectionSidebar, taskBoardPage }) => {
      await test.step('Navigate to the appropriate section', async () => {
        await sectionSidebar.navigateToSection(path);
        await taskBoardPage.verifyApplicationTitle(path);
      });

      await test.step('Verify the task is in the correct column', async () => {
        await taskBoardPage.verifyTaskInColumn(task.name, task.column);
      });

      await test.step('Verify the task has the expected tags', async () => {
        await taskBoardPage.verifyTaskTags(task.name, task.tags);
      });
    });
  });
});
