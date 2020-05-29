import { Review } from '../entity/Review';


export async function resolveReviewRefernce(reference:Pick<Review,"id">):Promise<Review> {
    const review = await Review.findOne({where:{id:reference.id}})
    if (!review) {
        throw new Error("ProductRerference id invalid ")
    }
    return review
}