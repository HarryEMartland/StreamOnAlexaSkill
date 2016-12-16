import * as assert from "assert";
import {StreamStatusService} from "../../../../main/typescript/service/streamstatus/StreamStatusService";
import {Streamer} from "../../../../main/typescript/service/streamstatus/Streamer";
import {StreamerStatus, Status} from "../../../../main/typescript/service/streamstatus/StreamerStatus";
import {HttpClient} from "../../../../main/typescript/httpClient/HttpClient";
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
            assert.equal(Status.ONLINE, streamerStatus.status)
            done();
        });
    });

    afterEach(function () {
        sinon.restore(HttpClient);
    })

});

function givenTwitchResponse(file:string){
    sinon.stub(HttpClient, "get", function (url: string) {
        return Promise.resolve(JSON.stringify(require("../../../resources/twichStreamResponse/"+file)))
    })
}