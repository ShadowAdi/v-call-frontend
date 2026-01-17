// src/app/peer/peer.tsx
"use client"

import { useEffect, useRef } from 'react';
 
const PeerPage = () => {
  const myVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
        if (typeof window !== 'undefined') { 
          //  Here, we retrieve the camera from the browser 
          //  and assign the video stream to the reference of our video tag.
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          }).then(stream => {
            if (myVideoRef.current) {
              myVideoRef.current.srcObject = stream;
            }
          });
        }
  }, []);

  return (
    <div className='flex flex-col justify-center items-center p-12'>
        <video className='w-72' playsInline ref={myVideoRef} autoPlay />
    </div>
  );
};
export default PeerPage