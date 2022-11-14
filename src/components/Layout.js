import React, { useState } from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";


const  Layout = (props) => {
    const [content, setContent] = useState('');
    const [value, setValue] = useState('');
    const formExpressionInput = document.getElementById('formExpressionInput');

    const handleChange = event => {
        console.log('Enter in calc', formExpressionInput);

        /**
         * @TODO Implement it
         */        
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formExpressionInput = document.getElementById('formExpressionInput').value;
        console.log('Enter in calc 2', formExpressionInput);
        let calculation = new Calculation(formExpressionInput);
        
        console.log('calculation', calculation);
        

        let result =  calculation.calculate()/* @TODO Implement it */
        console.log('result', result);

        let content = 'Wrong input!';

        if (result !== false) {
            setContent(content)
        }
        setContent(result)
        /**
         * @TODO Implement it
         */
        
    }

    
    return (
        <div>
            <div className="row">
                <h1 className="col-md-8 col-md-offset-2 text-center">Devskiller React calculator</h1>
            </div>

            <div className="container">
                <div className="row">
                    <form className="col-md-6 col-md-offset-3 text-center" onSubmit={(event) => handleSubmit(event)}>
                        <input id="formExpressionInput" type="text" className="form-control col-md-9" placeholder="expression..."
                                /* @TODO Implement it */
                                />
                        <input className="btn btn-success" type="submit" value="Submit"/>
                    </form>
                </div>

                <Paragraph content={content}  /* @TODO Implement it *//>
            </div>
        </div>
    )
    
}

export default Layout;