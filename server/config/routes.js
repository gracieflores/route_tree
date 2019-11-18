route_tree = require('../controllers/route_trees.js')

module.exports = function(app){
    app.get('/route_trees', route_tree.index);
};