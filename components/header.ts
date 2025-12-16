import { Page } from "@playwright/test";
import { Button } from "../page-factory/button";
import { expect } from "@playwright/test";

export class Header {
	public loginButton: Button;

	constructor(public page: Page) {
		this.loginButton = new Button({
			page,
			locator: '[href="/login"]',
			name: " Signup / Login",
		});
	}

	async verifyLoggedInAs(name: string): Promise<void> {
		await expect(this.page.locator("#header")).toContainText(
			`Logged in as ${name}`,
		);
	}
}
