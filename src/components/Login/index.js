import React, { useState }from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton,} from './LoginElements';
import { baseUrl} from '../../config'
import axios from 'axios';

const Login = () => {
    const token = localStorage.getItem("token");
    const history = useHistory()
    const [value, setValue] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e) => {
        const value = e.target.value;
        console.log(e.target.name)
        setValue((prev)=>({
            ...prev,
            [e.target.name]: value
            
        }));
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            'password': value.password,
            'username': value.username
          }
        console.log(user)
          axios.post(`${baseUrl}/login`, user)
            .then(res => {
              console.log(res)
              console.log(res.data)
      
              if(res.data.auth === false){
                alert('username atau password salah')
                setValue({
                  username: '',
                  password: ''
                })
              }
              else{
                const {token, role, username, major} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('username', username)
                localStorage.setItem('role', role)
                localStorage.setItem('major', major)
                if(role === 'user') {
                    history.push('/')
                }
                else {
                    history.push('/home')
                }
                
              }
          })
      
    }
    console.log(value)
    return (
        <Container>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormH1> Login </FormH1>
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
                        <FormLabel>
                        <Link to="/registerUser">
                            Don't have an account? register here
                        </Link>
                        </FormLabel>
                        <FormButton type="submit">Login</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Login
