import {CustomSkillResponse} from "./CustomSkillResponse";
import {CustomSkillResponseResponse} from "./CustomSkillResponseResponse";
import {CustomSkillResponseOutputSpeech} from "./CustomSkillResponseOutputSpeech";
import {CustomSkillResponseCard, CardImage} from "./CustomSkillResponseCard";
export namespace SimpleResponseTranslator {

    export function translate(content: string): CustomSkillResponse {
        return new CustomSkillResponse({}, new CustomSkillResponseResponse(
            new CustomSkillResponseOutputSpeech("PlainText", content, null),
            new CustomSkillResponseCard("Simple", "Stream On", content, null, null)
        ));
    }

    export function translateImage(content: string, smallImage: string, largeImage: string): CustomSkillResponse {
        return new CustomSkillResponse({}, new CustomSkillResponseResponse(
            new CustomSkillResponseOutputSpeech("PlainText", content, null),
            new CustomSkillResponseCard("Standard", "Stream On", content, null,
                new CardImage(smallImage, largeImage)
            )
        ));
    }

}