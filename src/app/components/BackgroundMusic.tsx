'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Set the initial muted state of the audio element itself
  useEffect(() => {
    if(audioRef.current) {
        audioRef.current.muted = true;
    }
  }, []);

  const handlePlayToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasInteracted) {
      // First interaction: try to play the audio.
      audio.play().then(() => {
        // If play is successful, set it to unmuted state.
        audio.muted = false;
        setIsMuted(false);
        setHasInteracted(true);
      }).catch(error => {
        console.error("Could not start audio playback:", error);
      });
    } else {
      // Subsequent interactions: just toggle mute.
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/calm-and-peaceful-115481.mp3" loop />
      <button
        onClick={handlePlayToggle}
        className="fixed bottom-5 right-5 z-50 bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors"
        aria-label={isMuted ? "Play background music" : "Mute background music"}
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} className="text-lg" />
      </button>
    </>
  );
} 