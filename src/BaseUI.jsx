import React, {useState} from 'react';
import './BaseUI.css';
import {SocialIcon} from 'react-social-icons';
import Nav from './Nav';
import Content from './content/Content';

const BaseUI = props => {
    const [tab, setTab] = useState('About Me');
    const [openNav, setopenNav] = useState(true);
    return (
        <>
            <div style={{padding:'20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', width: '40%', height: '160px'}}>
                <div className="avatar">
                </div>
                <div style={{paddingTop: '30px'}}>
                    <p className="name">Jacob Ryans</p>
                    <p className="jTitle">Full Stack Developer</p>
                </div>
            </div>
            <div style={{width: '85%', paddingLeft: !openNav ? '11%' : '18%', paddingRight: !openNav ? '5%' : '0%'}}>
                <Content tab={tab}/>
            </div>
            <Nav setTab={setTab} setopenNav={setopenNav} openNav={openNav}/>
            <div style={{width: '10%', padding: '20px', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', position: 'absolute', top: '200px', left: '0px'}}>
                <div style={{ }}>
                    <SocialIcon className="social" style={{padding: '40px', margin: '10px'}} url="https://www.linkedin.com/in/jacob-ryans-a30379144/" />
                </div>
                <div style={{ }}>
                    <SocialIcon className="social" style={{padding: '40px', margin: '10px'}} url="https://github.com/jacobryans" />
                </div>
                <div style={{ }}>
                    <SocialIcon className="social" style={{padding: '40px', margin: '10px'}} url="https://twitter.com/JacobRRyans" />
                </div>
            </div>
        </>
    );
}

export default BaseUI;
