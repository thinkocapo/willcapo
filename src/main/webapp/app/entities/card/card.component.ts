import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICard } from 'app/shared/model/card.model';
import { Principal } from 'app/core';
import { CardService } from './card.service';

@Component({
    selector: 'jhi-card',
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit, OnDestroy {
    cards: ICard[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private cardService: CardService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.cardService.query().subscribe(
            (res: HttpResponse<ICard[]>) => {
                this.cards = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCards();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ICard) {
        return item.id;
    }

    registerChangeInCards() {
        this.eventSubscriber = this.eventManager.subscribe('cardListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
