


import {IsUserOnlineIntent} from "./IsUserOnlineIntent";
import {CustomSkillResponse} from "../lambda/CustomSkillResponse";
export namespace IntentRequestService{

    export function doRequest(request:Request):Promise<CustomSkillResponse>{
        if(request.intent.name === "IsUserOnline"){
            return IsUserOnlineIntent.doIntent(request);
        }
    }

}