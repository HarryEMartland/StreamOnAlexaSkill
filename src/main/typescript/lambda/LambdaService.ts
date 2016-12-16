
import {Context, Callback} from "aws-lambda";
import {IntentRequestService} from "../request/IntentRequestService";
import {CustomSkillResponse} from "./CustomSkillResponse";
export module LambdaService{

    export function handle(event: Event, context: Context, callback: Callback){

        let responsePromise:Promise<CustomSkillResponse>;

        if(event.request.type === "IntentRequest"){
            responsePromise = IntentRequestService.doRequest(event.request);
        }

        responsePromise.then(function (response: CustomSkillResponse) {
            callback.apply(null,response)
        })

    }

}