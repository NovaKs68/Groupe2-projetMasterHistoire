require('../config/db.config');

exports.getAll = (req, res, next) => {
    db.query('SELECT * FROM articles', function(err, rows,) {
        if(err){
            res.status(400).json({sucess: false, err});
        } else {
            res.status(200).json({response: rows, sucess: true});
            //console.log(rows);
        }
    });
}

exports.getOne = (req, res, next) => {

}

exports.create = (req, res, next) => {

}
