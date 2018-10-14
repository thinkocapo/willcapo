import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { ICard } from 'app/shared/model/card.model';
import { CardService } from './card.service';

@Component({
    selector: 'jhi-card-update',
    templateUrl: './card-update.component.html'
})
export class CardUpdateComponent implements OnInit {
    card: ICard;
    isSaving: boolean;
    dateDp: any;

    constructor(private cardService: CardService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ card }) => {
            this.card = card;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.card.id !== undefined) {
            this.subscribeToSaveResponse(this.cardService.update(this.card));
        } else {
            this.subscribeToSaveResponse(this.cardService.create(this.card));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ICard>>) {
        result.subscribe((res: HttpResponse<ICard>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
