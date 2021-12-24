import React from 'react'
import './faq1.css'
import HeroSection from '../components/HeroSection/index'
import Navbar from '../components/Navbar/Index'
import { Link } from 'react-router-dom'

const Faq3 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <h1> Jawaban </h1>
            <div className="jawContainer">
                <div className="judulContainer">
                        <li className="judulWraper">
                            <h3> Bantuan kuota Kemendikbud </h3>
                            <p> SIAKAD </p>
                            <p> 2021-07-12</p>
                        </li>
                </div>
                <div className="pertanyaanContainer">
                    <div className="pertanyaanWraper">
                        <h3> Pertanyaan </h3>
                        <p>Bagaimana cara mendapatkan bantuan kuota Kemendikbud?</p>
                    </div>
                </div>
                <div className="jawabanContainer">
                    <div className="jawabanWraper">
                        <h3> Jawaban </h3>
                        <p> 
                            Untuk mendapatkan bantuan kuota Kemendikbud para mahasiswa diharapkan untuk mengupload nomor handphonenya pada profil siakad masing masing.
                            langkah mengupload nomor telfon yaitu: buka laman siakad upnvj - login - buka halaman profile - masukan nomor handphone pada kolom nomor handphone.
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

export default Faq3
