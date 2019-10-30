import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';

const Content = props => {
    return (
        <>
            {props.tab === "About Me" ? <About /> : null}
            {props.tab === "Projects" ? <Projects /> : null}
            {props.tab === "Skills" ? <Skills /> : null}
            {props.tab === "Experience" ? <Experience /> : null}
        </>
    );
}

export default Content