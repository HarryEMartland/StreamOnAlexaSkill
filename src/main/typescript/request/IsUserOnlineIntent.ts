

import {StreamStatusService} from "../streamstatus/StreamStatusService";
import {Streamer} from "../streamstatus/Streamer";
import {CustomSkillResponse} from "../lambda/CustomSkillResponse";
import {SimpleResponseTranslator} from "../lambda/SimpleResponseTranslator";
import {StreamerStatus, Status} from "../streamstatus/StreamerStatus";
import {UsernameReplacementService} from "../UsernameReplacementService";
export namespace IsUserOnlineIntent{

    export function doIntent(request:Request):Promise<CustomSkillResponse>{

        let username = UsernameReplacementService.replace(request.intent.slots.USER.value);
        let streamer = new Streamer(username);

        return StreamStatusService.getStreamStatus(streamer).then(function (streamerStatus:StreamerStatus) {

            let message:string;
            if(streamerStatus.status == Status.ONLINE){
                message = `Yes. ${streamerStatus.streamer.name} is online playing ${streamerStatus.game} ${streamerStatus.title}.`;
            }else {
                message = `No. ${streamerStatus.streamer.name} is not online.`
            }

            return Promise.resolve(SimpleResponseTranslator.translate(message));
        });
    }
}