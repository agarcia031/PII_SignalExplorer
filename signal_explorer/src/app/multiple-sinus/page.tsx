"use client"
import { useState } from 'react';
import BackHomeButton from '@/components/backHomeButton';
import NextButton from '@/components/nextButton';
import SoundPlayer from '@/components/soundPlayer';

export default function MultipleSinus() {
    return (
        <div>
            
        {/*<SoundPlayer signal={signal} sampleRate={Fe} />*/}
        <BackHomeButton/>
        <NextButton route={""} />
        </div>
    );
}