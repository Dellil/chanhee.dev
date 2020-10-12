import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles, { theme } from './GlobalStyles';
import { Header } from './components';
import { Home, Projects } from './components/pages';
import { useTheme } from './hooks';

function App() {
    const [browserTheme, toggleTheme] = useTheme();
    const themeStyle = browserTheme === 'light' ? theme.light : theme.dark;
    return (
        <>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyles />
                <Router>
                    <Header theme={browserTheme} toggleTheme={toggleTheme} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/projects" exact component={Projects} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
