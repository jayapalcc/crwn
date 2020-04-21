import React from 'react';
import './preview-collection.styles.scss';
import {withRouter} from 'react-router-dom';
import PreviewItem from '../PreviewItem/PreviewItem.component'


const PreviewCollection = (props)=> {
    
    return (<div className="preview-collection">
                <h1 className="preview-heading" onClick={()=>props.history.push(`${props.match.path}/${props.title}`)}>{props.title.toUpperCase()}</h1>
                <div className="collection-item">
                    {props.items
                    .filter((item,i)=>i<props.displayCount)
                    .map(item => <PreviewItem key={item.id} item={item}></PreviewItem>)}
                </div>
            </div>);
};

//export default withRouter(Preview);
export default withRouter(PreviewCollection);