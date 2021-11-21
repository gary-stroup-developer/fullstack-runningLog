import { User } from "../db.mjs";

export const resetPasswordRoute = {
    path: '/api/reset-password',
    method: 'put',
    handler: async (req,res) => {
        //get the new password and verificationString
        const {password, verificationString} = req.body;

        //search db for user with the verificationString. Update password & verificationString values
        try {
        const user = await User.findOneAndUpdate({verificationString},{password,verificationString: ''});
        res.status(200).send({"message":true});
        }catch(err) {
            res.status(404).send({"message":false});
        }
    }
}