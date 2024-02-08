import { useSound } from 'use-sound';
import { useEffect } from 'react';

const AudioPlayer = () => {
  const [play,{stop}] = useSound('/song1.mp3', { autoplay: true });

  useEffect(() => {
    play();
    //setTimeout(() => stop(),[60000])
    //return () => clearTimeout();
  }, [play]);

  return null; // This component doesn't render anything visible
};

export default AudioPlayer;