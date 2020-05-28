import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

dotenv.config({ path:".env" })



const gateway = new ApolloGateway({
    serviceList:[
        {name:"users", url:`http://localhost:5001/graphql`},
        {name:"products", url:`http://localhost:5002/graphql`},
        {name:"reviews", url:`http://localhost:5003/graphql`}
    ]
})



const server = new ApolloServer({
    gateway,
    subscriptions:false
})

server.listen({port:process.env.PORT}).then(({url})=>{
    console.log(`server gateway runing ${url}`)
})

