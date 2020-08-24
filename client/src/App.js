import React from 'react'

import 'bulma/css/bulma.min.css'

function App() {
  return (
    <>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation" >
        <div class="navbar-brand">
          <a class="navbar-item is-size-3" href="https://bulma.io">
            Newborn
          </a>
        </div>
        <div className='navbar-menu'>
          <div class="navbar-end ">
            <a class="navbar-item">Регистрация</a>
            <a class="navbar-item">Вход</a>
          </div>
        </div>
      </nav>
        {/* <div className="auth-block">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Войти в систему</span>
            <div className="input-field">
              <input id="email" type="email" required />
              <label for="email">Email:</label>
            </div>
              <div className="input-field">
                <input id="password" type="password" required />
                <label for="password">Пароль:</label>
            </div>
              </div>
              <div className="card-action">
                <button className="btn waves-light waves-effect">Войти</button>
              </div>
            </div>
          </div> */}
    </>
  )
}

export default App
