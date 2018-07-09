class Home extends bun.$_appname {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        await ctx.render('example',{
            message: 'Bunko is ready!',
            state: {}
        });
    }
}

module.exports = Home;