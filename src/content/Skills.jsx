import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skill-column">
                <CreateIcon className="skill-icon"/>
                <h2>Front-end</h2>
                <ul>
                    <li>HTML/CSS</li>
                    <li>LESS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Material UI & Semantic UI</li>
                    <li>Reactstrap & Bootstrap</li>
                </ul>
            </div>
            <div className="skill-column">
                <StorageIcon className="skill-icon"/>
                <h2>Back-end</h2>
                <ul>
                    <li>Node.JS</li>
                    <li>Java Spring</li>
                    <li>JWT</li>
                    <li>Jasypt Encryption</li>
                    <li>SQL/NoSQL</li>
                </ul>
            </div>
            <div className="skill-column">
                <BuildIcon className="skill-icon"/>
                <h2>Other</h2>
                <ul>
                    <li>Python</li>
                    <li>Algorithms/Data Structures</li>
                    <li>Blockchain</li>
                    <li>Agile Methodologies</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;