import React from "react";
import { FiArchive, FiArrowUp} from 'react-icons/fi';
import PropTypes from 'prop-types';

function ArchiveButton({ id, onArchive, onActive, archived }) {
  return (
    <button className="action" onClick={archived ? ()=>onActive(id) : () => onArchive(id) }>
      {archived ? <FiArrowUp/> : <FiArchive/>}
    </button>
  );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
    onActive: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;