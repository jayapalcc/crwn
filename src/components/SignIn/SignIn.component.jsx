import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form/FormInput.component';
import FormButton from '../FormButton/FormButton.component';
import {auth, signInWithGoogle} from '../../Firebase/Firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email : '',
            password : ''
        }
    }

    submitHandler =async (e)=>{
        e.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''});

        }catch(error){
            //alert("Invalid Login Credentials!!!")
            console.log(error);
            this.setState({email: '', password: ''});
        }
    };

    changeHandler = (e)=>{
        const {value, name} = e.target;
        this.setState({[name] : value});
    };

    render(){
        //console.log(this.state.status);
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <div className="sign-in-form">
                    <form >
                        <FormInput label="Email" handleChange={this.changeHandler} required name="email" type="email" value={this.state.email}/>
                        <FormInput label="Password" handleChange={this.changeHandler} required name="password" type="password" value={this.state.password}/>
                        <div className="btn-grp">
                            <FormButton type="submit" name="Sign In" btn="black-bg__white-text" onClick={this.submitHandler}>Sign In</FormButton>
                            <FormButton onClick={signInWithGoogle} btn="blue-bg__white-text">Google</FormButton>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;