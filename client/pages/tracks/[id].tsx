import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {

    const track: ITrack = {_id:'1', artist:'Artist1', audio: 'http://localhost:5000/audio/1111.mp3', listenings: 5, picture: 'http://localhost:5000/image/1111.jpg', comments: [{_id: '1', username: 'Gorbik', text: 'OLOLO'}], name: 'track1', text: 'lyrics1'}
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                Back to the list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} alt="" width={200} height={200}/>
                <div style={{marginLeft:30}}>
                    <h1>Title - &{track.name}</h1>
                    <h2>Artist - &{track.artist}</h2>
                    <h2>Listenings - &{track.listenings}</h2>
                </div>
            </Grid>
            <h2>Lyrics:</h2>
            <p>{track.text}</p>
            <h2>Comments</h2>
            <Grid container>
                <TextField label={'Your name'} fullWidth/>
                <TextField label={'Comment'} fullWidth multiline rows={4}/>
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map((comment) => <div key={comment._id}>
                    <div>Author: {comment.username}</div>
                    <div>Comment: {comment.text}</div>
                </div>)}
            </div>
        </MainLayout>
    );
};

export default TrackPage;