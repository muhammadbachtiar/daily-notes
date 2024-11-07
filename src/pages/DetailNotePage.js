import React from 'react';
import NoteDetail from '../component/NoteDetail';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote, getActiveNotes, archiveNote, unarchiveNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function DetailPageWrapper() {  
  const navigate = useNavigate();      
  const { id } = useParams();
  return <DetailPage id= {id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),  
      note: '',
      
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
 }

  
 async onDeleteHandler(id) {
   await deleteNote(id);
    this.props.navigate('/');
  }

  async onArchiveHandler(id) {
   await archiveNote(id);
    this.props.navigate('/')
  }

  async onUnArchiveHandler(id) {
   await unarchiveNote(id);
    this.props.navigate('/')
  }

  async componentDidMount() {
    console.log(this.state.note)
    const { data } = await getNote(this.props.id);
    
    this.setState(() => {
      return {
        note: data
      };
    });
  }

  render() {

    if (this.state.note === '') {
      return <></>;
    }

    if (this.state.note === null) {
      return <p>Halaman tidak ditemukan</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} 
                    onDelete={this.onDeleteHandler}    
                    onArchive={this.onArchiveHandler} 
                    onActive={this.onUnArchiveHandler}
                    />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,

};

export default DetailPageWrapper;