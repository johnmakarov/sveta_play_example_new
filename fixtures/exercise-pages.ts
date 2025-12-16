import { Fixtures } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { ContextPagesFixture } from "./context-pages";

export type ExercisePagesFixture = {
	loginPage: LoginPage;
};

export const exercisePagesFixture: Fixtures<
	ExercisePagesFixture,
	ContextPagesFixture
> = {
	loginPage: async ({ contextPage }, use) => {
		const loginPage = new LoginPage(contextPage);

		await use(loginPage);
	},
};
