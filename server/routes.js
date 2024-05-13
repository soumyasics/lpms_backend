const router=require('express').Router()
const user=require('./User/userController')



router.post('/registerUser',user.upload,user.registerUser)
router.post('/editUserById/:id',user.upload,user.editUserById)
router.post('/viewUserById/:id',user.viewUserById)
router.post('/forgotPassword',user.forgotPassword)
router.post('/resetPassword',user.resetPassword)
router.post('/deleteUserById/:id',user.deleteUserById)
router.post('/editUserById',user.login)
router.post('/requireAuth',user.requireAuth)
router.post('/viewUsers',user.viewUsers)

module.exports=router