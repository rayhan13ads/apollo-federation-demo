import { ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator } from "class-validator";
import { User } from '../../entity/User';


@ValidatorConstraint({async:true})
export class IsEmailExistConstraint implements ValidatorConstraintInterface{

    validate(email:string){
        return User.findOne({where:{email}}).then((user)=>{
            if(user) return false
            return true
        })
    }

}

export function IsEmailExist(validtionOptions?:ValidationOptions){
    return function (object:Object, propertyName:string) {
        
        registerDecorator({
            target:object.constructor,
            propertyName:propertyName,
            options:validtionOptions,
            constraints:[],
            validator:IsEmailExistConstraint
        })
    }
}