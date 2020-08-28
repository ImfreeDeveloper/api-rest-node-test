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
                  if (!values.username) {
                    errors.username = 'Заполни username блэээээт'
                  }
                  if (!values.email) {
                    errors.email = 'Заполни email блэээээт';
                    //eslint-disable-next-line
                  } else if (!values.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
                    errors.email = "Нормально делай email да"
                  }
                  if (!values.password) {
                    errors.password = 'Заполни password блэээээт'
                  }
                  if (!values.confirmPassword) {
                    errors.confirmPassword = 'Заполни confirmPassword блэээээт'
                  } else if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = 'Не совпадалово'
                  }
                  if (!values.acceptTerms) {
                    errors.acceptTerms = 'Соглайшайся епрст'
                  }
                  return errors
                }}
              >
                {({ handleSubmit, submitting }) => (
                  <>
                    <div className="card-content">
                      <p className="mb-5 pb-2 is-size-3 has-text-weight-light">{pageTitle}</p>
                      <Field name="username">
                        {({ input, meta }) => (
                          <div className="field">
                            <p className="control">
                              <input
                                {...input}
                                type="text"
                                className={`input${(meta.error && meta.touched ? ' is-danger' : '')}`}
                                placeholder="Имя"
                              />
                              {meta.error && meta.touched && <span className="help is-danger">{meta.error}</span>}
                            </p>
                          </div>
                        )}
                      </Field>
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
                      <Field name="confirmPassword">
                        {({ input, meta }) => (
                          <div className="field">
                            <p className="control">
                              <input
                                {...input}
                                type="password"
                                className={`input${(meta.error && meta.touched ? ' is-danger' : '')}`}
                                placeholder="Подтверждение пароля"
                              />
                              {meta.error && meta.touched && <span className="help is-danger">{meta.error}</span>}
                            </p>
                          </div>
                        )}
                      </Field>
                      <Field name="acceptTerms" type="checkbox">
                        {({ input, meta }) => (
                          <div className="field">
                            <p className="control">
                              <label className="checkbox">
                                <input
                                  {...input}
                                  className={meta.error && meta.touched ? 'is-danger' : ''}
                                />&nbsp;Согласен чё
                              </label>
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
