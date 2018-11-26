const LoginPage = require('../../page_objects/login.page')
const CategoriesPage = require('../../page_objects/categories.page')
const {userEmail, userEmail2, password} = require('../../../login.conf')

var loginPage = new LoginPage()
var categoriesPage = new CategoriesPage()
var title = 'Создание справочника final 12'
var noteVersion = '1'

describe('a', () => {
    it('should login', () => {
        loginPage.login(userEmail, password)
    });

    it('should open categories page', () => {
        categoriesPage.open()
        browser.pause(categoriesPage.pauseDuration)
    });

    it('should create note', () => {
        categoriesPage.createNote(title, '', 'ru')
        browser.pause(categoriesPage.pauseDuration)
    });

    it('should open note', () => {
        categoriesPage.openNote(title)
        browser.pause(categoriesPage.pauseDuration)
    });

    it('should upload note', () => {
        categoriesPage.uploadNote('import_v1.csv')
        browser.pause(categoriesPage.pauseDuration)
    });

    it('should publish note', () => {
        categoriesPage.publishNote(noteVersion)
        browser.pause(categoriesPage.pauseDuration)
    });    

    it('should return to categories page', () => {
        categoriesPage.open()
        browser.pause(categoriesPage.pauseDuration)
        browser.saveScreenshot('after_publish.png')
    });

    it('should logout', () => {
        categoriesPage.logout()
    });
});

describe('test', () => {
    it('should login another user', () => {
        loginPage.login(userEmail2, password)
    });

    it('should delete note', () => {
        categoriesPage.open()
        browser.pause(categoriesPage.pauseDuration)
        categoriesPage.deleteNoteByTitle(title)
        browser.pause(categoriesPage.pauseDuration)
        browser.saveScreenshot('after_delete.png')
    });
});
