class Services_Data_ApiData{
    constructor() {
        this.a = 1;
        
    }
    testfun(bsCommon = {}) {
        let state = {}
        switch(bsCommon.type) {
            case 'home': 
                return {
                    home: {
                        a: 1
                    }
                };
            case 'pageone': 
                return {
                    pageone: {
                        a: 2
                    }
                }
            default: return state;
        }
    }
}

module.exports = Services_Data_ApiData;