/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import Modal from '../Modal'
import Form from '../../pages/Main/components/Form'
import logo from '../../assets/img/logo.png'

export default function Header () {
  const [isModalShown, setIsModalShown] = useState(false)

  const history = useHistory()

  const userId = localStorage.getItem('user_id')

  return (
    <>
      <Modal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}>
        <Form />
      </Modal>

      <header id="header-home">
        <div className="navbar">
          <img src={logo} alt="Logo" title="Doar e Amar" />

          <nav role="navigation">
            {userId ? (
              <>
                <Link className="nav-link" to="/dashboard">Minhas doações</Link>
                <Link className="nav-link" to="/new">Nova doação</Link>
                <Link className="nav-link" to="/dashboard">Meu perfil</Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/">Início</Link>
                <Link className="nav-link" to="/">Sobre</Link>
                <Link className="nav-link" to="/">Dúvidas frequentes</Link>
                <button
                  onClick={() => setIsModalShown(true)}
                  className="nav-link"
                  style={{
                    background: 'none',
                    border: 'none'
                  }}>Login</button>
              </>
            )}
          </nav>

          <button className="header-btn" to="/" onClick={userId ? () => {
            localStorage.clear()
            history.push('/')
          } : () => setIsModalShown(true)}>
            {userId ? 'Sair' : 'Participe'}
            <FiArrowRight size={17} color="#FFF" />
          </button>
        </div>
      </header>
    </>
  )
}
