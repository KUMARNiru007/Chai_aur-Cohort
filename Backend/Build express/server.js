const http = require('http')
const url = require('url')

class customExpress {
    #server 

    Routes = {
        get :{},
        post :{},
        put :{},
        patch :{},
        delete :{},
    }

    customGet(path , callBack){
        return this.Routes.get[path] = callBack;
    }
    customPost(path , callBack){
        return this.Routes.post[path] = callBack;
    }
    customPatch(path , callBack){
        return this.Routes.patch[path] = callBack;
    }
    customPut(path , callBack){
        return this.Routes.put[path] = callBack;
    }
    customDelete(path , callBack){
        console.log(path)
        return this.Routes.delete[path] = callBack;
    }

    constructor() {
        this.#server = http.createServer(this.requestJoAyega.bind(this));
    }

    requestJoAyega(req, res) {
        const method = req.method.toLowerCase();
        // console.log(method)
        // console.log(url)
        const parsedUrl = url.parse(req.url,true);
        // console.log(parsedUrl)
        const route = parsedUrl.pathname;
        // console.log(route)
        // console.log(this.Routes[method])
        // console.log(this.Routes[method][route])

        if(!this.Routes[method]){
            return res.end('Invalid method');
        }
        if(!this.Routes[method][route]){
            return res.end('Invalid method route')
        }

        const fn = this.Routes[method][route] ;
        fn(req,res)

    }

    customListen(port, host, callBack) {
        this.#server.listen(port, host, callBack)
    }
}

module.exports = {customExpress}