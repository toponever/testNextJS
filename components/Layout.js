import React,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { render } from 'react-dom'
import "../static/css/style.scss"

export default class Layout extends Component {
render(){
    const { children, title = "เฮลตี้ คาฟ่ บล๊อกเกอร์" } = this.props
    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}
}