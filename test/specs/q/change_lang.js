import MainPage from '../../page_objects/main.page'

var mainPage = new MainPage()

describe('Mantest should change lang for', ()=>{
    it('en', ()=>{
        mainPage.open()
        mainPage.changeLang('en')
        browser.saveScreenshot('./en_lang.png')
    })
    it('ru', ()=>{
        mainPage.changeLang('ru')
        browser.saveScreenshot('./ru_lang.png')
    })
})