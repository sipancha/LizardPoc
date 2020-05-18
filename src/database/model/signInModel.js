const  mongoose = require('mongoose');

const signInFormSchema = require("./../schema/signInFormSchema")

const signInFormModel = mongoose.model('signInForm',signInFormSchema);

const signInFormModelObj = (signInFormData) =>{
    return new signInFormModel(signInFormData);
}
 
module.exports = {
    signInFormModelObj,
    signInFormModel
}



