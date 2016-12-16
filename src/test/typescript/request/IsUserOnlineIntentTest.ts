import {IsUserOnlineIntent} from "../../../main/typescript/request/IsUserOnlineIntent";
import * as sinon from "sinon";
import * as assert from "assert";
import {StreamerStatus, Status} from "../../../main/typescript/streamstatus/StreamerStatus";
import {StreamStatusService} from "../../../main/typescript/streamstatus/StreamStatusService";
import {Streamer} from "../../../main/typescript/streamstatus/Streamer";
import {CustomSkillResponse} from "../../../main/typescript/lambda/CustomSkillResponse";
import {UsernameReplacementService} from "../../../main/typescript/UsernameReplacementService";
import {CardImage} from "../../../main/typescript/lambda/CustomSkillResponseCard";
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
        let imageTemplate = "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg";
        let smallImage = "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-720x480.jpg";
        let largeImage = "http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-1200x800.jpg";
        mockStreamerStatusResponse(Status.ONLINE, imageTemplate);
        assertMessageResponseWithImage(done, "Yes. looserfruit is online playing Overwatch, Killing noobs.",
            smallImage, largeImage);
    });

    it("Should make request to stream status service for streamer and return offline message when offline", function (done) {
        mockStreamerStatusResponse(Status.OFFLINE,null);
        assertMessageResponse(done, "No. looserfruit is not online.");
    });

    function mockStreamerStatusResponse(status: Status, image:string) {
        sinon.spy(UsernameReplacementService, "replace").calledOnce;

        sinon.stub(StreamStatusService, "getStreamStatus", function (streamer: Streamer): Promise<StreamerStatus> {
            assert.equal("looserfruit", streamer.name);
            return Promise.resolve(new StreamerStatus(streamer, status, "Overwatch", "Killing noobs", image));
        });
    }

    function assertMessageResponse(done: () => void, message: string) {
        IsUserOnlineIntent.doIntent(request).then(function (response: CustomSkillResponse) {
            assert.equal(message, response.response.outputSpeech.text);
            assert.equal(message, response.response.card.content);
            done();
        }).catch(done)
    }

    function assertMessageResponseWithImage(done: () => void, message: string, smallImage: string, largeImage: string) {
        IsUserOnlineIntent.doIntent(request).then(function (response: CustomSkillResponse) {
            assert.equal(message, response.response.outputSpeech.text);
            assert.equal(message, response.response.card.content);
            assert.equal(smallImage, response.response.card.image.smallImageUrl);
            assert.equal(largeImage, response.response.card.image.largeImageUrl);
            done();
        }).catch(done)
    }

    afterEach(function () {
        sinon.restore(StreamStatusService);
        sinon.restore(UsernameReplacementService);
    })


});