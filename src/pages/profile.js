import React, { useState, useEffect }from 'react'
import './profile.css'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar/Index'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config'

function Profile() {
    const uname = localStorage.getItem('username')
    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/jawaban/${id}`)
        console.log(id)
    }


    const [value, setValue] = useState([])

    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/profile/${uname}`)
        .then((res) => {
            const items = res.data.data
            console.log(res)
            setItems(items)
        })
        axios.get(`${baseUrl}/discussions`)
        .then((res) => {
            const value = res.data.data
            console.log(res)
            setValue(value)
        })
    }, [])
    
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="profileContainer">
                <h1> Profile </h1>
                <div className="profileWrapper">
                    {items.map((items) => (
                    <ul className="tes1">
                     
                        <li>
                            <label className="profileLabel"> NIM </label>
                            <p className="profileTes"> {items.ni} </p>
                        </li>
                        <li>
                            <label className="profileLabel"> Nama </label>
                            <p className="profileTes"> {items.name}</p>
                        </li>
                        <li>
                            <label className="profileLabel"> Jenis Kelamin </label>
                            <p className="profileTes"> {items.gender} </p>
                        </li>
                        <li>
                            <label className="profileLabel"> Email </label>
                            <p className="profileTes"> {items.email} </p>
                        </li>
                        <li>
                            <label className="profileLabel"> No Handphone </label>
                            <p className="profileTes"> {items.phonenumber} </p>
                        </li>
                    
                    </ul>
                    ))}
                </div>
                <div className="pertWrapper">
                    <ul className="tes2">
                        <li>
                            <h1> Pertanyaan </h1>
                        </li>
                        {value.map((value) => (
                            value.username == uname ?
                            <li className='profileList'>
                                    <button className="profileBtn" onClick={() => handleClick(value.id_question)}>
                                        {value.title}
                                    </button>
                            </li>
                            :
                            null
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profile
