const eventsConfig = require('./class'),
      express      =  require('express'),
      app          = express();
      port         = process.env.PORT || 8080;


app.get('/', (req, res) => {
    var   Rest         = eventsConfig.newRes();
    Rest.addTable(5);
    Rest.addTable(5);
    Rest.addTable(10);
    Rest.removeTable(2);
    Rest.removeTable(11);
    Rest.clearTables();
    Rest.addTable(1);
    Rest.addTable(5);
    Rest.getAll();
    res.send(eventsConfig.getLogs(Rest));

});

app.listen(port);
console.log(`listening on port ${port}`);



