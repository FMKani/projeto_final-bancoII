import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../../public/logo.png';
import dev from '../../../public/dev.png';


export default function Login() {
  const [
    cadastroNumber,
    setCadastroNumber
  ] = useState('');

  const history = useHistory();


  async function handleEgresso(e) {
    e.preventDefault();


    try {
      alert(await (await api.get(`user/${cadastroNumber}`)).statusText)
      await api.get(`user/${cadastroNumber}`);
      history.push(`data/${cadastroNumber}`);

    } catch (err) {
      alert('Ops! Há algo errado');
    }
  }

  function search() {
    history.push('/egressos');
  }

  return (
    <div className="Homelogin">

      <button onClick={search} className="search" type="button">
        <BsSearch size={19} color="#0e3746" />
      </button>

      <section className="form">
        <img src={logoImg} alt="ads-cz" />



        <form onSubmit={handleAluno} >
          <h1>Faça seu Login</h1>
          <input type="text" placeholder="matricula"
            value={matricula}
            onChange={e => setMatricula(e.target.value)} />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/adm">
            <FiLogIn />
                Você um administrador? Entre aqui!!
              </Link>

        </form>

      </section>

      <img src={dev} alt="programador" />
    </div>
  )
}