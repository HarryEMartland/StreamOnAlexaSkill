import * as assert from "assert";
import {StreamStatusService} from "../../../main/typescript/streamstatus/StreamStatusService";
import {Streamer} from "../../../main/typescript/streamstatus/Streamer";
import {StreamerStatus, Status} from "../../../main/typescript/streamstatus/StreamerStatus";
import {HttpClient} from "../../../main/typescript/HttpClient";
import * as sinon from "sinon";

describe("StreamStatusService", function () {

    it("Should return offline when twich api returns no stream object", function (done) {

        givenTwitchResponse("offline.json");
        let streamer = new Streamer("test_channel");

        StreamStatusService.getStreamStatus(streamer).then(function (streamerStatus: StreamerStatus) {
            assert.equal(streamer, streamerStatus.streamer);
            assert.equal(Status.OFFLINE, streamerStatus.status)
            done();
        });
    });

    it("Should return online when twich api returns stream object", function (done) {

        givenTwitchResponse("online.json");
        let streamer = new Streamer("test_channel");

        StreamStatusService.getStreamStatus(streamer).then(function (streamerStatus: StreamerStatus) {
            assert.equal(streamer, streamerStatus.streamer);
            assert.equal(Status.ONLINE, streamerStatus.status);
            assert.equal("StarCraft II: Heart of the Swarm", streamerStatus.game);
            assert.equal("test status", streamerStatus.title);
            assert.equal("http://static-cdn.jtvnw.net/previews-ttv/live_user_test_channel-{width}x{height}.jpg", streamerStatus.imageTemplate);
            done();
        });
    });

    afterEach(function () {
        sinon.restore(HttpClient);
    })

});

function givenTwitchResponse(file:string){
    sinon.stub(HttpClient, "get", function (url: string) {
        return Promise.resolve(JSON.stringify(require("../../resources/twichStreamResponse/"+file)))
    })
}