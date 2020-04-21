import React from 'react';
import './form-input.styles.scss';

const FormInput = ({label, handleChange, ...formInputElements})=>{
    const {value} = {...formInputElements};
    console.log(value);
    
    return (<div className="form-bg">
                <input className="form-input" {...formInputElements} onChange={handleChange}/>
                <label className={`${value? 'shrink-item' : ''} text-label`} >{label}</label>
            </div>
    );
};

export default FormInput;