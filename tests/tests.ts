import { test as base } from "@playwright/test";
import {
	ContextPagesFixture,
	contextPagesFixture,
} from "../fixtures/context-pages";
import {
	ExercisePagesFixture,
	exercisePagesFixture,
} from "../fixtures/exercise-pages";
import {
	NAME,
	FIRST_NAME,
	LAST_NAME,
	EMAIL,
	PASSWORD,
	COUNTRY,
	STATE,
	ADDRESS,
	CITY,
	ZIPCODE,
	MOBILE_NUMBER,
	DOB_DAY,
	DOB_MONTH,
	DOB_YEAR,
} from "./test-data";
import { expect } from "@playwright/test";

type AllFixtures = ContextPagesFixture &
	ExercisePagesFixture & {
		createUserViaApi: void;
		deleteUserViaApi: void;
	};

export const loginTest = base.extend<AllFixtures>({
	...contextPagesFixture,
	...exercisePagesFixture,
	createUserViaApi: async ({ request }, use) => {
		const response = await request.post("/api/createAccount", {
			form: {
				name: NAME,
				email: EMAIL,
				password: PASSWORD,
				title: "Mr",
				birth_date: DOB_DAY,
				birth_month: DOB_MONTH,
				birth_year: DOB_YEAR,
				firstname: FIRST_NAME,
				lastname: LAST_NAME,
				company: "Test Company",
				address1: ADDRESS,
				address2: "",
				country: COUNTRY,
				zipcode: ZIPCODE,
				state: STATE,
				city: CITY,
				mobile_number: MOBILE_NUMBER,
			},
		});

		const responseBody = await response.text();
		expect(response.status()).toBe(200);
		expect(responseBody).toContain("User created!");

		await use();
	},

	deleteUserViaApi: async ({ request }, use) => {
		await use();

		const response = await request.delete("/api/deleteAccount", {
			form: {
				email: EMAIL,
				password: PASSWORD,
			},
		});

		const responseBody = await response.text();

		expect(response.status()).toBe(200);
		expect(responseBody).toContain("Account deleted!");
	},
});
