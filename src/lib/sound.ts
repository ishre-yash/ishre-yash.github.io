import { useEffect, useState, useRef } from 'react';
import { Howl } from 'howler';

interface UseSoundOptions {
  volume?: number;
  loop?: boolean;
  onload?: () => void;
}

interface UseSoundReturn {
  play: () => void;
  stop: () => void;
  pause: () => void;
  isPlaying: boolean;
  duration: number;
}

export function useSound(
  src: string | string[],
  options: UseSoundOptions = {}
): UseSoundReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const sound = new Howl({
      src,
      volume: options.volume || 1.0,
      loop: options.loop || false,
      onload: () => {
        setDuration(sound.duration() * 1000);
        if (options.onload) {
          options.onload();
        }
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
    });

    soundRef.current = sound;

    return () => {
      sound.unload();
    };
  }, [src, options]);

  const play = () => {
    soundRef.current?.play();
  };

  const stop = () => {
    soundRef.current?.stop();
  };

  const pause = () => {
    soundRef.current?.pause();
  };

  return {
    play,
    stop,
    pause,
    isPlaying,
    duration,
  };
}

export default useSound;

