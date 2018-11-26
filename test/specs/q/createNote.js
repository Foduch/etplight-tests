const LoginPage = require('../../page_objects/login.page')
const CategoriesPage = require('../../page_objects/categories.page')
const {userEmail, password} = require('../../../login.conf')

var loginPage = new LoginPage()
var categoriesPage = new CategoriesPage()
var title = 'Создание справочника final 6'
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

    it('should delete note', () => {
        categoriesPage.deleteNoteByTitle(title)
        browser.pause(categoriesPage.pauseDuration)
        browser.saveScreenshot('after_delete.png')
    });
});
