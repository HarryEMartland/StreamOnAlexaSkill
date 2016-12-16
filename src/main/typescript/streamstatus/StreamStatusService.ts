import {Streamer} from "./Streamer";
import {StreamerStatus, Status} from "./StreamerStatus";
import {HttpClient} from "../HttpClient";

export module StreamStatusService{

    export function getStreamStatus(streamer:Streamer):Promise<StreamerStatus>{
        
        return HttpClient.get('https://api.twitch.tv/kraken/streams/'+streamer.name+'?client_id='+process.env.twitch_client_id)
            .then(function (response: string) {

                let jsonResponse = JSON.parse(response);
                let onlineStatus = jsonResponse.stream===null?Status.OFFLINE:Status.ONLINE;
                let game = "";
                let title = "";
                let imageTemplate = "";

                if(onlineStatus === Status.ONLINE){
                    game = jsonResponse.stream.game;
                    title = jsonResponse.stream.channel.status;
                    imageTemplate = jsonResponse.stream.preview.template;
                }

                return Promise.resolve(new StreamerStatus(streamer, onlineStatus, game, title, imageTemplate))
            });

    }
}