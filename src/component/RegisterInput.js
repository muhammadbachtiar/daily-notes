import React from 'react';
import PropTypes from 'prop-types';

function RegisterInput({register}) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const confirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        register({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        });
    }

    return (
      <form onSubmit={onSubmitHandler} className='register-input'>
        <input type="text" placeholder="Nama" value={name} onChange={nameChangeHandler} />
        <input type="email" placeholder="Email" value={email} onChange={emailChangeHandler} />
        <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={passwordChangeHandler} />
        <input type="password" placeholder="Confirm Password" autoComplete='current-password' value={confirmPassword} onChange={confirmPasswordChange} />
        <button>Register</button>
      </form>
    );
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;