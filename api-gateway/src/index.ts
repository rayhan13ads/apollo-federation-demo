import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway'
import * as expressJwt from 'express-jwt'
import * as express from 'express'
import { MyContext } from './modules/types/MyContext';
dotenv.config({ path:".env" })

const app = express()

const gateway = new ApolloGateway({
    serviceList:[
        {name:"users", url:`http://localhost:5001/graphql`},
        {name:"products", url:`http://localhost:5002/graphql`},
        {name:"reviews", url:`http://localhost:5003/graphql`}
    ],
    buildService({name, url}){
        return new RemoteGraphQLDataSource({
            url,
            willSendRequest({request,context}){
                if (context.Authorization) {
                    request.http?.headers.set("Authorization", context.Authorization);
                  }
            }
        })
    }
})



const server = new ApolloServer({
    gateway,
    subscriptions:false,
    context: ({ req }) => {
        return {
          Authorization: req.headers.authorization || null
        }
    }
})

server.applyMiddleware({app})

app.listen(process.env.PORT,()=>{
    console.log(`server start on ${process.env.HOST}:${process.env.PORT}/graphql`);
})

