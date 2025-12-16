import { test } from "../tests";
import { EMAIL, NAME, PASSWORD } from "../data/test-data";

test("login user", async ({
	loginPage,
	createUserViaApi,
	deleteUserViaApi,
}) => {
	await loginPage.login(EMAIL, PASSWORD);
	await loginPage.verifySuccessfulLogin(NAME);
});
