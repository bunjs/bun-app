class Action_Api_Api extends bun.class['$_appname'] {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        let objRpData = new Model_Services_Data_ApiData()
        
        let bsCommon = {}
        bsCommon['type'] = ctx.request.query.type || 'home';
        let state = objRpData.testfun(bsCommon);

        ctx.body = {
            html: await ctx.renderHtml('example',{
                message: 'bunko is ready!',
                state: state
            }),
            state: state
        }
    }
}

module.exports = Action_Api_Api;