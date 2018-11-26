import Page from './page'
import { reverse } from 'dns';

class MainPage extends Page {


	// sidebar navigation links (left side of page)
	get proceduresLink() { return $('//mat-icon[text()=" assignment "]') }
	get createProcedureLink() { return $('//mat-icon[text()=" add "]') }
	get companiesLink() { return $('//mat-icon[text()=" supervisor_account "]') }
	get categoriesLink() { return $('//mat-icon[text()=" business_center "]') }
	get usersLink() { return $('//mat-icon[text()=" list_alt "]') }

	// user menu
	get userNameText() { return $('//h2[contains(@class, "user-name")]') }
	get userEmailText() { return $('//div[contains(@class, "email")]') }
	get userCompanyAvatar() { return $('//div[contains(@class, "company-info")]//img') }
	get userCompanyName() { return $('//div[contains(@class, "company-info")]//span[1]') }
	get userCompanyPosition() { return $('//div[contains(@class, "company-info")]//span[2]') }
	get userMenuLink() { return $('//cgn-main-avatar') }
	get userProfileLink() { return $('//mat-icon[text()="account_box"]') }
	get currentCompanyProfileLink() { return $('//mat-icon[text()="business"]') }
	get changeCompanyLink() { return $('//mat-icon[text()="swap_horiz"]') }
	get logoutLink() { return $('//mat-icon[text()="exit_to_app"]') }
	get createNewCompanyLink() { return $('//mat-icon[text()="add"]') }

	//user sidenav
	get userSidenavProfileLink() { return $('//cgn-side-view-header-actions/a') }
	get userSidenavClosingButton() { return $('//cgn-side-view-container/div/button[contains(@class, "closing")]') }
	get userSidenavUserName() { return $('//span[contains(@class, "name")]') }
	get userSidenavUserEmail() { return $('//div[contains(@fxlayoutalign, "center")]/span[contains(@class, "line-16-24")]') }


	//lang change bar
	get langListBox() { return $('//mat-icon[text()="language"]') }
	get langListItemRu() { return $('#mat-option-0') }
	get langListItemEn() { return $('#mat-option-1') }


	open() {
		super.open('home')
	}

	isLogin() {
		return this.userMenuLink.isExisting()
	}

	changeLang(lang) {
		super.openSidenav()
		this.langListBox.click()
		this.langListItemEn.waitForVisible()
		switch (lang) {
			case 'ru':
				this.langListItemRu.click()
				break
			default:
				this.langListItemEn.click()
		}
		browser.pause(this.pauseDuration)
	}

	/**
	 * Open page from menu(left sidenav)
	 * @param {Element} link 
	 */
	openPage(link) {
		super.openSidenav()
		link.waitForVisible()
		link.click()
	}

	openUserMenu() {
		if (this.isLogin()) {
			if (!this.logoutLink.isVisible()) {
				this.userMenuLink.click()
				this.logoutLink.waitForVisible()
			}
		}
	}

	openUserSidenav() {
		this.openUserMenu()
		this.userProfileLink.click()
		this.userSidenavClosingButton.waitForVisible()
		browser.pause(this.pauseDuration)
	}

	closeUserSidenav() {
		if (this.userSidenavClosingButton.isVisible()) {
			this.userSidenavClosingButton.click()
			browser.pause(this.pauseDuration)
		}
	}

	openUserProfile() {
		this.openUserSidenav()
		this.userSidenavProfileLink.click()
		browser.pause(this.pauseDuration)
	}

	logout() {
		this.openUserMenu()
		this.logoutLink.click()
	}


}

export default MainPage