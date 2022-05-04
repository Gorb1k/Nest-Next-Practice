import React, {ChangeEvent, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {AppDispatch, wrapper} from "../../store";
import {fetchTracks, searchTrack} from "../../store/action-creators/track";
import {useDispatch} from "react-redux";


const Index = () => {

    const router = useRouter()
    const {tracks, error} = useTypeSelector(state => state.tracks)
    const [query, setQuery] = useState<string>('')
    const [timer, setTimer] = useState(null)
    const dispatch = useDispatch<AppDispatch>()

    const search = async (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(setTimeout(async () => {
            await dispatch(await searchTrack(e.target.value))
        }, 500))

    }

    if (error) {
        return <MainLayout>
            <h1>{error}</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={'Track-list'} description={'Track-list of the most popular songs in the world'}>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TextField fullWidth value={query} onChange={search}

                    />
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const dispatch = store.dispatch
    await dispatch(await fetchTracks())
    return {
        props: {}
    }
})

