import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header>
                
                <h2 class="text-center">{this.props.title}</h2>
                
            </header>
        )
    }
}