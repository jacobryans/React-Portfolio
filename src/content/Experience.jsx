import React from 'react';
import {Typography} from '@material-ui/core';

const Experience = () => {
    return (
        <div className="experience">
            <div className="education">
                <h2 className="title">Education</h2>
                <ul>
                    <div className="school">
                        <Typography variant="h5" component="h2" color="textPrimary">Lambda School</Typography>
                        <Typography color="textSecondary">11/2018-Present</Typography>
                        <Typography variant="body2" component="p">Track - Full Stack Web Development</Typography>
                    </div>
                    <div className="school">
                        <Typography variant="h5" component="h2" color="textPrimary">Louisiana Tech University</Typography>
                        <Typography color="textSecondary">08/2016-05/2017</Typography>
                        <Typography variant="body2" component="p">Track - Computer Science w/ Software Engineering concentraction</Typography>
                    </div>
                </ul>
            </div>
            <div className="work">
                <h2 className="title">Work Experience</h2>
                <ul>
                    <div className="job">
                        <Typography variant="h5" component="h2" color="textPrimary">Team Lead - Lambda School</Typography>
                        <Typography color="textSecondary">05/2019-Present</Typography>
                        <Typography variant="body2" component="p">
                            Managed development of part-time students. This involves daily attendance, code reviews, on-call debugging assistance, and scheduling whiteboards/demos to accelerate student growth.
                        </Typography>
                    </div>
                    <div className="job">
                        <Typography variant="h5" component="h2" color="textPrimary">Manager - CPR Repair</Typography>
                        <Typography color="textSecondary">06/2018-05/2019</Typography>
                        <Typography variant="body2" component="p">
                        Managed franchise location for a hardware repair store. Involved customer intake, upselling repairs and products, management of other technicians and teaching them hardware repair standards.
                        </Typography>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Experience;