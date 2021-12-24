import React, { useState } from 'react'
import './formTanya.css'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar/Index'
import { baseUrl } from '../config'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const FormTanya = () => {
    const username = localStorage.getItem('username')
    const major = localStorage.getItem('major')
    console.log(username)
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

    // const [open, setOpen] = useState(false)

    const [value, setValue] = useState({
        title: '',
        datecreated: '',
        category: '',
        priority: '',
        question: ''
    })

    const handleInput = (e) => {
        const value = e.target.value;
        setValue((prev)=>({
            ...prev,
            [e.target.name]: value
            
        }));
    }

    const handleSubmit = (e) => {
        if(value.title === '', value.category === '', value.priority === '', value.question === ''){
            alert('Masukkan data yang diperlukan terlebih dahulu')
        }
        else{
            console.log(value)
            e.preventDefault()
            const discussion = {
                'username': username,
                'datecreated': value.datecreated,
                'major': major,
                'title': value.title,
                'category': value.category,
                'priority': value.priority,
                'question': value.question
            }
            axios.post(`${baseUrl}/create-discussions`, discussion)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            setValue({
                title: '',
                datecreated: '',
                category: '',
                priority: '',
                question: ''
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
            <div className="newformContainer">
                <h1> Pertanyaan baru</h1>
                <form className="newformWrapper">
                    <div className="tes1">
                         <li >
                            <label className="newLabel"> Judul </label>
                            <input className="newForm" 
                            type="text"
                            name='title'
                            value={value.title}
                            onChange={handleInput}
                            required/>
                        </li>
                        <li >
                            <label className="newLabel"> Tanggal Pembuatan </label>
                            <input className="newForm" 
                            type="date"
                            name="datecreated"
                            value={value.datecreated}
                            onChange={handleInput}
                            required/>
                        </li>
                        <li >
                            <label className="newLabel">Kategori </label>
                            <select className="newForm" 
                            name='category'
                            value={value.category}
                            onChange={handleInput}
                            required>
                                <option value=" "> -Pilih Kategori Pertanyaan-</option>
                                <option value="umum"> Umum </option>
                                <option value="mahasiswa"> Mahasiswa </option>
                                <option value="dosen"> Dosen </option>
                                <option value="tendik"> Tenaga Pendidikan </option>
                                <option value="administrasi">Administrasi </option>
                                <option value="siakad"> SIAKAD </option>
                                <option value="elearning"> E-learning </option>
                            </select>
                        </li>
                        <li >
                            <label className="newLabel">Seberapa Menganggu Masalah yang Anda Hadapi?</label>
                            <select className="newForm"
                            name='priority' 
                            value={value.priority}
                            onChange={handleInput}
                            required>
                                <option value="Rendah">1</option>
                                <option value="Rendah ">2</option>
                                <option value=" Rendah">3</option>
                                <option value=" Rendah ">4</option>
                                <option value="Sedang">5</option>
                                <option value="Sedang ">6</option>
                                <option value=" Sedang">7</option>
                                <option value=" Sedang ">8</option>
                                <option value="Tinggi">9</option>
                                <option value="Tinggi ">10</option>
                            </select>
                        </li>
                        <li >
                            <label className="newLabel"> Pertanyaan </label>
                            <textarea className="newFormTanya"
                            name='question'
                            value={value.question}
                            onChange={handleInput}
                            required/>
                        </li>
                        <li className="tes2">
                            <button className="newBtn" onClick={handleSubmit}>
                                Ajukan Pertanyaan
                            </button>
                        </li>
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

export default FormTanya
