import React from 'react';

import { GlobalStyles, Container } from './globalStyled';
import Landing from './pages/Landing';

const App: React.FC = () => {
    return (
        <Container>
            <Landing />
        </Container>
    );
}

export default App;