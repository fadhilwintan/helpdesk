import React from 'react'
import './faq1.css'
import HeroSection from '../components/HeroSection/index'
import Navbar from '../components/Navbar/Index'
import { Link } from 'react-router-dom'

const Faq1 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <h1> Jawaban </h1>
            <div className="jawContainer">
                <div className="judulContainer">
                        <li className="judulWraper">
                            <h3> Pengenalan Helpdesk </h3>
                            <p>Umum </p>
                            <p> 2021-07-12</p>
                        </li>
                </div>
                <div className="pertanyaanContainer">
                    <div className="pertanyaanWraper">
                        <h3> Pertanyaan </h3>
                        <p>Apa itu helpdesk?</p>
                    </div>
                </div>
                <div className="jawabanContainer">
                    <div className="jawabanWraper">
                        <h3> Jawaban </h3>
                        <p>
                            Helpdesk merupakan media bantu tanya jawab sebagai media pelayanan. Pada website ini mahasiswa, dosen, dan tenaga pendidikan bisa mengajukan
                            keluhan yang dihadapinya maupun pertanyaan seputar Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta. Untuk mengajukan
                            keluhan ataupun membuat pertanyaan mahasiswa, dosen, dan tenaga pendidikan harus mempunyai akun terlebih dahulu sehingga bisa mengajukan pertanyaan
                            yang nantinya akan dijawab oleh administrator kami.   
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

export default Faq1
