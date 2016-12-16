import * as assert from "assert";
import {SimpleResponseTranslator} from "../../../../main/typescript/service/lambda/SimpleResponseTranslator";
import {CustomSkillResponse} from "../../../../main/typescript/service/lambda/CustomSkillResponse";
import {CustomSkillResponseResponse} from "../../../../main/typescript/service/lambda/CustomSkillResponseResponse";
import {CustomSkillResponseOutputSpeech} from "../../../../main/typescript/service/lambda/CustomSkillResponseOutputSpeech";
import {CustomSkillResponseCard} from "../../../../main/typescript/service/lambda/CustomSkillResponseCard";
describe("SimpleResponseTranslatorTest", function () {


    it("Should return simple response from text", function () {

        let expected = new CustomSkillResponse({}, new CustomSkillResponseResponse(
            new CustomSkillResponseOutputSpeech("PlainText", "simple test", null),
            new CustomSkillResponseCard("Simple", "Stream On", "simple test", null)));

        let actual = SimpleResponseTranslator.translate( "simple test");

        assert.deepEqual(expected, actual);
    })

});