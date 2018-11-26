export default class Page {

	get pauseDuration() {return 200}
	get slider() { return $('//mat-icon[text()="menu"]') }
	get sidenav() { return $('mat-sidenav[mode=side]') }

	open(path) {
		browser.url(path)
	}
	openSidenav() {
		if (!this.sidenav.isVisible()) {
			this.slider.click()
			browser.pause(this.pauseDuration)
		}
	}
	closeSidenav() {
		if (this.sidenav.isVisible()) {
			this.slider.click()
			browser.pause(this.pauseDuration)
		}
	}


}