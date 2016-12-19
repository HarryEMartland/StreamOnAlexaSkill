import {CustomSkillResponseOutputSpeech} from "./CustomSkillResponseOutputSpeech";
import {CustomSkillResponseCard} from "./CustomSkillResponseCard";
export class CustomSkillResponseResponse{

    private _outputSpeech: CustomSkillResponseOutputSpeech;
    private _reprompt : CustomSkillResponseOutputSpeech;
    private _card: CustomSkillResponseCard;

    constructor(outputSpeach: CustomSkillResponseOutputSpeech, reprompt:CustomSkillResponseOutputSpeech, cart: CustomSkillResponseCard) {
        this._outputSpeech = outputSpeach;
        this._reprompt = reprompt;
        this._card = cart;
    }

    get outputSpeech(): CustomSkillResponseOutputSpeech {
        return this._outputSpeech;
    }

    get reprompt(): CustomSkillResponseOutputSpeech {
        return this._reprompt;
    }

    get card(): CustomSkillResponseCard {
        return this._card;
    }
    
    public toJSON(){
        return {
            outputSpeech: this.outputSpeech,
            reprompt: this.reprompt,
            card: this._card
        }
    }
}