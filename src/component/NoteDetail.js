import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import ActionButton from './ActionButtonItem';

function NoteDetail({ id, title, createdAt, body, onDelete, onArchive, archived, onActive }) {
  return (
    <div className='detail-page'>
      <h2 className='detail-page__title'>{title}</h2>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <ActionButton 
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onActive={onActive}
        archived={archived}
        />
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onActive: PropTypes.func,
  archived: PropTypes.bool,
};

export default NoteDetail;
