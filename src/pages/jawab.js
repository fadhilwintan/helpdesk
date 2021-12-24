import React, { useState, useEffect } from 'react'
import './jawab.css'
import HeroSection from '../components/HeroSection'
import NavbarAdmin from '../components/NavbarAdmin'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../config'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Jawab = ({match}) => {
    const {params: {id}} = match
    const history = useHistory()

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

    const [items, setItems] = useState([])
    useEffect (() => {
        axios.get(`${baseUrl}/discussions`)
        .then((res) => {
            const items = res.data.data
            console.log(res)
            setItems(items)
        })
    }, [])

    const [value, setValue] = useState({
        answer: '',
        dateanswered: ''
    })

    const handleInput = (e) => {
        const value = e.target.value;
        setValue((prev)=>({
            ...prev,
            [e.target.name]: value
            
        }));
    }

    const handleSubmit = (e) => {
        if(value.answer === ''){
            alert('Masukan jawaban terlebih dahulu')
        }
        else {
            console.log(value)
            e.preventDefault()
            const discussion = {
                'answer': value.answer,
                'dateanswered': value.dateanswered
            }
            console.log(discussion)
            axios.post(`${baseUrl}/answer-discussions/${id}`, discussion)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            setValue({
                answer: '',
                dateanswered: ''
            })
            
            // setTimeout(function(){
            //     window.location.reload()
            // },
            //     1000);
            history.push('/home')
            setOpen(true)
        }
    }

    return (
        <>
            <NavbarAdmin />
            <HeroSection />
            <h1> Jawab Pertanyaan </h1>
            <div className="jawabContainer">
            {items.map((items) => (
                items.id_question == id ?
                    <div className="jdlContainer">
                        <li className="jdlBox">
                            <h3> {items.title} </h3>
                            <p> {items.category} </p>
                            <p> {items.priority} </p>
                            <p> 
                                {items.question}
                            </p>
                        </li>
                    </div>
                :
                null
            ))}        
                    <div className="jwbContainer">
                        <form className="jwbForm">
                            <ul className="tes1">
                                <li className="jwbWrapper">
                                    <label className="jwbLabel">
                                        Jawaban
                                    </label>
                                    <textarea className="jwbTanya" 
                                    name='answer'
                                    value={value.answer}
                                    onChange={handleInput}
                                    required/>
                                </li>
                                <li >
                                    <label className="newLabel"> Tanggal Jawab </label>
                                    <input className="newForm" 
                                    type="date"
                                    name='dateanswered'
                                    value={value.dateanswered}
                                    onChange={handleInput}
                                    required/>
                                </li>
                                <li className="tes2">
                                    <button className="jwbBtn" onClick={handleSubmit}>
                                        Jawab Pertanyaan
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div> 
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Your question successfully asnwered!
                    </Alert>
                </Snackbar>               
            </div>                
        </>
    )
}

export default Jawab
