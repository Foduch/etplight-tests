const LoginPage = require('../../page_objects/login.page')
const MainPage = require('../../page_objects/main.page')
const UserProfilePage = require('../../page_objects/user.profile.page')
const {userEmail, password} = require('../../../login.conf')

var mainPage = new MainPage()
var loginPage = new LoginPage()
var userProfilePage = new UserProfilePage()


describe('Mantest ', () => {
    it('should login', () => {
        loginPage.login(userEmail, password)
    })
    /*it('should open user profile slider', ()=>{
        main_page.open_user_profile_slider()
    })*/
    /*it('should close user profile slider', ()=>{
        main_page.close_user_profile_slider()
    })*/
    it('should open user page', () => {
        userProfilePage.open()
    })
    /*it('should scan for profile image', ()=>{
        if(userProfilePage.has_profile_image()){
            browser.saveScreenshot('profileimage.png')
        }
    })*/
    it('should delete profile image', () => {
        userProfilePage.deleteProfileImage()
        browser.pause(1000)
    })
    it('should change name', () => {
        userProfilePage.changeUserName('Имеряк', 'Фамильев', '')
        userProfilePage.saveChanges()
        browser.pause(1000)
    })
    // it('should upload new profile image', () => {
    //     userProfilePage.uploadProfileImage('C:/Users/g.chigarkin/MochaTests/errorShots/ERROR_chrome_2018-11-09T10-27-02.816Z.png')
    //     browser.pause(1000)
    //     userProfilePage.saveChanges()
    // })
})