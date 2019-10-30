import React, {useState} from 'react';
import './content.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '50vw',
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
}));

const Projects = () => {
    const classes = useStyles();
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [modal3, setModal3] = useState(false)
    const [modal4, setModal4] = useState(false)
    const [modal5, setModal5] = useState(false)
    const [modal6, setModal6] = useState(false)

    const handleClose = id => {
        switch(id) {
            case 1:
                setModal1(false)
                return
            case 2:
                setModal2(false)
                return
            case 3:
                setModal3(false)
                return
            case 4:
                setModal4(false)
                return
            case 5:
                setModal5(false)
                return
            case 6:
                setModal6(false)
                return
        }
    }
    
    const handleOpen = id => {
        switch(id) {
            case 1:
                setModal1(true)
                return
            case 2:
                setModal2(true)
                return
            case 3:
                setModal3(true)
                return
            case 4:
                setModal4(true)
                return
            case 5:
                setModal5(true)
                return
            case 6:
                setModal6(true)
                return
        }
    }

    return (
        <div className="projects">
            <div onClick={() => handleOpen(1)} className="project-1">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal1}
                    onClose={() => handleClose(1)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={modal1}>
                    <div className={classes.paper}>
                        <h2 className="project-title">Trello-Now</h2>
                        <a style={{color: 'black'}} href="https://zeit.co/integrations/now-trello">
                            <LanguageIcon className="gh-link2"/>
                        </a>
                        <a style={{color: 'black'}} href="https://github.com/jacobryans/Zeit-Trello">
                            <GitHubIcon className="gh-link"/>
                        </a>
                        <p className="project-description">
                            The Trello-Now integration was built during the
                            Zeit 48-hour hackathon. It was built using Zeit's
                            UIHook-based system. Our team built a component-based
                            front-end using HTM tags that interfaced with the Trello API
                            using OAuth tokens.
                        </p>
                        <Typography color="textSecondary">Press 'ESC' at any time to close.</Typography>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <div onClick={() => handleOpen(2)} className="project-1">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal2}
                    closeAfterTransition
                    onClose={() => handleClose(2)}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={modal2}>
                    <div className={classes.paper}>
                    <h2 className="project-title">Gigapet</h2>
                        <a style={{color: 'black'}} href="https://gigapet-bw.netlify.com">
                            <LanguageIcon className="gh-link2"/>
                        </a>
                        <a style={{color: 'black'}} href="https://github.com/gigapets-pt-bw/Front-end">
                            <GitHubIcon className="gh-link"/>
                        </a>
                        <p className="project-description">
                            The Gigapet application was built to help parents
                            teach their children about nutritional values and dieting. 
                            This application uses React on the front-end and Node.JS on the back-end. It
                            was built during a 2 week "Build" as a front-end unit assessment
                            with Lambda School.
                        </p>
                        <Typography color="textSecondary">Press 'ESC' at any time to close.</Typography>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <div onClick={() => handleOpen(3)} className="project-1">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal3}
                    onClose={() => handleClose(3)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={modal3}>
                    <div className={classes.paper}>
                        <h2 className="project-title">Java Spring School API</h2>
                        <a style={{color: 'black'}} href="https://naught-school.herokuapp.com/">
                            <LanguageIcon className="gh-link2"/>
                        </a>
                        <a style={{color: 'black'}} href="https://github.com/jacobryans/java-schooldeploy">
                            <GitHubIcon className="gh-link"/>
                        </a>
                        <p className="project-description">
                            This API was built as a side-project for handling
                            school-related data. It was built with Java Spring and
                            incorporates Swagger UI for documentation. It has a few
                            endpoints for interfacing with Student/Course data.
                        </p>
                        <Typography color="textSecondary">Press 'ESC' at any time to close.</Typography>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <div onClick={() => handleOpen(4)} className="project-1">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal4}
                    onClose={() => handleClose(4)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={modal4}>
                    <div className={classes.paper}>
                        <h2 className="project-title">Instagram Clone</h2>
                        <a style={{color: 'black'}} href="https://www.naughtical.me/">
                            <LanguageIcon className="gh-link2"/>
                        </a>
                        <a style={{color: 'black'}} href="https://github.com/jacobryans/React-Insta-Clone">
                            <GitHubIcon className="gh-link"/>
                        </a>
                        <p className="project-description">
                            This application was built as I was learning React.
                            It's a social media UI similar to Instagram. It uses
                            basic prop-drilling and localStorage for data handling.
                        </p>
                        <Typography color="textSecondary">Press 'ESC' at any time to close.</Typography>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <div onClick={() => handleOpen(5)} className="project-1">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal5}
                    onClose={() => handleClose(5)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={modal5}>
                    <div className={classes.paper}>
                        <h2 className="project-title">Empowered Conversation</h2>
                        <a style={{color: 'black'}} href="https://empowered-convo-ui-aj.netlify.com/">
                            <LanguageIcon className="gh-link2"/>
                        </a>
                        <a style={{color: 'black'}} href="https://github.com/labs14-empowered-conversations">
                            <GitHubIcon className="gh-link"/>
                        </a>
                        <p className="project-description">
                            Empowered Conversation is an application designed
                            for sexual assault survivors to confidentialy reach
                            out to family members/trusted friends. It educates the
                            receiver and enables peer-to-peer communication
                            between the two. It was built using React and Java Spring.
                            The Java Spring implementation features PBEwithMD5andTripleDES
                            encryption for data security using Jasypt, and Twilio for sending the initial
                            message.
                        </p>
                        <Typography color="textSecondary">Press 'ESC' at any time to close.</Typography>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <div onClick={() => handleOpen(6)} className="project-1">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal6}
                    onClose={() => handleClose(6)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={modal6}>
                    <div className={classes.paper}>
                        <h2 className="project-title">Badger's Den</h2>
                        <a style={{color: 'black'}} href="https://badger-den.netlify.com/">
                            <LanguageIcon className="gh-link2"/>
                        </a>
                        <a style={{color: 'black'}} href="https://github.com/family-life-organizer">
                            <GitHubIcon className="gh-link"/>
                        </a>
                        <p className="project-description">
                            Badger's Den is a family-organization application built
                            to assist families in scheduling activites/tasks/events. It was
                            built during a 48-hour Summer Hackathon through Lambda School. It uses
                            React with MUI on the front-end and Node.JS with Sequelize on the back-end.
                        </p>
                        <Typography color="textSecondary">Press 'ESC' at any time to close.</Typography>
                    </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    );
}

export default Projects;