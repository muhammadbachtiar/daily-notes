import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArchivePage from "./pages/ArchivePage";
import AddNotePage from "./pages/AddNotePage";
import { Link } from 'react-router-dom';
import Navigation from './component/Navigation';
import DetailNotePage from './pages/DetailNotePage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from './utils/api';
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import NotFound from "./pages/NotFoundPage";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
            localContext: {
                locale: localStorage.getItem('locale') || 'id',
                toggleLocale: () => {
                  this.setState((prevState) => {
                    const newLocale = prevState.localContext.locale === 'id' ? 'en' : 'id';
                    localStorage.setItem('locale', newLocale);
                    return {
                        localContext: {
                            ...prevState.localContext,
                            locale: newLocale
                        }
                    }
                  });  
                }
            },
            theme: localStorage.getItem('theme') || 'light',
            toggleTheme: () => {
                this.setState((prevState) => {
                    const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';
                    localStorage.setItem('theme', newTheme);

                    return {
                        theme: newTheme
                    };
                });
            }
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {

        document.documentElement.setAttribute('data-theme', this.state.theme);
        const { data } = await getUserLogged();
        
        this.setState(() => {
          return {
            authedUser: data,
            initializing: false
          };
        });
      }

    componentDidUpdate(prevState) {
        if (prevState.theme !== this.state.theme) {
          document.documentElement.setAttribute('data-theme', this.state.theme);
        }
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
     
        this.setState(() => {
          return {
            authedUser: data,
          };
        });
      }
    
    onLogout() {
        this.setState(() => {
          return {
            authedUser: null
          }
        });
        putAccessToken('');
    }
    
   render (){ 

    if (this.state.initializing) {
        return (
            <>
            <h1>Sedang memuat...</h1>
            </>
        )
      }
    
      
    if (this.state.authedUser === null) {
        return (
            <LocaleProvider value={this.state.localContext}>
              <div className='app-container'>
                <header>
                    <h1>Web Catatan Harian</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </main>
              </div>
            </LocaleProvider>
        );
      }
    
    return (
     <LocaleProvider value={this.state.localContext}>
        <ThemeProvider value={this.state}>
          <>
            <div className="app-container">
                 <header>
                     <h1><Link to="/">{this.state.localContext.locale === 'id' ? 'Web Catatan Harian' : 'Daily Notes App'}</Link></h1>
                     <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
                 </header>
                 <main>
                     <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/notes/archive" element={<ArchivePage />} />
                        <Route path="/notes/tambah" element={<AddNotePage />} />
                        <Route path="/notes/:id" element={<DetailNotePage />} />
                        <Route path='*' element={<NotFound />}/>
                     </Routes>
                 </main>    
             </div>
          </>
        </ThemeProvider>
     </LocaleProvider>
    )
   } 
}

export default NoteApp;