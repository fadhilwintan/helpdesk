import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import NavbarAdmin from '../components/NavbarAdmin/index'
import axios from 'axios'
import { baseUrl } from '../config'
import * as ReactBootStrap from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import './homeAdmin.css'
import { useHistory } from 'react-router-dom'


const HomeAdmin = () => {
    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/jawab/${id}`)
        console.log(id)
    }

    const [items, setItems] = useState([])

    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/discussions`)
        .then((res) => {
            const value = res.data.data
            console.log(res)
            setValue(value)
        })
        axios.get(`${baseUrl}/report-discussions`)
        .then((res) => {
            const items = res.data.data
            console.log(res)
            setItems(items)
        })
    }, [])

    return (
        <>
            <NavbarAdmin />
            {/* <Navbar /> */}
            <HeroSection />
            <h1> Pertanyaan Masuk </h1>
            <div className="tabelAdmin">
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Judul </th>
                            <th> Kategori </th>
                            <th> Prioritas </th>
                            <th> Tanggal Diajukan </th>
                        </tr>
                    </thead>
                    {value.map((value) => (
                        value.answer == 'null' ?
                            <tbody>
                                <td className="admBtn">
                                    <button onClick={() => handleClick(value.id_question)}>
                                        {value.title}
                                    </button>
                                </td>
                                <td className="reportTable">{value.category}</td>
                                <td className="reportTable">{value.priority}</td>
                                <td className="reportTable">{value.datecreated}</td>
                            </tbody>
                        :
                        null
                    ))}
                </ReactBootStrap.Table>
            </div>    
            <h1> Jumlah pertanyaan menurut Kategori</h1>
            <div className="tabelAdmin">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Kategori </th>
                            <th> Jumlah Pertanyaan </th>
                        </tr>
                    </thead>
                    {items.map((items) => (
                    <tbody>
                        <td className="reportTable"> {items.category} </td>
                        <td className="reportTable"> {items.count} </td>
                    </tbody>
                    ))}
                </Table>
            </div>
        </>
    )
}

export default HomeAdmin

