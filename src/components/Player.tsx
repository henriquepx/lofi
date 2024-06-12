import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaBackward, FaPlay, FaPause, FaForward } from 'react-icons/fa';
// import FloatAction from './FloatAction';
// import Volume from './Volume';

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
  color: #161616;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
  border-right: 1px solid #161616;
  padding: .6rem 1.4rem .3rem 1.4rem;
  &:last-child {
    border-right: 0px;
  }
  &:hover {
    color: #575757;
  }
  &:focus {
    outline: none;
  }
`;
const MusicPlayerContainer = styled.div`
  position: absolute;
  background-color: #e0e0e0;
  bottom: 80px;
  right: 0px;
`;
const ButtonsPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

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

          <ButtonsPlayer>
            <Button title="Voltar" onClick={playPreviousTrack}>
              <FaBackward size={16} />
            </Button>
            <Button title={isPlaying ? "Pausar" : "Tocar"} onClick={togglePlayPause}>
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </Button>
            <Button title="Próxima" onClick={playNextTrack}>
              <FaForward size={16} />
            </Button>
          </ButtonsPlayer>

        <audio ref={audioRef} src={lofiTracks[0].src} />

      </MusicPlayerContainer>
    );
  };
  
  export default Player;