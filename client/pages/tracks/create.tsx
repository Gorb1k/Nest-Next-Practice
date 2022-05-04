import React, {useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Button, Card, Grid, TextField} from "@mui/material";
import StepWrapper from "../../components/StepWrapper";
import FileUpload from "../../components/FileUpload";
import {useInput} from "../../hooks/useInput";
import axios from "axios";

import {useRouter} from "next/router";

const Create = () => {

    const router = useRouter()
    const [activeStep, setActiveStep] = useState<number>(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('artist', artist.value)
            formData.append('text', text.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            console.log(formData)
            axios.post('http://localhost:5000/track', formData)
                .then(resp => {
                    console.log(resp)
                    router.push('/tracks')
                })
                .catch((e) => console.log(e))
        }
    }
    const back = () => {
        setActiveStep((prev) => prev - 1)
    }
    let step
    switch(activeStep){
        case 0:
            step = <Grid container flexDirection={'column'} style={{padding:20}}>
                <TextField {...name} style={{marginTop: 10}} label={'Track name'}/>
                <TextField {...artist} style={{marginTop: 10}} label={'Artist'}/>
                <TextField {...text} style={{marginTop: 10}} label={'Lyrics'} multiline rows={3}/>
            </Grid>
            break
        case 1:
            step = <FileUpload setFile={setPicture} accept={'image/*'}>
                <Button>Upload an image</Button>
            </FileUpload>
            break
        case 2:
            step = <FileUpload setFile={setAudio} accept={'audio/*'}>
                <Button>Upload an audio</Button>
            </FileUpload>
            break
        default:
            step = <h1>Some Error</h1>
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {step}
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;