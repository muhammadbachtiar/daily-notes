import React from 'react';
import { FiDelete } from 'react-icons/fi';
import PropTypes from 'prop-types';

 
function DeleteButton({ id, onDelete }) {
  return <button className='action' onClick={() => onDelete(id)}><FiDelete/></button>
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
 
export default DeleteButton;