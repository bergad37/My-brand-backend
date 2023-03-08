const allowTodelete= (req,res,next)=>{

    const authH=req.headers.authorization;
    console.log(authH);
}

export default allowTodelete