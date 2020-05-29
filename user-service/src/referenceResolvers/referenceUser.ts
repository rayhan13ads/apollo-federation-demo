import { getConnection } from 'typeorm';
import { User } from '../entity/User';


export async function resolveUserRefernce(reference:Pick<User,"id">):Promise<User> {
    console.log(reference.id); 
    const user = await getConnection().getRepository(User).findOne({where:{id:reference.id}})
    console.log(user);
    
    if (!user) {
        throw new Error("UserRerference id invalid ")
    }
    return user
}