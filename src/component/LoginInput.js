import React from 'react';
import PropTypes from 'prop-types';

function LoginInput( {login} ) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='login-input'>
            <input type="email" placeholder='Email' value={email} onChange={emailChangeHandler} />
            <input type="password" placeholder='Password' value={password} onChange={passwordChangeHandler} />
            <button>Login</button>
        </form>
    );
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;