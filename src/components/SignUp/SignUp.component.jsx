import React from 'react';
import './sign-up.styles.scss'
import FormButton from '../FormButton/FormButton.component';
import FormInput from '../Form/FormInput.component';
import {auth, createUserProfileDocument} from '../../Firebase/Firebase.utils';

export class SignUp extends React.Component {
    constructor(){
        super();

        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    submitHandler =async (e)=>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Entered Passwords dont match !!!");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState(
                {displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
                }
            );

        }catch(error){
            console.log(error);
            this.setState({displayName: '', email: '', password: '', confirmPassword: ''});
        }
    };

    
    changeHandler =(e)=>{
        const {name, value} = e.target;
        this.setState({[name] : value});
        
    }

    render() {
        return (
            <div className="sign-up">
                <h1>I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput label="DisplayName" type="text" name="displayName" handleChange={this.changeHandler} value={this.state.displayName} required/>
                    <FormInput label="Email" name="email" type="email" handleChange={this.changeHandler} value={this.state.email} required/>
                    <FormInput label="Password" name="password" type="password" handleChange={this.changeHandler} value={this.state.password} required/>
                    <FormInput label="ConfirmPassword" name="confirmPassword" type="password" handleChange={this.changeHandler} value={this.state.confirmPassword} required/>
                    <FormButton type ="submit" btn="black-bg__white-text">SIGN UP</FormButton>
                </form>
            </div>
        )
    }
}


export default SignUp;