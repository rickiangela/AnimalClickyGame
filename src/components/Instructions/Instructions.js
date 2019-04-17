import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron>
            <h3 className=" animated fadeInDown instructions">{props.message}</h3>
        </Jumbotron>
    </div>
);

export default Instructions;