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

module.exports.mariage = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO AS NUMERO,VIP_NOM AS NOM, VIP_PRENOM AS PRENOM, DATE_EVENEMENT AS DEBUT, MARIAGE_FIN AS FIN, MARIAGE_LIEU AS LIEU FROM VIP v JOIN MARIAGE m ON v.VIP_NUMERO=m.VIP_VIP_NUMERO AND m.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.liaison = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO AS NUMERO,VIP_NOM AS NOM, VIP_PRENOM AS PRENOM, DATE_EVENEMENT AS DEBUT, LIAISON_MOTIFFIN AS FIN FROM VIP v JOIN LIAISON l ON v.VIP_NUMERO=l.VIP_VIP_NUMERO AND l.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.acteur = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.photo = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_ADRESSE AS PHOTO FROM PHOTO p JOIN VIP v ON p.VIP_NUMERO=v.VIP_NUMERO AND p.VIP_NUMERO='"+numvip+"%' AND PHOTO_NUMERO=1;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.autresphotos = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_ADRESSE AS PHOTO FROM PHOTO p JOIN VIP v ON p.VIP_NUMERO=v.VIP_NUMERO AND p.VIP_NUMERO='"+numvip+"%' AND PHOTO_NUMERO!=1;";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.acteur = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT a.VIP_NUMERO FROM VIP v JOIN ACTEUR a ON v.VIP_NUMERO=a.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%'AND v.VIP_SEXE='M';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.actrice = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT a.VIP_NUMERO FROM VIP v JOIN ACTEUR a ON v.VIP_NUMERO=a.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%' AND v.VIP_SEXE='F';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.film = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT f.film_NUMERO, FILM_TITRE AS FILM, FILM_DATEREALISATION AS DATE FROM FILM f JOIN JOUE j ON f.film_NUMERO=j.FILM_NUMERO JOIN VIP v ON j.VIP_NUMERO=v.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.nationalite = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT NATIONALITE_NOM AS NATIONALITE FROM NATIONALITE n JOIN VIP v ON n.NATIONALITE_NUMERO=V.NATIONALITE_NUMERO AND v.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.mannequin = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT m.VIP_NUMERO FROM VIP v JOIN MANNEQUIN m ON v.VIP_NUMERO=m.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.defile = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT d.DEFILE_NUMERO,  DEFILE_LIEU AS LIEU, DEFILE_DATE AS DATE FROM DEFILE d JOIN DEFILEDANS dd ON d.DEFILE_NUMERO=dd.DEFILE_NUMERO JOIN VIP v ON dd.VIP_NUMERO=v.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.chanteur = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT c.VIP_NUMERO,  c.CHANTEUR_SPECIALITE AS SPE FROM VIP v JOIN CHANTEUR c ON v.VIP_NUMERO=c.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%'AND v.VIP_SEXE='M';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.chanteuse = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT c.VIP_NUMERO, c.CHANTEUR_SPECIALITE AS SPE FROM VIP v JOIN CHANTEUR C ON v.VIP_NUMERO=c.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%' AND v.VIP_SEXE='F';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.film = function(numvip, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT a.ALBUM_TITRE AS TITRE, a.ALBUM_NUMERO AS NUM  FROM ALBUM a JOIN COMPOSE c ON a.ALBUM_NUMERO=c.ALBUM_NUMERO JOIN VIP v ON a.VIP_NUMERO=v.VIP_NUMERO AND v.VIP_NUMERO='"+numvip+"%';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};