import * as LambdaService from "../../../main/typescript/lambda/LambdaService";
import {Callback} from "aws-lambda";

let event = {
    "session": {
        "sessionId": "SessionId.1adaa2ac-7375-4389-ac6a-bd8102f6ffb7",
        "application": {
            "applicationId": "amzn1.ask.skill.22ccc09c-7099-49b9-a3b0-100c7280e9ad"
        },
        "attributes": {},
        "user": {
            "userId": "amzn1.ask.account.AFFSCHGGN37FX4QZISLMQVDRWQZEUXZG6BYAT3IUSA7WXDBZDUA5Q4ZJL2CKVHBMU6M77VWSASVEM3BIQSJV4CJ3GBHOMQ2L6NLUF4IJOMGHTLIRDAR2IK7L5BQKE2RQBAGCUZ32SZQE2JG2WIVSAS2HCUPLD3V4A6BAOR4YZFMHSWONEJQLPYRD4EDGPECGOBBRNCRG2QO7PVQ"
        },
        "new": true
    },
    "request": {
        "type": "IntentRequest",
        "requestId": "EdwRequestId.8afa3f31-776d-422e-bc2a-ff8c0d381362",
        "locale": "en-GB",
        "timestamp": "2016-12-16T15:50:49Z",
        "intent": {
            "name": "IsUserOnline",
            "slots": {
                "USER": {
                    "name": "USER",
                    "value": "yogscast"
                }
            }
        }
    },
    "version": "1.0"
} as Event;

LambdaService.handle(event, null, function (error, response) {
    console.log(response);
}).catch(console.log);