/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CardComponentsPage, CardDeleteDialog, CardUpdatePage } from './card.page-object';

const expect = chai.expect;

describe('Card e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let cardUpdatePage: CardUpdatePage;
    let cardComponentsPage: CardComponentsPage;
    let cardDeleteDialog: CardDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Cards', async () => {
        await navBarPage.goToEntity('card');
        cardComponentsPage = new CardComponentsPage();
        expect(await cardComponentsPage.getTitle()).to.eq('Cards');
    });

    it('should load create Card page', async () => {
        await cardComponentsPage.clickOnCreateButton();
        cardUpdatePage = new CardUpdatePage();
        expect(await cardUpdatePage.getPageTitle()).to.eq('Create or edit a Card');
        await cardUpdatePage.cancel();
    });

    it('should create and save Cards', async () => {
        const nbButtonsBeforeCreate = await cardComponentsPage.countDeleteButtons();

        await cardComponentsPage.clickOnCreateButton();
        await promise.all([
            cardUpdatePage.setImageInput('image'),
            cardUpdatePage.setTitleInput('title'),
            cardUpdatePage.setDescriptionInput('description'),
            cardUpdatePage.setDateInput('2000-12-31'),
            cardUpdatePage.behaviorSelectLastOption(),
            cardUpdatePage.setDataInput('data')
        ]);
        expect(await cardUpdatePage.getImageInput()).to.eq('image');
        expect(await cardUpdatePage.getTitleInput()).to.eq('title');
        expect(await cardUpdatePage.getDescriptionInput()).to.eq('description');
        expect(await cardUpdatePage.getDateInput()).to.eq('2000-12-31');
        expect(await cardUpdatePage.getDataInput()).to.eq('data');
        await cardUpdatePage.save();
        expect(await cardUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await cardComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Card', async () => {
        const nbButtonsBeforeDelete = await cardComponentsPage.countDeleteButtons();
        await cardComponentsPage.clickOnLastDeleteButton();

        cardDeleteDialog = new CardDeleteDialog();
        expect(await cardDeleteDialog.getDialogTitle()).to.eq('Are you sure you want to delete this Card?');
        await cardDeleteDialog.clickOnConfirmButton();

        expect(await cardComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
