import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3)
    },
    title: {
        paddingTop: theme.spacing(0),
        fontFamily: "Poppins, sans-serif",
        fontSize: '1rem',
    },
}));

export default function ColorsTimeline() {

    const classes = useStyles()

    return (
    <Timeline align="alternate" className={classes.root}>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>At present</TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.title}>
            <strong>Fullstack Developer</strong><br></br>
            at Elections Canada
        </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.title}>
            <strong>Frontend Developer</strong><br></br>
            at University of Ottawa
        </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.title}>
            <strong>Software Developer</strong><br></br>
            at House of Commons of Canada
        </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color="primary"/>
        </TimelineSeparator>
        <TimelineContent className={classes.title}>
        <strong>Computer Science</strong><br></br>
        at University of Ottawa</TimelineContent>
        </TimelineItem>

    </Timeline>
    );
}