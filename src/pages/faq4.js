import React from 'react'
import './faq1.css'
import HeroSection from '../components/HeroSection/index'
import Navbar from '../components/Navbar/Index'
import { Link } from 'react-router-dom'

const Faq4 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <h1> Jawaban </h1>
            <div className="jawContainer">
                <div className="judulContainer">
                        <li className="judulWraper">
                            <h3> Tata Cara Pembayaran UKT </h3>
                            <p> Administrasi </p>
                            <p> 2021-07-12 </p>
                        </li>
                </div>
                <div className="pertanyaanContainer">
                    <div className="pertanyaanWraper">
                        <h3> Pertanyaan </h3>
                        <p>Bagaimana cara membayar UKT?</p>
                    </div>
                </div>
                <div className="jawabanContainer">
                    <div className="jawabanWraper">
                        <h3> Jawaban </h3>
                        <p>
                            Untuk pembayaran UKT bisa menggunakan bank BNI dengan detail cara bisa diakses melalui: 
                            https://penmaru.upnvj.ac.id/cara-pembayaran.html
                        </p>
                    </div>
                </div>
                <div className="btnContainer">
                    <Link to='/'>
                    <button className="jwbBtn"> Kembali </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Faq4
