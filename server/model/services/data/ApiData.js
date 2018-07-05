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
                        author: 'liguohui01',
                        time: '2013-01-01',
                        authorImg: '',
                        id: 123,
                        pic: '',
                        zhaiyao: '我是摘要。看我看我',
                        islike: 1,
                        like: 10,
                        isstar: 0,
                        star: 10
                    }
                }
            default: return state;
        }
        // await ctx.render('index',{
        //     a:1,
        //     b:2
        // });
    }
}

module.exports = Services_Data_ApiData;