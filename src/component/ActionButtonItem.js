import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PropTypes from 'prop-types';


function ActionButton({ id, onDelete, onArchive, onActive, archived }) {
  return (
    <div className="detail-page__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} onActive={onActive} archived={archived} />
    </div>
  );
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};



export default ActionButton;