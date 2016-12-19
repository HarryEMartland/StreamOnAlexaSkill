import {CustomSkillResponse} from "./CustomSkillResponse";
import {CustomSkillResponseResponse} from "./CustomSkillResponseResponse";
import {CustomSkillResponseOutputSpeech} from "./CustomSkillResponseOutputSpeech";
import {CustomSkillResponseCard, CardImage} from "./CustomSkillResponseCard";
import {CustomSkillResponseReprompt} from "./CustomSkillResponseReprompt";
export namespace SimpleResponseTranslator {

    export function translate(content: string): CustomSkillResponse {
        return new CustomSkillResponse({}, new CustomSkillResponseResponse(
            new CustomSkillResponseOutputSpeech("PlainText", content, null),
            null,
            new CustomSkillResponseCard("Simple", "Stream On", content, null, null)
        ));
    }

    export function translateReprompt(content: string): CustomSkillResponse {
        return new CustomSkillResponse({}, new CustomSkillResponseResponse(
            null,
            new CustomSkillResponseReprompt(new CustomSkillResponseOutputSpeech("PlainText", content, null)),
            null
        ));
    }

    export function translateImage(content: string, smallImage: string, largeImage: string): CustomSkillResponse {
        return new CustomSkillResponse({}, new CustomSkillResponseResponse(
            new CustomSkillResponseOutputSpeech("PlainText", content, null),
            null,
            new CustomSkillResponseCard("Standard", "Stream On", content, null,
                new CardImage(smallImage, largeImage)
            )
        ));
    }

}