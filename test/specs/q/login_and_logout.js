import LoginPage from '../../page_objects/login.page'
import MainPage from '../../page_objects/main.page'
import {userEmail, password} from '../../../login.conf'

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