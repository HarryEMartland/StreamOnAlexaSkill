import * as assert from "assert";
import * as sinon from "sinon";
import * as LambdaService from "../../../main/typescript/lambda/LambdaService";
import {IntentRequestService} from "../../../main/typescript/request/IntentRequestService";
import {CustomSkillResponse} from "../../../main/typescript/lambda/CustomSkillResponse";
import {LaunchRequestService} from "../../../main/typescript/request/LaunchRequestService";
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

    it("should call LaunchRequestService when request is a launch request", function (done) {
        let mockEvent = {
            request: {type: "LaunchRequest"}
        } as Event;

        let testResponse = {} as CustomSkillResponse;

        sinon.stub(LaunchRequestService, "doRequest", function (request: Request): Promise<CustomSkillResponse> {
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
        sinon.restore(LaunchRequestService);
    })

});