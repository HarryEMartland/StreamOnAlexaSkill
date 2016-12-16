
import * as sinon from "sinon";
import * as assert from "assert";
import {IsUserOnlineIntent} from "../../../main/typescript/request/IsUserOnlineIntent";
import {IntentRequestService} from "../../../main/typescript/request/IntentRequestService";
describe("IntentRequestService", function () {

    it("Should call service for IsUserOnline intent", function (done) {

        let mockRequest = {type:"IntentRequest",intent:{name: "IsUserOnline"}as Intent} as Request;

        sinon.stub(IsUserOnlineIntent, "doIntent", function (request: Request) {
            assert.equal(mockRequest, request);
            done()
        });

        IntentRequestService.doRequest(mockRequest);
    });

    afterEach(function () {
        sinon.restore(IsUserOnlineIntent);
    })

});