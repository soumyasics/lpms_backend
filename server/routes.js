const router=require('express').Router()
const user=require('./User/userController')



router.post('/registerUser',user.upload,user.registerUser)
router.post('/editUserById/:id',user.upload,user.editUserById)
module.exports=router