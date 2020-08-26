import React from 'react';

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
              <div className="card-content">
                <p className="mb-5 pb-2 is-size-3 has-text-weight-light">{pageTitle}</p>
                <div className="field">
                  <p className="control">
                    <input className="input" type="email" placeholder="Email" />
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <input className="input" type="password" placeholder="Password" />
                  </p>
                </div>
              </div>
              <footer className="card-footer">
                <div className='card-content'>
                  <div className="field">
                    <p className="control">
                      <button className="button is-primary">
                        {btnText}
                      </button>
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
