var restify=require("restify");
var products=require("./products");
var port=process.env.PORT || 3000;


var server = restify.createServer({
    name : 'Simple restify server'
});

server.use(function(req,res,next){
    console.log(req.method + " " + req.uri);
    return next();
});



server.use(restify.bodyParser());

server.get('api/products',products.get);
server.get('api/products/:id',products.getById);
server.post('api/products',products.post);
server.put('api/products/:id',products.put);
server.del('api/products/:id',products.del);


server.listen(port,function(){
   console.log("Api running at "+port);
});