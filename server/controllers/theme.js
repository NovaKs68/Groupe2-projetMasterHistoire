require('../config/db.config');

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM theme', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
        }
    });
}

exports.getOne = (req, res, next) => {
    db.query('SELECT * FROM theme WHERE id_theme=?', req.params.id, function(err, rows,) {
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
    db.query('INSERT INTO theme (`id_theme`, `nom_theme`) VALUES(NULL, ?);', [req.body.nom_theme], function(err, rows,) {
        if(err){
            res.status(404).json({ err, sucess: false });
        } else {
            res.status(200).json({ sucess: true });
        }
    });
}

exports.delete = (req, res, next) => {
    db.query('DELETE FROM theme WHERE id_theme=?', req.params.id, function(err, rows,) {
        if(err){
            res.status(404).json({ err, sucess: false });
        } else {
            res.status(200).json({ sucess: true });
        }
    });
}
