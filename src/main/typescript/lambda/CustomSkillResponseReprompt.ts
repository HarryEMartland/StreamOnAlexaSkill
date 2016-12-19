
import {CustomSkillResponseOutputSpeech} from "./CustomSkillResponseOutputSpeech";
export class CustomSkillResponseReprompt {

    private _outputSpeech:CustomSkillResponseOutputSpeech;

    constructor(outputSpeech: CustomSkillResponseOutputSpeech) {
        this._outputSpeech = outputSpeech;
    }


    get outputSpeech(): CustomSkillResponseOutputSpeech {
        return this._outputSpeech;
    }

    public toJSON(){
        return {
            outputSpeech: this.outputSpeech
        }
    }
}