import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const {Mail, Company} = this.props
        return (
            <div className="container-fluid">
            <hr />
                <div className="text-center title">
                    <span className="text-danger">POWER BT {Company}</span>
                    <span className="text-muted"> | CONTACT BY EMAIL : {Mail}</span>
                </div>
            </div>
        )
    }
}
