import React, {FC} from 'react';

interface TrackProgressProps {
    left:number
    right:number
    onChange: (e)=>void
}

const TrackProgress:FC<TrackProgressProps> = ({left,right ,onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input type="range" min={0} max={right} value={left} onChange={onChange}/>
            <div>
                {new Date(left * 1000).toISOString().slice(14, 19)} / {new Date(right * 1000).toISOString().slice(14, 19)}
            </div>
        </div>
    );
};

export default TrackProgress;