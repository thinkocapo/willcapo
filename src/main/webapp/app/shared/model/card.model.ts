import { Moment } from 'moment';
import { ITag } from 'app/shared/model//tag.model';

export const enum Behavior {
    URL = 'URL',
    COMPONENT = 'COMPONENT',
    STORY = 'STORY'
}

export interface ICard {
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    date?: Moment;
    behavior?: Behavior;
    data?: string;
    tags?: ITag[];
}

export class Card implements ICard {
    constructor(
        public id?: number,
        public image?: string,
        public title?: string,
        public description?: string,
        public date?: Moment,
        public behavior?: Behavior,
        public data?: string,
        public tags?: ITag[]
    ) {}
}
