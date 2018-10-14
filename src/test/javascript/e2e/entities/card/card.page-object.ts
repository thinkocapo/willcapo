import { element, by, ElementFinder } from 'protractor';

export class CardComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-card div table .btn-danger'));
    title = element.all(by.css('jhi-card div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getText();
    }
}

export class CardUpdatePage {
    pageTitle = element(by.id('jhi-card-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    imageInput = element(by.id('field_image'));
    titleInput = element(by.id('field_title'));
    descriptionInput = element(by.id('field_description'));
    dateInput = element(by.id('field_date'));
    behaviorSelect = element(by.id('field_behavior'));
    dataInput = element(by.id('field_data'));

    async getPageTitle() {
        return this.pageTitle.getText();
    }

    async setImageInput(image) {
        await this.imageInput.sendKeys(image);
    }

    async getImageInput() {
        return this.imageInput.getAttribute('value');
    }

    async setTitleInput(title) {
        await this.titleInput.sendKeys(title);
    }

    async getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    async setDescriptionInput(description) {
        await this.descriptionInput.sendKeys(description);
    }

    async getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    async setDateInput(date) {
        await this.dateInput.sendKeys(date);
    }

    async getDateInput() {
        return this.dateInput.getAttribute('value');
    }

    async setBehaviorSelect(behavior) {
        await this.behaviorSelect.sendKeys(behavior);
    }

    async getBehaviorSelect() {
        return this.behaviorSelect.element(by.css('option:checked')).getText();
    }

    async behaviorSelectLastOption() {
        await this.behaviorSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async setDataInput(data) {
        await this.dataInput.sendKeys(data);
    }

    async getDataInput() {
        return this.dataInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class CardDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-card-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-card'));

    async getDialogTitle() {
        return this.dialogTitle.getText();
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
