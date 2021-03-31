let model = require("../models/vip.js");
let async=require("async");
const { response } = require("express");

// ///////////////////////// A R T I C L E S  D E S     S T A R S

module.exports.Article = 	function(request, response){
    let data = request.params.num;
   response.title = 'Article des stars';
   model.Article(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.Article = result; // result contient : [ RowDataPacket { FIRSTLETTER: A } ]
      console.log(result);
      response.render('listerMenuArticles', response); // appel la vue Handlebars qui va afficher le résultat
  } );
} ;
module.exports.ArticleParVip = 	function(request, response){
    let num = request.params.num;
    response.title = 'Article Par VIP';
    async.parallel ([
        function (callback){
            model.Article(function (err, result){callback(null, result)});
        },
        function (callback){
            model.ArticleParVip(num,(function(errE, resE) {callback(null, resE) }));
          } ,
        function (callback){
            model.DetailsVipArticle(num,(function(errE, resE) {callback(null, resE) }));
        } ,
          ],  
        function(err,result){
            if(err){
                console.log(err);
                return;
        }
        response.Article = result[0]; // result contient : [ RowDataPacket { FIRSTLETTER: A } ]
        response.ArticleParVip = result[1][0]; 
        response.DetailsVipArticle=result[2][0]
        console.log(result[0]);
        console.log(result[1]);
        console.log(result[2][0]);
        response.render('listerArticleParVip', response); // appel la vue Handlebars qui va afficher le résultat

    } );
};
