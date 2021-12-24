import React, { useEffect, useState } from 'react'
import './pertanyaan.css'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar/Index'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config'


const Pertanyaan = () => {
    const history = useHistory()

    const handleClick = (id) => {
            history.push(`/jawaban/${id}`)
            console.log(id)
    }

    const [searchTerm, setSearchTerm] = useState('')

    const [items, setItems] = useState([])
    useEffect(() => {
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
            <div className="tanyaContainer">
                <h1> Daftar Pertanyaan</h1>
                <form className="searchForm">
                    <input className="searchBar" 
                    type="text" 
                    placeholder="Cari Pertanyaan Anda Disini"
                    onChange={(event) => {setSearchTerm(event.target.value);} }
                    required/>
                    <button className="searchBtn" type="submit"> Cari </button>
                </form>
                <div className="tanyaWraper">
                    {items.filter((items) => {
                        if (searchTerm === "") {
                            return items
                        } else if (items.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return items
                        }
                    }).map((items) => (
                        <ul>
                            <li className='tanyaList'>
                                    <button className="tanyaBtn" onClick={() => handleClick(items.id_question)}>
                                        {items.title} 
                                    </button>
                            </li>
                        </ul>
                    ))}         
                </div>
            </div>
        </>
    )
}

export default Pertanyaan
