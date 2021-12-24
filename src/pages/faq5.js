import React from 'react'
import './faq1.css'
import HeroSection from '../components/HeroSection/index'
import Navbar from '../components/Navbar/Index'
import { Link } from 'react-router-dom'

const Faq5 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <h1> Jawaban </h1>
            <div className="jawContainer">
                <div className="judulContainer">
                        <li className="judulWraper">
                            <h3> Faq5 </h3>
                            <p> Kategori Pertanyaan</p>
                            <p> Prioritas Pertanyaan</p>
                        </li>
                </div>
                <div className="pertanyaanContainer">
                    <div className="pertanyaanWraper">
                        <h3> Pertanyaan </h3>
                        <p>Pertanyaan yang ditanyakan oleh user</p>
                    </div>
                </div>
                <div className="jawabanContainer">
                    <div className="jawabanWraper">
                        <h3> Jawaban </h3>
                        <p>Jawaban yang diberikan oleh adminr</p>
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

export default Faq5
