import React from 'react';

const  Paragraph = (props) => {

    return(
        <div className="panel panel-default">
            <p className="panel-heading">Result</p>

            <p className="panel-body">
                {props.content} 
            </p>
        </div>
    );
};
export default Paragraph;