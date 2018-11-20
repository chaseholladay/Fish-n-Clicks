import React from 'react';
import FadeIn from '../transitions/fade-in';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'30px'} direction={'bottom'}>
            <h1>Fish-n-Clicks</h1>
        </FadeIn>
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h2>Gulf of Mexico Edition</h2>
        </FadeIn>
    </header>
)};

export default Header;