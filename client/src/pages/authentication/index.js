import React from 'react'

import { Form, Field } from 'react-final-form'

const Authentication = props => {
  const isLogin = props.match.path === '/login'
  // Авторизация / Регистрация
  const pageTitle = isLogin ? 'Войти в систему' : 'Создать аккаунт'
  const btnText = isLogin ? 'Войти' : 'Создать'
  // const apiUrl = isLogin ? '/users/login' : '/users'
  return (
    <div className="auth-page">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="card">
              <Form
                onSubmit={values => {
                  console.log(values)
                }}
                validate={values => {
                  const errors = {}
                  if (!values.email) {
                    errors.email = 'email обязательный';
                    //eslint-disable-next-line
                  } else if (!values.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
                    errors.email = "некорректный email"
                  }
                  if (!values.password) {
                    errors.password = 'Пароль обязательный'
                  }
                  return errors
                }}
              >
                {({ handleSubmit, submitting }) => (
                  <>
                    <div className="card-content">
                      <p className="mb-5 pb-2 is-size-3 has-text-weight-light">{pageTitle}</p>
                      <Field name="email">
                        {({ input, meta }) => (
                          <div className="field">
                            <p className="control">
                              <input
                                {...input}
                                type="email"
                                className={`input${(meta.error && meta.touched ? ' is-danger' : '')}`}
                                placeholder="Email"
                              />
                              {meta.error && meta.touched && <span className="help is-danger">{meta.error}</span>}
                            </p>
                          </div>
                        )}
                      </Field>
                      <Field name="password">
                        {({ input, meta }) => (
                          <div className="field">
                            <p className="control">
                              <input
                                {...input}
                                type="password"
                                className={`input${(meta.error && meta.touched ? ' is-danger' : '')}`}
                                placeholder="Пароль"
                              />
                              {meta.error && meta.touched && <span className="help is-danger">{meta.error}</span>}
                            </p>
                          </div>
                        )}
                      </Field>
                    </div>
                    <footer className="card-footer">
                      <div className='card-content'>
                        <div className="field">
                          <p className="control">
                            <button
                              className="button is-primary"
                              disabled={submitting}
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
