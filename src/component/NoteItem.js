import React from 'react';
import NoteItemBody from './NoteItemBody';
import PropTypes from 'prop-types';

function NoteItem ({id, title, body, createdAt}) {
    return(
        <div>
            <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteItem;