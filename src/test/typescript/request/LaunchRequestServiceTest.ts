import * as sinon from "sinon";
import * as assert from "assert";
import {SimpleResponseTranslator} from "../../../main/typescript/lambda/SimpleResponseTranslator";
import {CustomSkillResponse} from "../../../main/typescript/lambda/CustomSkillResponse";
import {LaunchRequestService} from "../../../main/typescript/request/LaunchRequestService";

describe("LaunchRequestService", function () {

    it("should call simple response translator with launch request response from environment variable", function (done) {

        let mockResponse = {} as CustomSkillResponse;

        process.env.LAUNCH_REQUEST_RESPONSE = "test text";

        sinon.stub(SimpleResponseTranslator, "translate", function (text: string): Promise<CustomSkillResponse> {
            assert.equal("test text", text);
            return Promise.resolve(mockResponse);
        });

        LaunchRequestService.doRequest({}as Request).then(function (response) {
            assert.equal(mockResponse, response);
            done();
        }).catch(done);
    });

    afterEach(function () {
        sinon.restore(SimpleResponseTranslator);
    })
});