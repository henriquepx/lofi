import { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { FaBackward, FaPlay, FaPause, FaForward, FaVolumeUp } from 'react-icons/fa';
import { BackgroundColorContext } from '../context/BackgroundColorContext'; 
interface LofiTrack {
    src: string;
    wallpaperIndex: number;
}
interface MusicPlayerContentProps {
    themeColor: string;
}
interface PlayerProps {
    lofiTracks: LofiTrack[];
    onTrackChange: (trackIndex: number) => void;
    onBackgroundChange: (wallpaperIndex: number) => void;
    themeColor: string;
}

const Button = styled.button`
    background: none;
    color: #000000;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s;
    padding: .6rem .7rem .3rem .7rem;
    border-bottom-left-radius: 15px;
    &:last-child {
        border-right: 0px;
    }
    &:hover {
        color: #000000;
    }
    &:focus {
        outline: none;
    }
`;
const VolumeButtonControl = styled(Button)`
  position: relative;
`

const MusicPlayerContainer = styled.div<MusicPlayerContentProps>`
    position: absolute;
    background-color: ${props => props.themeColor};
    bottom: 80px;
    right: 0px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`;

const ButtonsPlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem 0 .7rem;
`;

const VolumeControl = styled.input.attrs({ type: 'range' })<{ isVisible: boolean }>`
    position: absolute;
    top: -130px;
    right: 13.5px;
    transform: rotate(-90deg);
    transform-origin: bottom right;
    width: 100px;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const Player: React.FC<PlayerProps> = ({ lofiTracks, onTrackChange, onBackgroundChange }) => {

    const { backgroundColor } = useContext(BackgroundColorContext);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.5);
    const [isVolumeControlVisible, setIsVolumeControlVisible] = useState<boolean>(false);
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

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const toggleVolumeControl = (): void => {
        setIsVolumeControlVisible(!isVolumeControlVisible);
    };

    return (
        <MusicPlayerContainer themeColor={backgroundColor}>
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
                <VolumeButtonControl title="Volume" onClick={toggleVolumeControl}>
                  <FaVolumeUp size={16} />
                  <VolumeControl
                      isVisible={isVolumeControlVisible}
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={handleVolumeChange}
                  />
                </VolumeButtonControl>
            </ButtonsPlayer>

            <audio ref={audioRef} src={lofiTracks[0].src} />

        </MusicPlayerContainer>
    );
};

export default Player;
