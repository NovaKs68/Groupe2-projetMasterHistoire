require('../config/db.config');

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM musee', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
}

exports.getOne = (req, res, next) => {
    db.query('SELECT * FROM musee WHERE id_musee=?', req.params.id, function(err, rows,) {
        if(err){
            res.status(404).json({err, sucess: false});
        } else if(rows[0] === undefined) {
            res.status(404).json({response: 'Content is empty', sucess: false});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
}

exports.create = (req, res, next) => {
    db.query('INSERT INTO musee (id_musee, nom, adresse, ville, code_postal, horaires, tarif_reduit, tarif_plein) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);', [req.body.nom, req.body.adresse, req.body.ville, req.body.code_postal, req.body.horaires, req.body.tarif_reduit, req.body.tarif_plein], function(err, rows,) {
        if(err){
            res.status(404).json({ err, sucess: false });
        } else {
            res.status(200).json({ sucess: true });
        }
    });
}
