// src/app/peer/peer.tsx
"use client"

import { useEffect, useRef, useState } from 'react';
 
const PeerPage = () => {
  const myVideoRef = useRef<HTMLVideoElement>(null);

  const [myUniqueId, setMyUniqueId] = useState<string>("");

  const generateRandomString = () => Math.random().toString(36).substring(2);

  useEffect(() => {
        if (typeof window !== 'undefined') { 
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

  //  Here, when the component is mounted for the first time, 
  //  we assign a random ID to our state myId.
  useEffect(() => {
    setMyUniqueId(generateRandomString);
  }, [])

  return (
    <div className='flex flex-col justify-center items-center p-12'>
      <p>your id : {myUniqueId}</p>
      <video className='w-72' playsInline ref={myVideoRef} autoPlay />
    </div>
  );
};

export default PeerPage;