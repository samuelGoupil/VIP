
const { request } = require("express");
let model = require("../models/vip.js");
var async=require('async');

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
   response.title = 'Répertoire des stars';
   model.firstLetter(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.firstLetter = result; // result contient : [ RowDataPacket { FIRSTLETTER: A } ]
      console.log(result);
      response.render('repertoireVips', response); // appel la vue Handlebars qui va afficher le résultat
  } );
} ;

module.exports.VipLetter =     function( request,  response){
    let lettre = request.params.lettre;
    response.title = 'Vip par lettre';
    async.parallel ([
        function (callback){
            model.firstLetter(function (err, result){callback(null, result)});
        },
        function (callback){
            model.VipLetter(lettre,(function(errE, resE) {callback(null, resE) }));
          } ,
    ],
        function(err,result){
            if(err){
                console.log(err);
                return;
            }
            response.listeLettre = result[0];
            response.data=result[1] 
            console.log(result[0]);
            console.log(result[1]);

            response.render('listerPhotoParLettre', response); // appel la vue Handlebars qui va afficher le résultat
        } );
}

 module.exports.DetailsVip =   function(request,response){
    let numvip=request.params.numvip;
    let lettre = request.params.lettre;
    response.title='Details de Vip';
    async.parallel ([
        function (callback){
            model.firstLetter(function (err, result){callback(null, result)});
        },
        function (callback){
            model.VipLetter(lettre,(function(errE, resE) {callback(null, resE) }));
          } ,
        function (callback){
            model.detailsVip(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
    ],
        function(err,result){
            if(err){
                console.log(err);
                return;
            }
            response.listeLettre = result[0];
            response.data=result[1];
            response.details=result[2];
            console.log(result[0]);
            console.log(result[1]);
            console.log(result[2]);

            response.render('detailsVip', response); // appel la vue Handlebars qui va afficher le résultat
        } );
 }