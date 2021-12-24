import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar/Index';
import './Beranda.css';
import { baseUrl } from '../config';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEye } from "react-icons/fa";
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Home = () => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    const handleClick = () => {
        localStorage.getItem('token', token)
        if (token === null) {
            history.push('/login')
        } else {
            history.push('/buatpertanyaan')
        }
    }

    const [open, setOpen] = useState(false)
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [value, setValue] = useState({
        name: '',
        suggestion: ''
    })

    const handleInput = (e) => {
        const value = e.target.value;
        setValue((prev)=>({
            ...prev,
            [e.target.name]: value
            
        }));
    }

    const handleSubmit = (e) => {
        if(value.suggestion === ''){
            alert('Masukkan data yang diperlukan terlebih dahulu')
        }
        else{
            console.log(value)
            e.preventDefault()
            const suggestion = {
                'name': value.name,
                'suggestion': value.suggestion
            }
            axios.post(`${baseUrl}/create-suggestions`, suggestion)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            setValue({
                name: '',
                suggestion: ''
            })
            setOpen(true)
            setTimeout(function(){
                window.location.reload()
            },
                1000);
        }
    }

    

    return (
        <>
        <Navbar />
        <HeroSection />
        <div className="btnContainer">
            <div className="btnWraper">
                <li>
                    <ul>
                        <button className="pertanyaanBaru" onClick={handleClick}> 
                                Buat Pertanyaan Baru <FaPlus className="icon"/>
                        </button>
                        <Link to="/pertanyaan">
                            <button className="lihatRespon"> 
                                Lihat Pertanyaan <FaEye className="icon2"/>
                            </button>
                        </Link>
                    </ul>
                </li>
            </div>
        </div>
        <div className="faqContainer">
            <h1>FAQ</h1>
            <div className="faqWraper">
                <ul>
                    <li className="faqList">
                        <Link to="/faq1"> 
                            <button className="faqBtn">
                                Pengenalan helpdesk
                            </button>
                            
                        </Link>
                    </li>
                    <li className="faqList">
                    <Link to="/faq2"> 
                            <button className="faqBtn">
                                Penurunan UKT selama masa pandemi covid-19
                            </button>
                        </Link>
                    </li>
                    <li className="faqList">
                        <Link to="/faq3"> 
                            <button className="faqBtn">
                                Bantuan kuota Kemendikbud
                            </button>
                        </Link>
                    </li>
                    <li className="faqList">
                        <Link to="/faq4"> 
                            <button className="faqBtn">
                                Tata cara pembayaran UKT
                            </button>
                        </Link>
                    </li>
                    {/* <li className="faqList">
                        <Link to="/faq5"> 
                            <button className="faqBtn">
                                FAQ 5
                            </button>
                        </Link>
                    </li> */}
                </ul>
            </div>
            
        </div>
        <div className="saranContainer">
                <h4> Sampaikan kritik dan saran anda </h4>
                <form className="saranWrapper">
                    <div className="saran1">
                        <ul>
                            <li className="faqList">
                                <label className="newSaran"> Nama </label>
                                <input className="saranForm" 
                                type="text"
                                name='name'
                                value={value.name}
                                onChange={handleInput}
                                required/>
                            </li>
                            <li className="faqList">
                                <label className="newSaran"> Kritik & Saran</label>
                                <textarea className="newSaranForm"
                                name='suggestion'
                                value={value.suggestion}
                                onChange={handleInput}
                                required/>
                            </li>
                            <li className="newBtn1">
                            <button className="saranBtn" 
                            onClick={handleSubmit}
                            >
                                Sampaikan Saran
                            </button>
                        </li>
                        </ul>
                    </div>
                </form>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Your question successfully added!
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Home
