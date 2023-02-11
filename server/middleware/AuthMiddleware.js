
const {verify} = require('jsonwebtoken');

const validateToken = (request,response,next)=>{
const accessToken = request.cookies.userToken

if(!accessToken){
    response.json({error:"User not login"});
}
else{
try{
    const verifyToken = verify(accessToken,"fd2efe108eaef7de733d43cbd70e12d2632036755f7b29c30d052d0a0d58a4a3");
    request.user = verifyToken;
    if(verifyToken){
        return next();
    }
    }
    
catch(error){
    return response.json({error:error});
    }
}
}

module.exports = {validateToken};