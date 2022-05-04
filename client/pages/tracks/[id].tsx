import React, {useState} from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "../../hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter()
    const username = useInput('')
    const comment = useInput('')

    const addComment = async () => {
        try{
            const response = await axios.post('http://localhost:5000/track/comment', {
                username:username.value,
                text: comment.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <MainLayout
            title={'Music platform - '+ track.name + ' - ' + track.artist}
            keywords={'music, track, ' + track.name + ', ' + track.artist}
        >
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                Back to the list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/'+ track.picture} alt="" width={200} height={200}/>
                <div style={{marginLeft:30}}>
                    <h1>Title - {track.name}</h1>
                    <h2>Artist - {track.artist}</h2>
                    <h2>Listenings - {track.listenings ? track.listenings : 0}</h2>
                </div>
            </Grid>
            <h2>Lyrics:</h2>
            <p>{track.text}</p>
            <h2>Comments</h2>
            <Grid container>
                <TextField style={{marginBottom:10}} {...username} label={'Your name'} fullWidth/>
                <TextField style={{marginBottom:10}}  {...comment} label={'Comment'} fullWidth multiline rows={4}/>
                <Button onClick={addComment}>Send</Button>
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

export const getServerSideProps:GetServerSideProps = async ({params}) => {

    const response = await axios.get('http://localhost:5000/track/' + params.id)

    return {
        props: {
            serverTrack: response.data
        }
    }
}