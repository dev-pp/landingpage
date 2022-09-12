export interface IMenuItem {
    path: string;
    label: string;
    link: string;
    isCTA: boolean;
}

export class MenuItem implements IMenuItem {
    path: string;
    label: string;
    link: string;
    isCTA: boolean;

    constructor(path: string, label: string, link: string, isCTA: boolean) {
        this.path = path;
        this.label = label;
        this.link = link;
        this.isCTA = isCTA;
    }
}
