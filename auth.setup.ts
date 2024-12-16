import { test as setup } from './src/page-objects/base';
import { config } from 'dotenv';
config();

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;
const authFile = '.auth/user.json';

setup('user authentication', async ({ page, loginPage, sectionSidebar }) => {
  await loginPage.login(username, password);
  await sectionSidebar.verifyHeader();
  await page.context().storageState({ path: authFile });
});
