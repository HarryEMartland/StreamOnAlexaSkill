import {Streamer} from "./Streamer";
export class StreamerStatus {

    private _streamer: Streamer;
    private _status: Status;
    private _game;
    private _title;

    constructor(streamer: Streamer, status: Status, game: string, title: string) {
        this._streamer = streamer;
        this._status = status;
        this._game = game;
        this._title = title;
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
}

export enum Status{
    ONLINE,
    OFFLINE
}