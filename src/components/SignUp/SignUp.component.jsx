import React, {useState} from 'react';
import './sign-up.styles.scss'
import FormButton from '../FormButton/FormButton.component';
import FormInput from '../Form/FormInput.component';
import {connect} from  'react-redux';
import {signUpUser_A} from './SignUp.actions';
import LoadingLottie from '../../Lottie/Lottie.component';


export const SignUp = (props)=> {
    
    const [state, setState] = useState({
                                        displayName: '',
                                        email: '',
                                        password: '',
                                        confirmPassword: ''
                                        }
                                    );
    const {displayName, email, password, confirmPassword} = state;

    const submitHandler = (e)=>{
        e.preventDefault();
        
    
        if(password !== confirmPassword){
            alert("Entered Passwords dont match !!!");
            return;
        }
    
        props.signUpUser(email, password, displayName);
        setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                    }
        );
    };
    
    const changeHandler =(e)=>{
        const {name, value} = e.target;
        setState({...state, [name] : value});
    }
            
    //console.log(props);
    return (
        <div className="sign-up">
            {
                props.loader
                ? <div className="lottie-canvas"><LoadingLottie/></div>
                :null
            }
            <h1>I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput label="DisplayName" type="text" name="displayName" handleChange={changeHandler} value={displayName} required/>
                <FormInput label="Email" name="email" type="email" handleChange={changeHandler} value={email} required/>
                <FormInput label="Password" name="password" type="password" handleChange={changeHandler} value={password} required/>
                <FormInput label="ConfirmPassword" name="confirmPassword" type="password" handleChange={changeHandler} value={confirmPassword} required/>
                <FormButton type ="submit" btn="black-bg__white-text">SIGN UP</FormButton>
            </form>
        </div>
    )
}


function mapStateToProps(state){
    return{
        loader: state.user.isInitialising
    }
}

function matchDispatchToProps(dispatch){
    return{
        signUpUser: (email, password, displayName)=>{
            dispatch(signUpUser_A({email, password, displayName}));
        }
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SignUp); 