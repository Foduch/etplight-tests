const MainPage = require('./main.page')

class CategoriesPage extends MainPage{

	get addNoteButton() {return $('//mat-icon[text()=" note_add "]')}

	get nameInput() {return $('input[aria-required="true"]')}
	get descriptionInput() {return $('input[aria-required="false"]')}
	get langSelectWrapper() {return $('mat-select[role="listbox"][required]')}
	get langOptionRu() {return $('//span[@class="mat-option-text" ][text()="Русский"]')}
	get langOptionEn() {return $('//span[@class="mat-option-text" ][text()="English"]')}
	get cancelButton() {return $('button[aria-label="Close dialog"]')}
	get confirmButton() {return $('button[color=primary][type="button"][mat-raised-button]')}

	get uploadButton() {return $('button[type="button"][color="primary"]')}
	get inputDialog() {return $('//input[@accept=".csv"]')}

	

	get confirmDeleteButton() {return $('button[aria-label="Close dialog"][color="primary"]')}
	get cancelDeleteButton() {return $('button[aria-label="Close dialog"][color="warn"]')}
	get publishButton() {return $('//cgn-card-container-content//button[contains(@class, "mat-raised-button")]')}
	get cancelPublishButton() {return $('button[aria-label="Close dialog"]')}
	get confirmPublishButton() {return $('//mat-dialog-container//button[contains(@class, "mat-raised-button")]')}
	get versionInput() {return $('//mat-dialog-container//input')}

	open(){
		super.openPage(super.categoriesLink)
	}

	createNote(title, description, lang){
		this.addNoteButton.click()
		this.cancelButton.waitForVisible()
		this.nameInput.setValue(title)
		browser.pause(this.pauseDuration)
		this.descriptionInput.setValue(description)
		this.langSelectWrapper.click()
		if (lang == 'en'){
			this.langOptionEn.click()
		}
		else{
			this.langOptionRu.click()
		}
		this.confirmButton.click()
		browser.pause(this.pauseDuration)
	}

    openNote(title){
    	let noteLink = $(`//td[text() = " ${title} "]`)
    	noteLink.waitForVisible()
		noteLink.click()
		this.uploadButton.waitForVisible()    	
    }

    uploadNote (path){
    	//this.note_upload_button.click()
    	browser.chooseFile('//input[@accept=".csv"]', path)
	}

	getNoteByTitle(title) {
		return $(`//td[text() = " ${title} "]`)}

	deleteNoteByTitle(title){
		$(`//td[text() = " ${title} "]/..//button`).click()
		this.confirmDeleteButton.waitForVisible()
		this.confirmDeleteButton.click()
	}

	publishNote(version){
		this.publishButton.waitForVisible()
		this.publishButton.click()
		this.confirmPublishButton.waitForVisible()
		this.versionInput.setValue(version)
		this.confirmPublishButton.click()
		browser.pause(this.pauseDuration)
	}

}

module.exports = CategoriesPage