import React from 'react'

import './styles/main.scss'

function App() {
  return (
    <>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item is-size-3" href="/#">
            Newborn
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="/#" className="navbar-item">Регистрация</a>
            <a href="/#" className="navbar-item">Вход</a>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="auth-block">
              <div className="card">
                <div className="card-content">
                  <p className="mb-5 pb-2 is-size-3 has-text-weight-light">Войти в систему</p>
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
                          Войти
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
    </>
  )
}

export default App
