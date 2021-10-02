import React, { Component } from "react";

import NotFoundIcon from '../img/notfound.svg'

export default class NotFound extends Component {
    render() {
        return (            
            <img src={NotFoundIcon} class="rounded mx-auto d-block" alt="Not Found"/>
        );
    }
}