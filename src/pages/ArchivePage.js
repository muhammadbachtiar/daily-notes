import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import { getArchivedNotes } from '../utils/api';
import { LocaleConsumer } from '../contexts/LocaleContext';

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class ArchivePage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            notes: [],
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
      const { data } = await getArchivedNotes();
      
      this.setState(() => {
        return {
          notes: data
        }
      })
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });
        this.props.keywordChange(keyword);
    }

    render() {
        const notesArchive = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
              this.state.keyword.toLowerCase()
            );
          });

        return (
          <LocaleConsumer>
            {
              ({ locale }) => {
                return (
                  <>
                    <div className="app-container">
                      <h2>{locale === 'id' ? 'Daftar Catatan Harian Arsip' : 'Archived Daily Notes List'}</h2>
                      <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                      <NoteList notes={notesArchive} />
                    </div>
                  </>
                )
              }
            }
          </LocaleConsumer>
        )
    }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;