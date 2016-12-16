import {Streamer} from "./Streamer";
export class StreamerStatus {

    private _streamer: Streamer;
    private _status: Status;
    private _game: string;
    private _title: string;
    private _imageTemplate: string;

    constructor(streamer: Streamer, status: Status, game: string, title: string, imageTemplate: string) {
        this._streamer = streamer;
        this._status = status;
        this._game = game;
        this._title = title;
        this._imageTemplate = imageTemplate;
    }

    get streamer(): Streamer {
        return this._streamer;
    }

    get status(): Status {
        return this._status;
    }

    get title() {
        return this._title;
    }

    get game() {
        return this._game;
    }

    get imageTemplate(): string {
        return this._imageTemplate;
    }
}

export enum Status{
    ONLINE,
    OFFLINE
}