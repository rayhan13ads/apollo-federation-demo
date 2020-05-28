import { Resolver, Query } from "type-graphql";
import { Review } from '../../entity/User';

@Resolver(of => Review)
export class ReviewResolver{

    @Query(()=>String)
    async reviews():Promise<String>{
        return 'working reviews'
    }


}