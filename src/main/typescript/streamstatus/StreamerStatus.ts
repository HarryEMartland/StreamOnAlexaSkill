import {Streamer} from "./Streamer";
export class StreamerStatus{

    private _streamer:Streamer;
    private _status:Status;

    constructor(streamer: Streamer, status: Status) {
        this._streamer = streamer;
        this._status = status;
    }

    get streamer(): Streamer {
        return this._streamer;
    }

    get status(): Status {
        return this._status;
    }
}

export enum Status{
    ONLINE,
    OFFLINE
}