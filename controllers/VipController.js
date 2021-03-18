
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
        function (callback){
            model.mariage(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
        function (callback){
            model.liaison(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
        function (callback){
            model.photo(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
        function (callback){
            model.autresphotos(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.acteur(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.actrice(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.nationalite(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.film(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.mannequin(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.defile(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.chanteur(numvip,(function(errE, resE) {callback(null, resE) }));
          } ,
          function (callback){
            model.chanteuse(numvip,(function(errE, resE) {callback(null, resE) }));
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
            response.mariage=result[3];
            response.liaison=result[4];
            response.photo=result[5];
            response.autresphotos=result[6];
            response.acteur=result[7];
            response.actrice=result[8];
            response.nationalite=result[9];
            response.film=result[10];
            response.mannequin=result[11];
            response.defile=result[12];
            response.chanteur=result[13];
            response.chanteuse=result[14];
            console.log(result[0]);
            console.log(result[1]);
            console.log(result[2]);
            console.log(result[3]);
            console.log(result[4]);
            console.log(result[5]);
            console.log(result[6]);
            console.log(result[7]);
            console.log(result[8]);
            console.log(result[9]);
            console.log(result[10]);
            console.log(result[11]);
            console.log(result[12]);
            console.log(result[13]);
            console.log(result[14]);

            response.render('detailsVip', response); // appel la vue Handlebars qui va afficher le résultat
        } );
 }