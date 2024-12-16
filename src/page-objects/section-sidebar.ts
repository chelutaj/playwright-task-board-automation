import { Locator, Page, expect } from '@playwright/test';

export class SectionSidebar {
  private readonly page: Page;
  private readonly header: Locator;
  private readonly section: (sectionName: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = this.page.getByRole('heading', { name: 'Projects' });
    this.section = (sectionName: string) => this.page.getByRole('button', { name: sectionName });
  }

  async verifyHeader() {
    await expect(this.header).toBeVisible();
  }

  async navigateToSection(sectionName: string) {
    await expect(this.section(sectionName)).toBeVisible();
    await this.section(sectionName).click();
  }
}
