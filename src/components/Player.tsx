import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaBackward, FaPlay, FaPause, FaForward, FaVolumeUp } from 'react-icons/fa';

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
    color: #bbbbbb;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s;
    padding: .6rem 1rem .3rem 1rem;
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

const MusicPlayerContainer = styled.div`
    position: absolute;
    background-color: #eeeeee;
    bottom: 80px;
    right: 0px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`;

const ButtonsPlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Estender o VolumeControl para aceitar props customizadas e aplicar estilos condicionalmente.
const VolumeControl = styled.input.attrs({ type: 'range' })<{ isVisible: boolean }>`
    position: absolute;
    bottom: 100%;
    right: 0;
    transform: rotate(-90deg);
    transform-origin: bottom right;
    width: 100px;
    margin-right: 30px;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const Player: React.FC<PlayerProps> = ({ lofiTracks, onTrackChange, onBackgroundChange }) => {
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
                <Button title="Volume" onClick={toggleVolumeControl}>
                    <FaVolumeUp size={16} />
                </Button>
                <VolumeControl
                    isVisible={isVolumeControlVisible}
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </ButtonsPlayer>

            <audio ref={audioRef} src={lofiTracks[0].src} />

        </MusicPlayerContainer>
    );
};

export default Player;
