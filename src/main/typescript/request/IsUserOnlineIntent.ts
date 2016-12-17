import {StreamStatusService} from "../streamstatus/StreamStatusService";
import {Streamer} from "../streamstatus/Streamer";
import {CustomSkillResponse} from "../lambda/CustomSkillResponse";
import {SimpleResponseTranslator} from "../lambda/SimpleResponseTranslator";
import {StreamerStatus, Status} from "../streamstatus/StreamerStatus";
import {UsernameReplacementService} from "../UsernameReplacementService";
export namespace IsUserOnlineIntent {

    const IMAGE_WIDTH_TEMPLATE = "{width}";
    const IMAGE_HEIGHT_TEMPLATE = "{height}";
    const SMALL_IMAGE_WIDTH = "720";
    const SMALL_IMAGE_HEIGHT = "480";
    const LARGE_IMAGE_WIDTH = "1200";
    const LARGE_IMAGE_HEIGHT = "800";

    export function doIntent(request: Request): Promise<CustomSkillResponse> {

        let username = UsernameReplacementService.replace(request.intent.slots.USER.value);
        let streamer = new Streamer(username);

        return StreamStatusService.getStreamStatus(streamer).then(function (streamerStatus: StreamerStatus) {

            if (streamerStatus.status == Status.ONLINE) {
                return onlineResponse(streamerStatus);
            } else {
                return Promise.resolve(SimpleResponseTranslator.translate(
                    `No. ${streamerStatus.streamer.name} is not online.`
                ));
            }
        });
    }

    function onlineResponse(streamerStatus: StreamerStatus) {
        return Promise.resolve(SimpleResponseTranslator.translate(
            `Yes. ${streamerStatus.streamer.name} is online playing ${streamerStatus.game}, ${streamerStatus.title}.`
            //replateImageTemplate(streamerStatus.imageTemplate, SMALL_IMAGE_WIDTH, SMALL_IMAGE_HEIGHT),
            //replateImageTemplate(streamerStatus.imageTemplate, LARGE_IMAGE_WIDTH, LARGE_IMAGE_HEIGHT)
        ))
    }

    function replateImageTemplate(imageTemplate: string, width: string, height: string): string {
        return imageTemplate.replace(IMAGE_WIDTH_TEMPLATE, width).replace(IMAGE_HEIGHT_TEMPLATE, height);
    }
}