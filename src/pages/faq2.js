import React from 'react'
import './faq1.css'
import HeroSection from '../components/HeroSection/index'
import Navbar from '../components/Navbar/Index'
import { Link } from 'react-router-dom'

const Faq2 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <h1> Jawaban </h1>
            <div className="jawContainer">
                <div className="judulContainer">
                        <li className="judulWraper">
                            <h3> Penurunan UKT selama masa pandemi covid-19 </h3>
                            <p> Administrasi </p>
                            <p>2021-07-12 </p>
                        </li>
                </div>
                <div className="pertanyaanContainer">
                    <div className="pertanyaanWraper">
                        <h3> Pertanyaan </h3>
                        <p> Apakah ada penurunan UKT selama masa pandemi ini?</p>
                    </div>
                </div>
                <div className="jawabanContainer">
                    <div className="jawabanWraper">
                        <h3> Jawaban </h3>
                        <p>Diumumkan kepada mahasiswa Universitas Pembangunan Nasional Veteran Jakarta, bahwa UPN Veteran Jakarta membuka  pendaftaran Penurunan Kelompok/kategori UKT, Penurunan UKT 50%, Pembebasan UKT dan Penundaan/Pencicilan UKT uang kuliah tunggal (UKT) Semester Genap TA.2020/2021 UPN Veteran Jakarta.
                            Untuk persyaratan dan rincian penurunan ukt dapat diakses pada laman: https://www.upnvj.ac.id/id/berita/2021/01/pendaftaran-penurunan-kelompokkategori-ukt-penurunan-ukt-50-pembebasan-ukt-dan-penundaanpencicilan-ukt-semester-genap-ta-20202021-upnvj.html
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

export default Faq2
