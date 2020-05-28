import { Resolver, Query } from "type-graphql";

@Resolver()
export class ProductResolver{

    @Query(()=>String)
    async products():Promise<String>{
        return 'working product'
    }


}