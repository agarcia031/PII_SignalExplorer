"use client"
import { useState } from 'react';
import BackHomeButton from '@/components/backHomeButton';
import NextButton from '@/components/nextButton';
import SoundPlayer from '@/components/soundPlayer';
import ListeSignaux from './listeSignaux';

export default function Test() {

    return (
        <div>
        <ListeSignaux/>
        {/*<SoundPlayer signal={signal} sampleRate={Fe} />*/}
        <BackHomeButton/>
        <NextButton route={"test"} />
        </div>
    );
}