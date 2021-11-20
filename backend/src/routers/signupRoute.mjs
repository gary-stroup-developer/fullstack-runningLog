export const signupRoute = {
    path:'/api/signup',
    method: 'get',
    handler: async (req,res) => {
        res.send('signup route is working!!');
    }
}