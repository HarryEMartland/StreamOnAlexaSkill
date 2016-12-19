import {CustomSkillResponseOutputSpeech} from "./CustomSkillResponseOutputSpeech";
import {CustomSkillResponseCard} from "./CustomSkillResponseCard";
import {CustomSkillResponseReprompt} from "./CustomSkillResponseReprompt";
export class CustomSkillResponseResponse{

    private _outputSpeech: CustomSkillResponseOutputSpeech;
    private _reprompt : CustomSkillResponseReprompt;
    private _card: CustomSkillResponseCard;
    private _shouldEndSession:boolean;

    constructor(outputSpeach: CustomSkillResponseOutputSpeech, reprompt:CustomSkillResponseReprompt, cart: CustomSkillResponseCard, shouldEndSession) {
        this._outputSpeech = outputSpeach;
        this._reprompt = reprompt;
        this._card = cart;
        this._shouldEndSession = shouldEndSession;
    }

    get outputSpeech(): CustomSkillResponseOutputSpeech {
        return this._outputSpeech;
    }

    get reprompt(): CustomSkillResponseReprompt {
        return this._reprompt;
    }

    get card(): CustomSkillResponseCard {
        return this._card;
    }

    get shouldEndSession(): boolean {
        return this._shouldEndSession;
    }

    public toJSON(){
        return {
            outputSpeech: this.outputSpeech,
            reprompt: this.reprompt,
            card: this.card,
            shouldEndSession: this.shouldEndSession
        }
    }
}