const LoginPage = require('../../page_objects/login.page')

const MainPage = require('../../page_objects/main.page')
const {userEmail, password} = require('../../../login.conf')

var loginPage = new LoginPage()
var mainPage = new MainPage()

describe('User', ()=>{
	it('should login', ()=>{
		loginPage.login(userEmail, password)
	})
	it('should logout', ()=>{
		mainPage.logout()
	})
})