
export namespace UsernameReplacementService{

    let toReplaceCache = null as Map<string,string>;

    export function replace(username:string):string{

        getReplaceMap().forEach(function (key, value) {
            username = replaceAll(username, key, value);
        });

        return username;
    }

    function getReplaceMap():Map<string,string>{

        if(toReplaceCache === null){
            toReplaceCache = new Map();
            let replacementPairs = process.env.username_replcement.split(":");

            for(let replacementPair of replacementPairs){
                let replacementArray = replacementPair.split("=>");
                toReplaceCache.set( replacementArray[1],replacementArray[0])
            }
        }

        return toReplaceCache;
    }

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    }
}