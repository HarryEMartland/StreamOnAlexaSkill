

import {CustomSkillResponse} from "./CustomSkillResponse";
import {CustomSkillResponseResponse} from "./CustomSkillResponseResponse";
import {CustomSkillResponseOutputSpeech} from "./CustomSkillResponseOutputSpeech";
import {CustomSkillResponseCard} from "./CustomSkillResponseCard";
export namespace SimpleResponseTranslator{

    export function translate(content:string):CustomSkillResponse{
        return new CustomSkillResponse({}, new CustomSkillResponseResponse(
            new CustomSkillResponseOutputSpeech("PlainText", content, null),
            new CustomSkillResponseCard("Simple", "Stream On", content, null)
        ));
    }

}