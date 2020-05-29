
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveProductRefernce } from '../referenceResolvers/ProductReference';
import { Product } from '../entity/Product';

export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
    },
    {
        Product: {
            __resolveReference: resolveProductRefernce,

            user(product:Product) {
                return { __typename: "User", id: product.userId }
            },
        }
    }
)


