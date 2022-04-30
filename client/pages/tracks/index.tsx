import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {

    const router = useRouter()
    const tracks:ITrack[] = [
        {_id:'1', artist:'Artist1', audio: 'http://localhost:5000/audio/1111.mp3', listenings: 5, picture: 'http://localhost:5000/image/1111.jpg', comments: [], name: 'track1', text: 'lyrics1'},
        {_id:'2', artist:'Artist2', audio: 'http://localhost:5000/audio/2222.mp3', listenings: 10, picture: 'http://localhost:5000/image/2222.jpg', comments: [], name: 'track2', text: 'lyrics2'},
        {_id:'3', artist:'Artist3', audio: 'http://localhost:5000/audio/3333.mp3', listenings: 11, picture: 'http://localhost:5000/image/3333.jpg', comments: [], name: 'track3', text: 'lyrics3'},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;