import React, { useState, useEffect } from 'react'
import './jawaban.css'
import { baseUrl } from '../config'
import axios from 'axios'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar/Index'
import { Link } from 'react-router-dom'

const Jawaban = ({match}) => {
    const {params: {id}} = match

    const [items, setItems] = useState([])
    useEffect (() => {
        axios.get(`${baseUrl}/discussions`)
        .then((res) => {
            const items = res.data.data
            console.log(res)
            setItems(items)
        })
    }, [])

    return (
        <>
            <Navbar />
            <HeroSection />
            <h1> Jawaban </h1>
            {items.map((items) => (
                items.id_question == id ?
                <div className="jawContainer">
                    <div className="judulContainer">
                            <li className="judulWraper">
                                <h3> {items.title}</h3>
                                <p> {items.category} </p>
                                <p> {items.datecreated}</p>
                            </li>
                    </div>
                    <div className="pertanyaanContainer">
                        <div className="pertanyaanWraper">
                            <h3> Pertanyaan </h3>
                            <p>{items.question}</p>
                        </div>
                    </div>
                    <div className="jawabanContainer">
                        <div className="jawabanWraper">
                            <h3> Jawaban </h3>
                            <p>{items.answer}</p>
                        </div>
                    </div>
                    <div className="btnContainer">
                        <Link to='/'>
                        <button className="jwbBtn"> Kembali </button>
                        </Link>
                    </div>
                </div> 
                :
                null
           ))}
        </>
    )
}

export default Jawaban
