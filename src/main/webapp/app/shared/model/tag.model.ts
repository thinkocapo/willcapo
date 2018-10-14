import { ICard } from 'app/shared/model//card.model';

export interface ITag {
    id?: number;
    name?: string;
    card?: ICard;
}

export class Tag implements ITag {
    constructor(public id?: number, public name?: string, public card?: ICard) {}
}
