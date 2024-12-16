import { expect, Locator, Page } from '@playwright/test';

export class TaskBoardPage {
  private readonly page: Page;
  private readonly task: (taskName: string) => Locator;
  private readonly columnHeading: (taskName: string) => Locator;
  private readonly applicationTitle: (title: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.task = (taskName: string) => this.page.getByRole('heading', { name: taskName });
    this.columnHeading = (taskName: string) =>
      this.task(taskName).locator('xpath=ancestor::div[contains(@class, "flex")]/preceding-sibling::h2');
    this.applicationTitle = (title: string) => this.page.getByRole('banner').getByRole('heading', { name: title });
  }

  async verifyApplicationTitle(title: string) {
    await expect(this.applicationTitle(title)).toBeVisible();

    const actualTitle = await this.applicationTitle(title).textContent();
    expect(actualTitle?.trim()).toBe(title);
    if (!actualTitle || actualTitle.trim() !== title) {
      throw new Error(`Application title mismatch! Expected: "${title}", Found: "${actualTitle?.trim()}"`);
    }
  }

  async verifyTaskInColumn(taskName: string, expectedColumn: string) {
    await expect(this.task(taskName)).toBeVisible();

    let columnText = await this.columnHeading(taskName).textContent();
    columnText =
      columnText
        ?.trim()
        .replace(/\(\d+\)/, '')
        .trim() || '';

    expect(columnText).toBe(expectedColumn);
    if (columnText !== expectedColumn) {
      throw new Error(
        `Task "${taskName}" is not in the expected column! Expected: "${expectedColumn}", Found: "${columnText}"`
      );
    }
  }

  async verifyTaskTags(taskName: string, expectedTags: string[]) {
    await expect(this.task(taskName)).toBeVisible();

    const tagsContainer = this.task(taskName).locator('..').locator('div.flex-wrap');
    const tags = await tagsContainer.locator('span').allTextContents();
    expectedTags.forEach(tag => {
      expect(tags).toContain(tag);
      if (!tags.includes(tag)) {
        throw new Error(`Task "${taskName}" is missing tag: "${tag}". Found tags: ${tags.join(', ')}`);
      }
    });
  }
}