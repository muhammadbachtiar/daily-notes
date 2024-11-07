import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
    
    render() {
        if(this.props.notes.length > 0 ){
            return(
                    <div className='notes-list'>
                        {this.props.notes.map((note) => (
                                <NoteItem 
                                key={note.id} 
                                id={note.id}
                                onDelete={this.props.onDelete}
                                onArchive={this.props.onArchive}
                                {...note} />
                            ))
                        }
                    </div>
            );
        }else {
            return (
                <>
                    <p className='notes-list-empty'>Daftar Catatan Kosong</p>
                </>
            ) 
        }
    }
}

NoteList.propTypes = {
    notes: PropTypes.array,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
}

export default NoteList;