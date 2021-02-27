let db = require('../configDb');


module.exports.test = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT COUNT(*) AS NB FROM vip ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.firstLetter = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTRING(VIP_NOM,1,1) AS FIRSTLETTER FROM vip ORDER BY VIP_NOM  ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.VipLetter = function(lettre, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "select PHOTO_ADRESSE as PHOTO, VIP_PRENOM as PRENOM, VIP_NOM as NOM, v.VIP_NUMERO as NUM from photo p inner join vip v ON v.vip_numero = p.vip_numero Where vip_nom like '"+lettre+"%' and photo_numero =1;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.detailsVip = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NUMERO, VIP_PRENOM as PRENOM, VIP_NOM as NOM, VIP_NAISSANCE as DATE, VIP_TEXTE as BIO FROM VIP WHERE VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
