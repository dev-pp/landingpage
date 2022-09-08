export interface IMenuItem {
    path: string;
    label: string;
    link: string;
}

export class MenuItem implements IMenuItem {
    path: string;
    label: string;
    link: string;

    constructor(path: string, label: string, link: string) {
        this.path = path;
        this.label = label;
        this.link = link;
    }
}
