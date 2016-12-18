
import {CustomSkillResponse} from "../lambda/CustomSkillResponse";
import {SimpleResponseTranslator} from "../lambda/SimpleResponseTranslator";
export namespace LaunchRequestService{

    export function doRequest(request:Request):Promise<CustomSkillResponse>{
        return Promise.resolve(SimpleResponseTranslator.translate(process.env.LAUNCH_REQUEST_RESPONSE));
    }
}