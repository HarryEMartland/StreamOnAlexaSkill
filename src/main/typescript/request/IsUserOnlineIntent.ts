

import {StreamStatusService} from "../streamstatus/StreamStatusService";
import {Streamer} from "../streamstatus/Streamer";
import {CustomSkillResponse} from "../lambda/CustomSkillResponse";
import {SimpleResponseTranslator} from "../lambda/SimpleResponseTranslator";
import {StreamerStatus, Status} from "../streamstatus/StreamerStatus";
export namespace IsUserOnlineIntent{

    export function doIntent(request:Request):Promise<CustomSkillResponse>{
        return StreamStatusService.getStreamStatus(new Streamer(request.intent.slots.USER.value)).then(function (streamerStatus:StreamerStatus) {

            let message:string;
            if(streamerStatus.status == Status.ONLINE){
                message = `Yes. ${streamerStatus.streamer.name} is online.`;
            }else {
                message = `No. ${streamerStatus.streamer.name} is not online.`
            }

            return Promise.resolve(SimpleResponseTranslator.translate(message));
        });
    }
}