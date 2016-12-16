import * as assert from "assert";
import * as sinon from "sinon";
import * as LambdaService from "../../../main/typescript/lambda/LambdaService";
import {IntentRequestService} from "../../../main/typescript/request/IntentRequestService";
import {CustomSkillResponse} from "../../../main/typescript/lambda/CustomSkillResponse";
describe("LambdaService", function () {

    it("Should call IntentRequestService when request is an intent", function (done) {

        let mockEvent = {
            request: {type: "IntentRequest"}
        } as Event;

        let testResponse = {} as CustomSkillResponse;

        sinon.stub(IntentRequestService, "doRequest", function (request: Request): Promise<CustomSkillResponse> {
            assert.equal(mockEvent.request, request);
            return Promise.resolve(testResponse)
        });

        LambdaService.handle(mockEvent, null, function (error?: Error, result?: any) {
            assert.equal(testResponse, result);
            done();
        }).catch(done);

    });

    afterEach(function () {
        sinon.restore(IntentRequestService);
    })

});