const MainPage = require('./main.page')

class CompanyProfilePage extends MainPage {

    get brandInput() { return $('//input[@name="name"]') }
    get descriptionInput() { return $('//textarea[@name="description"]') }
    get profileImageInput() { return $('//cgn-image-selector/input[@type="file"][@hidden]') }
    get countryInput() { return $('//input[@name="country"]') }
    get regionInput() { return $('//input[@name="region"]') }
    get companyCityInput() { return $('//input[@name="city"]') }
    get emailInput() { return $('//input[@name="email"]') }
    get siteInput() { return $('//input[@name="site"]') }
    get phoneInput() { return $('//input[@name="phone"]') }
    get phoneCommentInput() { return $('//input[@name="comment"]') }
    get innInput() { return $('//input[@name="inn"]') }
    get kppInput() { return $('//input[@name="kpp"]') }
    get postalAddressInput() { return $('//input[@name="postalAddress"]') }
    get addCategoryButton() { return $('cgn-categories-view+button') }

    //TODO
    //get add_document_button() {return $('')}

    get saveProfileButton() { return $('//button[@type="submit"]') }

    /**
     * 
     * @param {string} count 
     */
    getCompanyEmloyesChip(count) {
        if (count != '500') {
            return $(`//mat-chip[text()=" ${count}"]`)
        }
        else {
            return $('//mat-chip[text()=" more then 500 "]')
        }
    }

    createNewCompany() {
        super.openUserMenu()
        super.createNewCompanyLink.click()
        browser.pause(this.pauseDuration)
    }

    /**
     * 
     * @param {Element} field 
     * @param {string} value 
     */
    setValue(field, value) {
        field.setValue(value)
        browser.pause(this.pauseDuration)
    }

    saveProfile() {
        this.saveProfileButton.click()
    }
}

module.exports = CompanyProfilePage