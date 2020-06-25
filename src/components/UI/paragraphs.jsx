import React, {Fragment} from  'react';

let paragraphs = props => {

    return (

        <Fragment>
            <p className={props.info.type}>
            {props.info.text}
            </p>
        </Fragment>
    )
}



export default paragraphs;