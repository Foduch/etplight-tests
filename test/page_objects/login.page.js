class LoginPage {

	get userNameInput() {return $('#Email')}
    get passwordInput() {return $('#Password')}
    get submitButton() {return $('button[type=submit]')}

	open(){
		browser.url('home');
    	browser.click('/html/body/cgn-root/cgn-main-container/div/cgn-main-tool-bar/div[2]/button[1]')
	}

	login(email, password){
		this.open()
		this.userNameInput.setValue(email)
		this.passwordInput.setValue(password)
		this.submitButton.click()
		browser.pause(1000)
	}

}

module.exports = LoginPage
