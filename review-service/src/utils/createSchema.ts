
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveReviewRefernce } from '../referenceResolvers/ReviewReference'
import { Review } from '../entity/Review';
import { Product } from '../modules/product/Product';
import { User } from '../modules/user/User';
export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
        orphanedTypes: [Review, User, Product]
    },
    {
        Review: {
            __resolveReference: resolveReviewRefernce,

            user(review: Review) {
                return { __typename: "User", id: review.userId }
            },
            product(review: Review) {
                return { __typename: "Product", id: review.productId };
            }
        }
    }
)

