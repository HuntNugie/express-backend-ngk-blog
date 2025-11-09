export const register = (req,res)=>{
    const {nama,email,password,confirmPass} = req.body;
    console.log(req.body)
    res.status(200).json(req.body)
}