import React,{Component} from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Link from 'next/link'

export default class index extends Component {

    static async getInitialProps() {
        // const res = await axios.get('http://localhost:3001/blogs')
        // return { blogs : res.data }
        const config = {
            method: 'get',
            url: 'https://api.npoint.io/11da13742f9ec752e3be/blogs/'
        }
    
        let res = await axios(config)
        console.log(res.data)
        return { blogs : res.data }
    }

    renderBlogs = blogs => {
        return(
            blogs.map( blog=> {
                return(
                    <div key={blog.id} className="col-6">
                        <img src={blog.thumbnail} className="img-fluid"/>
                        <h4 className="mt-3">
                        <Link as={'/blog/detail/' + blog.id} href={'/blog/detail?id='+ blog.id}>
                        {blog.subject}
                        </Link>
                        </h4>
                        <hr />
                        <p className="text-justify">{blog.intro}</p>
                    </div>
                )
            })
        )
    }

    render(){
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        { this.renderBlogs(this.props.blogs)}
                    </div>
                </div>
            </Layout>
        )
    }
}