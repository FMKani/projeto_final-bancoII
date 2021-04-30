import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';

import api from '../../services/api';


import './styles.css';


import logoImg from '../../assets/logo.png';
import dev from '../../assets/dev.png';

export default function Login() {
  const [
    numMatricula,
    setNumMatricula
  ] = useState('');

  const history = useHistory();


  async function handleEgresso(e) {
    e.preventDefault();


    try {
      alert(await (await api.get(`usuario/${numMatricula}`)).statusText)
      await api.get(`usuario/${numMatricula}`);
      //alert('Cadastro feito');
      history.push(`curriculo/${numMatricula}`);
    } catch (err) {
      alert('Ops! Verifique as informações e tente novamente');
    }
  }

  function search() {
    history.push('/egressos');
  }

  return (
    <div className="logon-container">

      <button onClick={search} className="bt_search" type="button">
        <BsSearch size={19} color="#0e3746" />
      </button>

      <section className="form">
        <img src={logoImg} alt="ads-cz" />



        <form onSubmit={handleEgresso} >
          <h1>Login</h1>
          <input type="text" placeholder="Matricula"
            value={numMatricula}
            onChange={e => setNumMatricula(e.target.value)} />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/adm">
            <FiLogIn />
                Acesso Restrito
              </Link>

        </form>

      </section>

      <img src={dev} alt="programador" />
    </div>
  )
}