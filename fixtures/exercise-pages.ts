import type { Fixtures } from "@playwright/test";
import { LoginPage } from "../pages/login-page";

export type ExercisePagesFixture = {
	loginPage: LoginPage;
};

export const exercisePagesFixture: Fixtures<
	ExercisePagesFixture,
> = {
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
};
