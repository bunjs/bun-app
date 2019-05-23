class Controller_Main extends bun.class.$_appname {
    constructor() {
        super();
        global.navigator = global.navigator || {};
        global.navigator.userAgent = global.navigator.userAgent || 'all';  
    }

    execute() {
        this.Routes.post({
            '/api': '/action/api/Api.js'
        });
        this.Routes.get({
            '/home': '/action/show/Home.js',
        });
    }   
}
module.exports = Controller_Main;