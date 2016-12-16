import * as assert from "assert";
import {UsernameReplacementService} from "../../main/typescript/UsernameReplacementService";

process.env.username_replcement = " =>:underscore=>_";

describe("UsernameReplacementService", function () {

    it("should replace strings", function () {

        let actual = UsernameReplacementService.replace("test user");
        assert.equal("testuser", actual);
    });

    it("should replace text underscore with an actual underscore", function () {

        let actual = UsernameReplacementService.replace("test underscore user");
        assert.equal("test_user", actual);
    })
});