import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "dev-rfi3tnva03i28ie4.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck