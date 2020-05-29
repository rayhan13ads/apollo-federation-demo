
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveUserRefernce } from '../referenceResolvers/referenceUser'
import { User } from '../entity/User'


export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
        orphanedTypes:[User]
    },
    {
        User: { __resolveReference: resolveUserRefernce }
    }
)
