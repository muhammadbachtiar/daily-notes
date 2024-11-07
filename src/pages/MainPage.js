import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../utils/api';
import { LocaleConsumer } from '../contexts/LocaleContext';

function MainPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <MainPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class MainPage extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            notes: [],
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    async componentDidMount() {
      const { data } = await getActiveNotes();
      
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
        const notesActive = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
              this.state.keyword.toLowerCase()
            );
          });

        return (
          <LocaleConsumer>
            {
              ({locale}) => {
                return (
                 <>
                  <div className="app-container">
                    <h2>{locale === 'id' ? 'Daftar Catatan Harian Aktif' : 'Active Daily Notes List'}</h2>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <NoteList notes={notesActive} />
                  </div>
                 </>
                )
              }
            }
          </LocaleConsumer>
        )
    }
}

MainPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default MainPageWrapper;