import React, { Component } from 'react'
import Layout from '../components/Layout'

export default class _error extends Component {
    static getInitialProps({res,err}){
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        return (
            <Layout>
                <div className="text-center">
                    <h3>
                        { this.props.statusCode ?
                            'An error ' + this.props.statusCode + ' occured on server' :
                            'An error occured on client'
                        }
                    </h3>
                </div>
            </Layout>
        )
    }
}
