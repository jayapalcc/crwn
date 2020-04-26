import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form/FormInput.component';
import FormButton from '../FormButton/FormButton.component';
import {connect} from 'react-redux';
import {googleSigninInit_A, emailSigninInit_A} from './Signin.actions';
import LoadingLottie from '../../Lottie/Lottie.component';

export const SignIn =(props)=>{
    
    const[state, setState] = useState({
                                        email : '',
                                        password : ''
                                    });

    const {email, password} = state;

    const submitHandler = (e)=>{
        e.preventDefault();
        props.emailSigninInit(email,password);        
    };

    const changeHandler = (e)=>{
        const {value, name} = e.target;
        setState({...state, [name] : value});
    }; 

    return (
        <div className="sign-in">
            {
                props.loader
                ? <div className="lottie-canvas"><LoadingLottie/></div>
                :null
            }
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <div className="sign-in-form">
                <form >
                    <FormInput label="Email" handleChange={changeHandler} required name="email" type="email" value={email}/>
                    <FormInput label="Password" handleChange={changeHandler} required name="password" type="password" value={password}/>
                    <div className="btn-grp">
                        <FormButton type="submit" name="Sign In" btn="black-bg__white-text" onClick={submitHandler}>Sign In</FormButton>
                        <FormButton type="button" onClick={props.googleSigninInit} btn="blue-bg__white-text">Google</FormButton>
                    </div>
                </form>
            </div>
        </div>
    );
}



function mapStateToProps(state){
    return{
        loader: state.user.isInitialising
    }
}

function mapDispatchToProps(dispatch){
    return{
        googleSigninInit: ()=>{
            dispatch(googleSigninInit_A());
        },
        emailSigninInit: (email,password)=>{
            dispatch(emailSigninInit_A({email, password}));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);