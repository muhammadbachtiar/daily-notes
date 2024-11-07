import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../component/LoginInput';
import { login } from '../utils/api';
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='input-login'>
      <h2>Silakan login untuk menggunakan aplikasi</h2>
      <LoginInput login={onLogin} />
      <p>Belum memiliki akun? <Link to="/register">Klik Disini untuk Daftar.</Link></p>
    </section>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
  login: PropTypes.func,
}
 
export default LoginPage;