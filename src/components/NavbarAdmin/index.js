import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { baseUrl } from '../../config';
import { ExportToExcel } from '../ExportToExcel';
import {Nav, NavLink, NavMenu, NavBtn, Button} from './NavbarAdminElements';

const NavbarAdmin = () => {
    // const token = localStorage.getItem("token");
    const history = useHistory()

    const handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        history.push('/')
    }

    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/discussions`)
        .then((res) => {
            const value = res.data.data
            console.log(res)
            setValue(value)
        })
    }, [])

    const fileName = "Laporan"
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Beranda
                </NavLink>
                <NavLink to="/suggestion" activeStyle>
                    Kritik & Saran
                </NavLink>
                <Button >
                    <ExportToExcel apiData={value} fileName={fileName}/>
                </Button>
            </NavMenu>
            <NavBtn>
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            </NavBtn>
        </Nav>
        </>
    );
};

export default NavbarAdmin;

