import React, { useState } from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";


const  Layout = (props) => {
    const [content, setContent] = useState('');
    const [value, setValue] = useState('');

    const handleChange = event => {
        /**
         * @TODO Implement it
         */        
    }

    const handleSubmit = event => {
        event.preventDefault();

        let calculation = new Calculation(value);

        let result =  null/* @TODO Implement it */

        let content = 'Wrong input!';

        if (result !== false) {
            // @TODO Implement it
        }

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
                    <form className="col-md-6 col-md-offset-3 text-center" onSubmit={handleSubmit}>
                        <input type="text" className="form-control col-md-9" placeholder="expression..."
                                /* @TODO Implement it */
                                />
                        <input className="btn btn-success" type="submit" value="Submit"/>
                    </form>
                </div>

                <Paragraph /* @TODO Implement it *//>
            </div>
        </div>
    )
    
}

export default Layout;