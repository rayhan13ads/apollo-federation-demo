import { buildSchema } from 'type-graphql'
import { buildFederatedSchema } from './buildFederatedSchema'

export const FederatedSchema = buildFederatedSchema({
    resolvers:[__dirname + "/../modules/**/*.ts"],
})


export const createSchema = () => buildSchema({
    resolvers:[__dirname + "/../modules/**/*.ts"],

})