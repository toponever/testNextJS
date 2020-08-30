import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = { date : new Date()}
    }
    componentDidMount(){
        setInterval(() => this.Tick(), 1000);
    }

    Tick(){
        this.setState(
            {date : new Date()}
        )
    }
    render() {
        const style = {
            height:70
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left text-success">
                        <h1><img style={style} src="/static/images/logo/logo.png" alt="" /> เฮลตี้คาร์เฟ่</h1>
                    </div>
                    <div className="col-md-4 text-right title mt-4 text-muted">
                        <h5>{this.state.date.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item title"> <Link href="/">หน้าหลัก</Link> </li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"> <Link href="/about">เกี่ยวกับเรา</Link> </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
