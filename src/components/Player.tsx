import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaShareAlt, FaBackward, FaPlay, FaPause, FaForward, FaRandom } from 'react-icons/fa';

interface LofiTrack {
    src: string;
    wallpaperIndex: number;
}

interface PlayerProps {
  lofiTracks: LofiTrack[];
  onTrackChange: (trackIndex: number) => void;
  onBackgroundChange: (wallpaperIndex: number) => void;
}

const Button = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  margin: 0 10px;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #11cafd;
  }

  &:focus {
    outline: none;
  }
`;

const MusicPlayerContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: #161616;
  border-top-right-radius: 15px;
  bottom: 0;
  padding: 0rem 1.3rem;
`;

const MusicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const Player: React.FC<PlayerProps> = ({ lofiTracks, onTrackChange, onBackgroundChange }) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(new Audio());
    const currentTrackIndexRef = useRef<number>(0);
  
    const togglePlayPause = (): void => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const playNextTrack = (): void => {
      const nextTrackIndex = (currentTrackIndexRef.current + 1) % lofiTracks.length;
      currentTrackIndexRef.current = nextTrackIndex;
      onTrackChange(nextTrackIndex);
      onBackgroundChange(lofiTracks[nextTrackIndex].wallpaperIndex);
      audioRef.current.src = lofiTracks[nextTrackIndex].src;
      audioRef.current.play();
      setIsPlaying(true);
    };
  
    const playPreviousTrack = (): void => {
      let previousTrackIndex = currentTrackIndexRef.current - 1;
      if (previousTrackIndex < 0) {
        previousTrackIndex = lofiTracks.length - 1;
      }
      currentTrackIndexRef.current = previousTrackIndex;
      onTrackChange(previousTrackIndex);
      onBackgroundChange(lofiTracks[previousTrackIndex].wallpaperIndex);
      audioRef.current.src = lofiTracks[previousTrackIndex].src;
      audioRef.current.play();
      setIsPlaying(true);
    };
  
    return (
      <MusicPlayerContainer>
        <MusicContainer>
          <Button title="Compartilhar">
            <FaShareAlt size={14} />
          </Button>
          <Button title="Voltar" onClick={playPreviousTrack}>
            <FaBackward size={22} />
          </Button>
          <Button title={isPlaying ? "Pausar" : "Tocar"} onClick={togglePlayPause}>
            {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
          </Button>
          <Button title="Próxima" onClick={playNextTrack}>
            <FaForward size={22} />
          </Button>
          <Button title="Aleatória">
            <FaRandom size={14} />
          </Button>
        </MusicContainer>
        <audio ref={audioRef} src={lofiTracks[0].src} />
      </MusicPlayerContainer>
    );
  };
  
  export default Player;