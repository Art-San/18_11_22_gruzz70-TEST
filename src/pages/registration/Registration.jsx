import React, { useState, useEffect } from 'react'
import TextField from '../../components/TextField'
// import { Link } from 'react-router-dom'
import './registration.css'
import { validate } from '../../utils/validator'
import { validationSchema } from '../../components/validationSchema'

const registration = () => {
    const [values, setValues] = useState({
        email: '',
        link: '',
        description: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    // console.log('errors', errors)

    const isValid = Object.keys(errors).length === 0

    useEffect(() => {
        const errors = validate(values, validationSchema)
        setErrors(errors)
    }, [values])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            // отправляем только если валидно
            console.log('Отправлено!')
        }
    }
    const handleChange = (e) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const { email, link, description, password } = values

    return (
        <section>
            <div className="container registration__container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h2>Отчёт об ошибке</h2>
                        {/* <div>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                        </div> */}

                        <form onSubmit={handleSubmit}>
                            <TextField
                                id='email'
                                name='email'
                                label='Email'
                                placeholder='asava@sibmail.com'
                                value={email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            <TextField
                                id='link'
                                name='link'
                                label='Ссылка на страницу с ошибкой'
                                placeholder='https://www.google.com/'
                                value={link}
                                onChange={handleChange}
                                error={errors.link}
                            />

                            <TextField
                                id='description'
                                name='description'
                                label='Описание'
                                placeholder='Неработае кнопка'
                                value={description}
                                onChange={handleChange}
                                error={errors.description}
                            />

                            <TextField
                                id="password"
                                name="password"
                                label="Пароль"
                                value={password}
                                onChange={handleChange}
                                error={errors.password}
                                type="password"
                            />

                            <button
                                className="btn sm"
                                disabled={!isValid}
                                type="submit"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default registration

// const registration = () => {
//     const [values, setValues] = useState({
//         email: '',
//         link: '',
//         description: ''
//     })
//     console.log('values', values)
//     const handleSubmit = (e) => {
//     }
//     const handleChange = (e) => {
//         const { value, name } = e.target
//         setValues((prev) => ({
//             ...prev,
//             [name]: value
//         }))
//     }
//     const { email, link, description } = values
//     return (
//         <section>
//             <div className="container registration__container">
//                 <h2>Отчёт об ошибке</h2>

//                 <form onSubmit={handleSubmit}>
//                     <p>
//                         <label htmlFor="email">Email</label>{' '}
//                         <input
//                             id="email"
//                             name="email"
//                             value={email}
//                             onChange={handleChange}
//                         />
//                     </p>
//                     <p>
//                         <label htmlFor="link">
//                             Ссылка на страницу с ошибкой
//                         </label>{' '}
//                         <input
//                             id="link"
//                             name="link"
//                             value={link}
//                             onChange={handleChange}
//                         />
//                     </p>

//                     <p>
//                         <label htmlFor="description">Описание</label>{' '}
//                         <input
//                             id="description"
//                             name="description"
//                             value={description}
//                             onChange={handleChange}
//                         />
//                     </p>

//                     <button type="submit">Отправить</button>
//                 </form>
//             </div>
//         </section>
//     )
// }
// export default registration
