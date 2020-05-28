import { GraphQLError } from "graphql";
import { ApolloError } from "apollo-server-express";
import { CONTAINS, ValidationError } from 'class-validator';
import { Any } from "typeorm";
import e = require("express");
import { constants } from "buffer";

// export const graphalFormatError = (error:GraphQLError) =>{

//     if (error.originalError instanceof ApolloError) {
//         return error
//     }
//     console.log(error);
    
//     return new GraphQLError(`${error.message}`)


// }

// interface Constraint{
//     length:string
//     IsEmailExistConstraint:string
// }

// interface Validation{
//     target:any
//     value:string
//     property:string
//     children:Array<any>
//     constraints:Array<Constraint>

// }

export const graphalFormatError = (error:any) =>{

    if (error.originalError instanceof ApolloError) {
        return error
    }

    if (error.extensions.exception.validationErrors) {
        return error.extensions.exception.validationErrors
    }
    console.log(error);
    
    return new GraphQLError(`${error.message}`)


}