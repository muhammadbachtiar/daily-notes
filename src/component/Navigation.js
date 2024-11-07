import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToogleTheme';
import { LocaleConsumer } from '../contexts/LocaleContext';
import { FiLogOut } from 'react-icons/fi';

function Navigation({ logout, name}) {
  return (
    <LocaleConsumer>
      {
        ({ locale, toggleLocale }) => {
          return (
            <nav className='navigation'>
              <ul>
                <li><Link to="/notes/archive">{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</Link></li> 
                <li><Link to="/notes/tambah">{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</Link></li> 
                <li><button className='button-logout' onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                <li><ToggleTheme /></li>
                <li><button className='button-logout' onClick={logout} >{name} <FiLogOut /></button></li>
              </ul> 
            </nav>
          )
        }
      }
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;