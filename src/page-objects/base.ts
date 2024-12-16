import { test as base } from '@playwright/test';
import { LoginPage } from './login-page';
import { TaskBoardPage } from './task-board-page';
import { SectionSidebar } from './section-sidebar';

export type MyFixtures = {
  loginPage: LoginPage;
  taskBoardPage: TaskBoardPage;
  sectionSidebar: SectionSidebar;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  taskBoardPage: async ({ page }, use) => {
    await use(new TaskBoardPage(page));
  },
  sectionSidebar: async ({ page }, use) => {
    await use(new SectionSidebar(page));
  },
});
