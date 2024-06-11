import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaShareAlt, FaBackward, FaPlay, FaPause, FaForward, FaRandom } from 'react-icons/fa';
import FloatAction from './FloatAction';
import Volume from './Volume';

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
  color: #161616;
  margin: 0 10px;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s;

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
  bottom: 20px;
  right: 20px;
  width: 400px;
  border-radius: 30px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const MusicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 10px;
`;

const ButtonsPlayer = styled.div`
  border: 1px solid #000000;
  border-radius: 15px;
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
        <MusicContainer>

          <Volume />

          <ButtonsPlayer>
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
          </ButtonsPlayer>

          <FloatAction />

        </MusicContainer>

        <audio ref={audioRef} src={lofiTracks[0].src} />

      </MusicPlayerContainer>
    );
  };
  
  export default Player;