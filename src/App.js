import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import './App.css';
import {Navbar} from "./components/Navbar";
import SignIn from "./pages/Auth/Login";
import theme from './theme';
import { createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./pages/Auth/Registration";
import {Home} from "./pages/Home";
import {PostState} from "./context/post/postState";

const customTheme = createMuiTheme({...theme});

class App extends Component {

   render() {
       return (
           <PostState>
               <ThemeProvider theme={customTheme}>
                   <BrowserRouter>
                       <Navbar/>
                       <Switch>
                           <Route path="/home" exact component={Home}/>
                           <Route path="/" exact component={SignIn}/>
                           <Route path="/registration" exact component={SignUp}/>
                       </Switch>
                   </BrowserRouter>
               </ThemeProvider>
           </PostState>
       );
   }
}

export default App;
