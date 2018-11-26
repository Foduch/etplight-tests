import LoginPage from '../../page_objects/login.page'
import MainPage from '../../page_objects/main.page'
import CompanyProfilePage from '../../page_objects/company.profile.page'
import {userEmail, password} from '../../../login.conf'

var loginPage = new LoginPage()
var main_page = new MainPage()
var companyProfilePage = new CompanyProfilePage()
var assert = require('assert')

function randomText(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function randomDecimalText(length) {
  var text = "";
  var possible = "0123456789";
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}


describe('Test', () => {
  it('should login', () => {
    loginPage.login(userEmail, password)
  });

  it('should create company', () => {
    companyProfilePage.createNewCompany()
    companyProfilePage.setValue(companyProfilePage.brandInput ,randomText(10))
    companyProfilePage.setValue(companyProfilePage.descriptionInput, randomText(10))
    companyProfilePage.setValue(companyProfilePage.countryInput ,randomText(10))
    companyProfilePage.setValue(companyProfilePage.regionInput ,randomText(10))
    companyProfilePage.setValue(companyProfilePage.companyCityInput, randomText(10))
    companyProfilePage.setValue(companyProfilePage.emailInput ,userEmail)
    companyProfilePage.setValue(companyProfilePage.innInput, randomDecimalText(10))
    companyProfilePage.saveProfile()
    browser.pause(1000)
    assert(companyProfilePage.saveProfileButton.getAttribute('disabled'))

  });

});