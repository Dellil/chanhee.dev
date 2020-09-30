import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles, { theme } from './GlobalStyles';
import { Header } from './components';
import { Home } from './components/pages';

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
