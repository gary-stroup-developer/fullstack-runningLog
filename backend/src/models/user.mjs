// import mongoose from 'mongoose';
// import validator from 'validator';
// import bcrypt from 'bcrypt';
// import 'dotenv';
// import jwt from 'jsonwebtoken';




//   export const userSchema = new mongoose.Schema( {
//         firstName: 'String',
//         lastName: 'String',
//         userName: {
//             type: String,
//             lowercase: true,
//             unique: true,
//             trim: true,
//             validate: (value) => {
//                 if(!validator.isEmail(value)) {
//                     throw new Error('username must be an email');
//                 }
//             }
//         },
//         password: {
//             type: String,
//             lowercase: true,
//             trim: true,
//             minlength: [8,'password must be at least 8 characters in length'],
//             validate: (value) => {
//                 if(value.includes('password')){
//                     throw new Error('the password cannot contain the word password')
//                 }
//             }
//         },
//         tokens:[{
//             token: 'String'
//         }],
//         isVerified: {type: Boolean},
//         verificationString: {
//             type: String
//         }
//     });


//     userSchema.methods.setToken = async function (token) {
//         const user = this;
//         user.tokens = user.tokens.concat({token});
//         await user.save();
//     }

    // userSchema.pre('save',async function(next){
    //     if(this.isModified('password')){
    //     const salt = await bcrypt.genSalt();
    //     this.password = await bcrypt.hash(this.password,salt);
    //     }
    //     next();
    // });
    
    // userSchema.statics.login = async function(email,password){
    //     const user = await this.findOne({email});
    //     if(user){
    //         const auth = await bcrypt.compare(password,user.password);
    //         if(!auth){
    //             return user;
    //         }
    //         throw Error('incorrect password');
    //     }
    //     throw Error('incorrect email');
    // };


    //before saving the user, hash the password
    // userSchema.pre('save',async function(next){
    //     const user = this;

    //     if (user.isModified('password')) {

    //         user.password = await bcrypt.hash(user.password,10);
    //     }

    //     next()
    // });

   
