
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveReviewRefernce } from '../referenceResolvers/ReviewReference'
import { Review } from '../entity/Review';
export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
        orphanedTypes:[Review]
    },
    {
        Review: { __resolveReference: resolveReviewRefernce}
    }
)

