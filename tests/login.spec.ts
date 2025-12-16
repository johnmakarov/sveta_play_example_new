import { NAME, EMAIL, PASSWORD } from "./test-data";
import { loginTest } from "./tests";

loginTest(
	"login user",
	async ({ loginPage, createUserViaApi, deleteUserViaApi }) => {
		await loginPage.login(EMAIL, PASSWORD);
		await loginPage.verifySuccessfulLogin(NAME);
	},
);
