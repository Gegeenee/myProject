import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../history'

import '../login/Login.css'

const Register = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
            .then(resp => {
                const { data } = resp
                if (data) {
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
            <h1>Бүртгүүлэх</h1>
            <p>Доорх талбаруудыг бүрэн бөглөж үргэлжлүүлнэ үү</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            name="firstName"
                            className="Login-Field"
                            placeholder="Овог"
                        />
                        <ErrorMessage
                            component="span"
                            name="firstName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="lastName"
                            className="Login-Field"
                            placeholder="Нэр"
                        />
                        <ErrorMessage
                            component="span"
                            name="lastName"
                            className="Login-Error"
                        />
                    </div>
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
                            type='password'

                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Бүртгүүлэх</button>
                </Form>
            </Formik>
            <p>Бүртгэлтэй хэрэглэгч бол , <a href="/login" className="Signup-Link">энд дарж</a> нэвтэрч орно уу</p>
            </div>
        </>
    )
}

export default Register
