import React from 'react';
import './form-button.styles.scss';

const FormButton = ({handleChange, ...btnFeatures})=>{
    return (<div className="form-button">
            <button className={`${btnFeatures.btn} btn`} {...btnFeatures}></button>
            </div>
    );
};

export default FormButton;