exports.displayTables = (obj) =>{
    if((obj.tables - obj.max) > 0)
    {
        obj.logs.push(`There are ${obj.tables} tables in the restaurant and ${obj.tables - obj.max} tables are waiting `);
    }
    // else console.log(`There are ${this.tables} tables in the restaurant`);
    else obj.logs.push(`There are ${obj.tables} tables in the restaurant`);
}
exports.checkFull = (obj) => {
    if(obj.tables > obj.max)
        // console.log(`${this.tables} is too many  tables!!! `);  
        obj.logs.push(`${obj.tables} is too many  tables!!! `);
}

exports.TotalTables = (obj) => {
    // console.log(`Total tables is: ${this.tables}`)
    obj.logs.push(`Total tables is: ${obj.tables}`);
}