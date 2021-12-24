import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormSelect} from './userElements';
import { baseUrl } from '../../config';
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const RegisterUser = () => {
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

    const [value, setValue] = useState ({
        ni: '',
        username: '',
        major: '',
        password: '',
        name: '',
        gender: '',
        email: '',
        phonenumber: ''
    })

    const handleInput = (e) => {
        const value = e.target.value;
        setValue((prev)=>({
            ...prev,
            [e.target.name]: value
            
        }));
    }

    const handleSubmit = (e) => {
        if(value.ni === '', value.username === '', value.password === '', value.name === '', value.gender === '', value.email === '', value.phonenumber === ''){
            alert('Masukkan data yang diperlukan terlebih dahulu')
        }
        else{
            console.log(value)
            e.preventDefault()
            const users = {
                'ni': value.ni,
                'username': value.username,
                'major': value.major,
                'password': value.password,
                'name': value.name,
                'gender': value.gender,
                'email': value.email,
                'phonenumber': value.phonenumber
            }
            axios.post(`${baseUrl}/create-user`, users)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            setValue({
                ni: '',
                username: '',
                major: '',
                password: '',
                name: '',
                gender: '',
                email: '',
                phonenumber: ''
            })
            setOpen(true)
            setTimeout(function(){
                window.location.reload()
            },
                1000);
        }
    }

    return (
        <Container>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormH1> Register </FormH1>
                        <FormLabel htmlFor='ni'>NIM</FormLabel>
                        <FormInput 
                        type='text'
                        name='ni'
                        value={value.ni}
                        onChange={handleInput}
                        required />
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <FormInput
                        type='text'
                        name='username'
                        value={value.username}
                        onChange={handleInput}
                        required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput 
                        type='password' 
                        name='password'
                        value={value.password}
                        onChange={handleInput}
                        required />
                        <FormLabel htmlFor='name'>Nama</FormLabel>
                        <FormInput 
                        type='text'
                        name='name'
                        value={value.name}
                        onChange={handleInput} 
                        required />
                        <FormLabel htmlFor='nim'>Program Studi</FormLabel>
                        <FormSelect 
                        name='major'
                        value={value.major}
                        onChange={handleInput}
                        required>
                            <option value=" "> -Pilih Program Studi- </option>
                            <option value="Informatika"> Informatika </option>
                            <option value="Sistem Informasi"> Sistem Informasi </option>
                            <option value="D-3 Sistem Informasi"> D-3 Sistem Informasi </option>
                        </FormSelect>
                        <FormLabel htmlFor='nim'>Jenis Kelamin</FormLabel>
                        <FormSelect 
                        name='gender'
                        value={value.gender}
                        onChange={handleInput}
                        required>
                            <option value=" "> -Pilih Jenis Kelamin- </option>
                            <option value="laki-laki"> Laki-Laki </option>
                            <option value="perempuan"> Perempuan </option>
                        </FormSelect>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput 
                        type='text'
                        name='email'
                        value={value.email}
                        onChange={handleInput}
                        required />
                        <FormLabel htmlFor='noHandphone'>No Handphone</FormLabel>
                        <FormInput 
                        type='text'
                        name='phonenumber'
                        value={value.phonenumber}
                        onChange={handleInput}
                        required />
                        <FormButton type='submit'>Register</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Your account successfully added!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default RegisterUser