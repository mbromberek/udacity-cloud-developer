// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '9b8ewyxta1'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-5-85zgsg.auth0.com',            // Auth0 domain
  clientId: 'Rd6ye8R4GwuI5Tjvdl5Qi8OAV5aAfAx6',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
