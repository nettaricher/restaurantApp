var events = require('events'),
    controller = require('./controllers'),
    config = require('./config').events;


class Restaurant extends events.EventEmitter {
    constructor(){
        super();
        this.max = 15;
        this.tables = 0;
        this.logs = new Array();
    }
    addTable(amount){
        this.tables += amount;
        this.emit(config.isFull);
        this.emit(config.change);
    }
    removeTable(amount){
        if(amount > this.tables)
        {
            this.tables = 0;
        }
        else{
            this.tables -= amount;
            this.emit(config.isFull);
        }
        this.emit(config.change);
    }
    clearTables()
    {
        this.tables = 0;
        this.emit(config.change);
    }
    getAll()
    {
        this.emit(config.Total); 
    }
};

exports.newRes = () => {
    var Rest = new Restaurant();
    Rest.on(config.change, () => {
        controller.displayTables(Rest);
    });
    Rest.on(config.isFull, () => {
        controller.checkFull(Rest);
    });
    
    Rest.on(config.Total, () =>{
        controller.TotalTables(Rest);
    });
        
    return Rest;
};

exports.getLogs = (obj) => {
    let str = " ";
    for (let i in obj.logs){
        str += obj.logs[i]+"<br>" + "<hr>";
    }
    return str;
}
