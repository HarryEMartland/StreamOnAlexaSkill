import {IsUserOnlineIntent} from "../../../../main/typescript/service/request/IsUserOnlineIntent";
import * as sinon from "sinon";
import * as assert from "assert";
import {StreamerStatus, Status} from "../../../../main/typescript/service/streamstatus/StreamerStatus";
import {StreamStatusService} from "../../../../main/typescript/service/streamstatus/StreamStatusService";
import {Streamer} from "../../../../main/typescript/service/streamstatus/Streamer";
import {CustomSkillResponse} from "../../../../main/typescript/service/lambda/CustomSkillResponse";
describe("IsUserOnline", function () {

    let request = {
        type: "IntentRequest",
        requestId: "EdwRequestId.e617bbcb-944e-4596-89bc-f5f9603d9f0f",
        locale: "en-GB",
        timestamp: "2016-12-11T22:51:06Z",
        intent: {
            name: "IsUserOnline",
            slots: {
                "USER": {
                    "name": "USER",
                    "value": "looserfruit"
                }
            }
        } as Intent
    } as Request;

    it("Should make request to stream status service for streamer and return online message when online", function (done) {
        mockStreamerStatusResponse(Status.ONLINE);
        assertMessageResponse(done,"Yes. looserfruit is online.");
    });

    it("Should make request to stream status service for streamer and return offline message when offline", function (done) {
        mockStreamerStatusResponse(Status.OFFLINE);
        assertMessageResponse(done,"No. looserfruit is not online.");
    });

    function mockStreamerStatusResponse(status:Status){
        sinon.stub(StreamStatusService, "getStreamStatus", function (streamer: Streamer):Promise<StreamerStatus> {
            assert.equal("looserfruit", streamer.name);
            return Promise.resolve(new StreamerStatus(streamer, status));
        });
    }

    function assertMessageResponse(done:()=>void, message:string){
        IsUserOnlineIntent.doIntent(request).then(function (response: CustomSkillResponse) {
            assert.equal(message, response.response.outputSpeech.text);
            assert.equal(message, response.response.card.content);
            done();
        }).catch(done)
    }

    afterEach(function () {
        sinon.restore(StreamStatusService);
    })


});