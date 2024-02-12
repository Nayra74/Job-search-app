
export const authenicationToken=async(req,res,next)=>{
    const token=req.headers.authorization;
    if (!token){
        return req.json({message:"unUthorized"})
    }
    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) {
          return res.json({message: 'Forbidden' });
        }
        req.user = user;
        next();
      });
}