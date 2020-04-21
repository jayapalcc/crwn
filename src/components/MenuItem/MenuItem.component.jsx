import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = (props)=> {
    console.log(props);
    return (<div className={`menu-item ${props.size}`}>
                <div className="menu-item-inner" style={{backgroundImage : `url(${props.imageUrl})`}}>
                    <div className="content" onClick={()=> props.history.push(`/shop/${props.linkUrl}`)}>
                        <h1>
                            {props.title.toUpperCase()}
                        </h1>
                        <span className="content-span">
                            Shop Now
                        </span>
                    </div>
                </div>
            </div>);
};

export default withRouter(MenuItem);