export class CustomSkillResponseCard {
    private _type: string;
    private _title: string;
    private _content: string;
    private _text: string;
    private _image: CardImage;

    constructor(type: string, title: string, content: string, text: string, image: CardImage) {
        this._type = type;
        this._title = title;
        this._content = content;
        this._text = text;
        this._image = image;
    }

    get type(): string {
        return this._type;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get text(): string {
        return this._text;
    }

    get image(): CardImage {
        return this._image;
    }

    public toJSON() {
        return {
            type: this.type,
            title: this.title,
            content: this.content,
            text: this.text,
            image:this.image
        }
    }
}

export class CardImage {
    private _smallImageUrl;
    private _largeImageUrl;

    constructor(smallImageUrl, largeImageUrl) {
        this._smallImageUrl = smallImageUrl;
        this._largeImageUrl = largeImageUrl;
    }


    get smallImageUrl() {
        return this._smallImageUrl;
    }

    get largeImageUrl() {
        return this._largeImageUrl;
    }

    public toJSON() {
        return {
            smallImageUrl: this._smallImageUrl,
            largeImageUrl: this._largeImageUrl
        }
    }
}