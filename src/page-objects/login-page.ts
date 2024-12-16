import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  //define the page object
  private readonly page: Page;
  private readonly header: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    //use the locator method to define the locators
    this.header = this.page.getByRole('heading', { name: 'Project Board Login' });
    this.usernameInput = this.page.getByLabel('Username');
    this.passwordInput = this.page.getByLabel('Password');
    this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.goto('/');
    await expect(this.header).toBeVisible();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}