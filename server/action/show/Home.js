class Home extends bun.$_appname {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        await ctx.render('example',{
            a:1,
            state:{}
        });
    }
}

module.exports = Home;