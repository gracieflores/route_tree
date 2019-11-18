var Route_tree = require('../models/route_tree.js');


module.exports = {
    index: (req, res) => {
        Route_tree.find()
            .then(route_trees => res.json({data: route_trees}))
            .catch(err => res.json(err))
            //console.log(persons)
    },
}