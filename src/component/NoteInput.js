import React from 'react';
import { FiPlus } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {LocaleConsumer} from '../contexts/LocaleContext';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            body: '',
            createdAt: '',
            maxChar: 50 ,
            
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.maxChar)
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state)
    }
    

    render() {
     return (
     <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <div className='add-new-page__input'>
                            <form onSubmit={this.onSubmitChangeEventHandler}>
                                <h2>{locale === 'id' ? 'Buat Catatan Harian Baru' : 'Create a New Daily Note '}</h2>
                                <p>{locale === 'id' ? 'Sisa Karakter Judul' : 'Title Characters Left'}: {this.state.maxChar - this.state.title.length}</p>
                                <input className='add-new-page__input__title' type="text" placeholder={locale === 'id' ? 'Judul Catatan' : 'Note Title'} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                                <textarea className='add-new-page__input__body' type="text" placeholder={locale === 'id' ? 'Deskripsi Catatan' : 'Note Description'} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                                <button className='add-new-page__action action' type="submit"><FiPlus/></button>
                            </form>
                        </div>
                    )
                }
            }
        </LocaleConsumer>
     )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}
 
export default NoteInput;