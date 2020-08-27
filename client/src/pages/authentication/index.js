import React from 'react';

import { Formik } from 'formik'
import * as yup from 'yup'

const Authentication = props => {
  const isLogin = props.match.path === '/login'
  // Авторизация / Регистрация
  const pageTitle = isLogin ? 'Войти в систему' : 'Создать аккаунт'
  const btnText = isLogin ? 'Войти' : 'Создать'
  // const apiUrl = isLogin ? '/users/login' : '/users'
  // Валидация
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    email: yup.string().email('Неверный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  })
  return (
    <div className="auth-page">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="card">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                }}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={values => {
                  console.log(values)
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                  <>
                    <div className="card-content">
                      <p className="mb-5 pb-2 is-size-3 has-text-weight-light">{pageTitle}</p>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            name="name"
                            placeholder="Имя"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          {
                            touched.name &&
                            errors.name &&
                            <span className="help is-danger">{errors.name}</span>
                          }
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {
                            touched.email &&
                            errors.email &&
                            <span className="help is-danger">{errors.email}</span>
                          }
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {
                            touched.password &&
                            errors.password &&
                            <span className="help is-danger">{errors.password}</span>
                          }
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="password"
                            name="confirmPassword"
                            placeholder="Подтверждение пароля"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                          />
                          {
                            touched.confirmPassword &&
                            errors.confirmPassword &&
                            <span className="help is-danger">{errors.confirmPassword}</span>
                          }
                        </p>
                      </div>
                    </div>
                    <footer className="card-footer">
                      <div className='card-content'>
                        <div className="field">
                          <p className="control">
                            <button 
                              className="button is-primary"
                              disabled={!isValid && !dirty}
                              onClick={handleSubmit}
                            >
                              {btnText}
                            </button>
                          </p>
                        </div>
                      </div>
                    </footer>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
