import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/RegisterInput';
import { register } from '../utils/api';
 
function RegisterPage() {
    const navigate = useNavigate();
    
  async function onRegisterHandler(user) {
   const { error } = await register(user);
   if (!error) {
    navigate('/');
   }
  }
 
  return (
    <section className='input-register'>
      <h2>Isi data dengan benar untuk membuat akun.</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>Sudah memiliki akun? <Link to="/">Klik disini untuk Login</Link></p>
    </section>
  )
}
 
export default RegisterPage;