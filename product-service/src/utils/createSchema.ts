
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveProductRefernce } from '../referenceResolvers/ProductReference';

export const FederatedSchema = buildFederatedSchema(
    {
    resolvers:[__dirname + "/../modules/**/*.ts"],
},
{
    Product:{ __resolveReference: resolveProductRefernce }
}
)


