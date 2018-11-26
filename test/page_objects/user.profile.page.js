const MainPage = require('./main.page')

class UserProfilePage extends MainPage {

    get userLastNameInput() { return $('//input[contains(@name, "lastName")]') }
    get userFirstNameInput() { return $('//input[contains(@name, "firstName")]') }
    get userSecondNameInput() { return $('//input[contains(@name, "secondName")]') }
    get userEmailText() { return $('//input[contains(@name, "email")]') }
    get saveUserProfileButton() { return $('//button[contains(@class, "save-button")]') }
    get createNewCompanyButton() { return $('//div/button[contains(@type, "button")][ contains(@color, "primary")]') }
    get userProfileImage() { return $('//div[contains(@class, "image-container")]/img') }
    get userProfileImageDeleteButton() { return $('//button[contains(@class, "delete-button")]') }
    get userImageInput() { return $('//input[contains(@type, "file")]') }
    get userImageUploadConfirmButton() { return $('//mat-dialog-actions/button[contains(@class, "mat-raised-button")]') }
    get userImageUploadCloseButton() { return $('//mat-dialog-actions/button[contains(@aria-label, "Close dialog")]') }

    open() {
        super.openUserProfile()
    }

    hasProfileImage() {
        return this.userProfileImage.isExisting()
    }

    deleteProfileImage() {
        if (this.hasProfileImage()) {
            this.userProfileImageDeleteButton.click()
        }
    }

    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} secondName 
     */
    changeUserName(firstName, lastName, secondName) {
        this.userFirstNameInput.setValue(firstName)
        this.userLastNameInput.setValue(lastName)
        this.userSecondNameInput.setValue(secondName)
    }

    /**
     * 
     * @param {string} path 
     */
    uploadProfileImage(path) {
        this.userImageInput.chooseFile(path)
        browser.pause(5*this.pauseDuration)
        this.userImageUploadConfirmButton.click()
    }

    saveChanges() {
        this.saveUserProfileButton.click()
    }


}

module.exports = UserProfilePage