import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import HeroSection from '../components/HeroSection'
import axios from 'axios'
import { baseUrl } from '../config'
import Table from 'react-bootstrap/Table'

const Kritik = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/suggestions`)
        .then((res) => {
            const items = res.data.data
            console.log(res)
            setItems(items)
        })
    }, [])
    return (
        <>
            <NavbarAdmin />
            <HeroSection />
            <h1> Kritik & Saran </h1>
            <div className="tabelAdmin">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> Nama </th>
                            <th> Kritik & Saran </th>
                        </tr>
                    </thead>
                    {items.map((items) => (
                    <tbody>
                        <td className="reportTable"> {items.name} </td>
                        <td className="reportTable"> {items.suggestion} </td>
                    </tbody>
                    ))}
                </Table>
            </div>
        </>
    )
}

export default Kritik