import React from 'react'
import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout title="เกี่ยวกับเรา">
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    ร้านเราเป็นร้านที่ทำอาหารอร่อยที่สุดในจักรวาล ซึ่งทอร์จากดาวแอสการ์ดชอบมานั่งทานอาหาร 
                    พร้อมชมวิวมองดาวอังคารอยู่ริมหน้าต่าง ร้านเรามีมือชงค็อกเทลจากดาวนาเม็กชื่อโงกุล
                    เป็นมือชงอันดับ 1 ของจักรวาลลลลลล
                </p>
                <h4 className="text-success">จาก เฮลตี้ คาเฟ</h4>
            </div>
        </Layout>
    )
}

export default About