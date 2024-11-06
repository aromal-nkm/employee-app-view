const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    salary:Number
})
const employee=mongoose.model('employees',employeeSchema);    
module.exports=employee