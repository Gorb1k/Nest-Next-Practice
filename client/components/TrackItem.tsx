import {FC} from 'react';
import {ITrack} from "../types/track";
import styles from '../styles/TrackItem.module.scss'
import {Card, Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";

interface TrackItemProps {
    track: ITrack
    pause?:boolean
}

const TrackItem:FC<TrackItemProps> = ({track, pause}) => {

    const router = useRouter()
    const {setActiveTrack, playTrack, pauseTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()

    }
    return (
        <Card className={styles.track} onClick={() => router.push('tracks/'+ track._id)}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <img width={70} height={70} src={track.picture}/>
            <Grid container direction={'column'} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {pause && <div>
                02:42/03:33
            </div>}
            <IconButton onClick={(e) => e.stopPropagation()} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;