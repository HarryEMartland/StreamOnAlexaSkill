
import * as assert from "assert"
import * as sinon from "sinon"
import {LambdaService} from "../../../../main/typescript/service/lambda/LambdaService";
import {IntentRequestService} from "../../../../main/typescript/service/request/IntentRequestService";
import {Callback} from "aws-lambda";
import {CustomSkillResponse} from "../../../../main/typescript/service/lambda/CustomSkillResponse";
describe("LambdaService", function () {

    it("Should call IntentRequestService when request is an intent", function (done) {

        let mockEvent = {
            request:{type:"IntentRequest"}
        } as Event;

        let testResponse = {} as CustomSkillResponse;

        sinon.stub(IntentRequestService, "doRequest", function (request: Request) :Promise<CustomSkillResponse>{
            assert.equal(mockEvent.request, request);
            return Promise.resolve(testResponse)
        });

        LambdaService.handle(mockEvent, null, {
            apply:function (error?: Error, result?: any) {
                assert.equal(testResponse, result);
                done();
            }
        } as Callback);

    });

    afterEach(function () {
        sinon.restore(IntentRequestService);
    })

});