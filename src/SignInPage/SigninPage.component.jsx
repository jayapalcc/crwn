import React from 'react';
import './signin-page.styles.scss';
import SignIn from '../components/SignIn/SignIn.component';
import SignUp from '../components/SignUp/SignUp.component';

const SigninPage = ()=>{
    return (
            <div className="signin-page">
                <SignIn/>
                <SignUp/>
            </div>
        );
};


export default SigninPage;