export interface ISocialNetwork {
    icon: string;
}

export class SocialNetwork implements ISocialNetwork {
    icon: string;

    constructor(icon: string) {
        this.icon = icon;
    }
}
