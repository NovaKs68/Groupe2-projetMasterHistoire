require('../config/db.config');

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM exposition INNER JOIN musee ON exposition.id_musee = musee.id_musee INNER JOIN theme ON exposition.id_theme = theme.id_theme;', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
            //console.log(rows);
        }
    });
}

exports.getOne = (req, res, next) => {
    db.query('SELECT * FROM exposition INNER JOIN musee ON exposition.id_musee = musee.id_musee INNER JOIN theme ON exposition.id_theme = theme.id_theme WHERE id_exposition = ?;', req.params.id, function(err, rows,) {
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
    db.query('INSERT INTO exposition (`id_exposition`, `nom_exposition`, `date_debut`, `date_fin`, `tarif`, `tranche_age`, `id_musee`, `id_theme`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);', [req.body.nom_exposition, req.body.date_debut, req.body.date_fin, req.body.tarif, req.body.tranche_age, req.body.id_musee, req.body.id_theme], function(err, rows,) {
        if(err){
            res.status(404).json({ err, sucess: false });
        } else {
            res.status(200).json({ sucess: true });
        }
    });
}

exports.delete = (req, res, next) => {
    db.query('DELETE FROM exposition WHERE id_exposition=?', req.params.id, function(err, rows,) {
        if(err){
            res.status(404).json({ err, sucess: false });
        } else {
            res.status(200).json({ sucess: true });
        }
    });
}
