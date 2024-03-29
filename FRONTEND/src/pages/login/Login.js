import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/home')
                }else{
                    history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>  
        <div className='allComp'>
            <div className='LoginTitle'>

                <h1>Нэвтрэх</h1>
                <p>Доорх талбаруудыг бөглөж цааш үргэлжлүүлнэ үү</p>

            </div>

            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="email"
                            className="Login-Field"
                            placeholder="Цахим хаяг"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="password"
                            className="Login-Field"
                            placeholder="Нууц үг"
                            type="password"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Нэвтрэх</button>
                </Form>
            </Formik>
            <p>Шинэ хэрэглэгч бол , <a href="/register" className="Signup-Link">энд дарж</a> бүргүүлнэ үү</p>
        </div>
        </>
    )
}

export default Login
