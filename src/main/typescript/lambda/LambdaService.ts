import {Context, Callback} from "aws-lambda";
import {IntentRequestService} from "../request/IntentRequestService";
import {CustomSkillResponse} from "./CustomSkillResponse";
import {LaunchRequestService} from "../request/LaunchRequestService";

export function handle(event: Event, context: Context, callback: Callback):Promise<CustomSkillResponse> {

    let responsePromise: Promise<CustomSkillResponse>;

    if (event.request.type === "IntentRequest") {
        responsePromise = IntentRequestService.doRequest(event.request);
    }else if (event.request.type === "LaunchRequest"){
        responsePromise = LaunchRequestService.doRequest(event.request);
    }

    return responsePromise.then(function (response: CustomSkillResponse) {
        callback(null, response);
        return Promise.resolve(response);
    }).catch(function (error) {
        callback(error);
        return Promise.reject(error);
    })

}

