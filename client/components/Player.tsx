import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import {Grid} from "@mui/material";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const track: ITrack = {_id:'1', artist:'Artist1', audio: 'http://localhost:5000/audio/1111.mp3', listenings: 5, picture: 'http://localhost:5000/image/1111.jpg', comments: [{_id: '1', username: 'Gorbik', text: 'OLOLO'}], name: 'track1', text: 'lyrics1'}
    const active = false
    return (
        <div className={styles.player}>
            <IconButton onClick={(e) => e.stopPropagation()}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction={'column'} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
        </div>
    );
};

export default Player;