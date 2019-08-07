class Action_Show_Home extends bun.class.$_appname {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        await ctx.render('example',{
            message: 'Bunjs is ready!!',
            state: JSON.stringify({})
        });
    }
}

module.exports = Action_Show_Home;