import { ThemeConsumer } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button className='button-logout' onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</button>;
      }}
    </ThemeConsumer>
  );
}

ToggleTheme.propTypes = {
    theme: PropTypes.string,
    toggleTheme: PropTypes.func,
}
 
export default ToggleTheme;