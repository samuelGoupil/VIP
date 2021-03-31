let model = require("../models/vip.js");
let async=require("async");
const { response } = require("express");
// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = 	function(request, response){
   response.title = 'Album des stars';
   model.PhotoVipAlbum(function(err, result){  // appel le module test qui exécute la requete SQL
      if (err) {
          console.log(err);
          return;
      }
     response.PhotoVipAlbum = result; // result contient : [ RowDataPacket { FIRSTLETTER: A } ]
     console.log(result);
   response.render('listerAlbum', response);
  } );
}
