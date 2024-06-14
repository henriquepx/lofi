import { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaMusic, FaFire, FaTree, FaWalking, FaCloudRain, FaUserFriends, FaSubway } from "react-icons/fa";
import GlobalStyles from '../styles/GlobalStyles';
import { BackgroundColorContext } from '../context/BackgroundColorContext';

import firesound from '../assets/audios/fire.mp3';
import footstepsond from '../assets/audios/footstep.mp3';
import naturesound from '../assets/audios/nature.mp3';
import peoplesond from '../assets/audios/people.mp3';
import rainsound from '../assets/audios/rain.mp3';
import subwaysond from '../assets/audios/subway.mp3';

interface SongsContainerProps {
  isOpen: boolean;
  themeColor: string;
}

const SongsContainer = styled.div<SongsContainerProps>`
  position: absolute;
  width: 35px;
  height: 50px;
  right: ${props => props.isOpen ? '220px' : '-5px'};
  top: 170px;
  background-color: ${props => props.themeColor};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center; 
  transition: right 0.3s ease-in-out; 
  z-index: 5;
  svg {
    margin-right: 10px;
  }
`;

const SongContent = styled.div<SongsContainerProps>`
  position: absolute;
  right: ${props => props.isOpen ? '0px' : '-250px'}; 
  top: 170px;
  width: auto; 
  height: auto;
  background-color: ${props => props.themeColor};
  transition: right 0.3s ease-in-out; 
  z-index: 5;
  border-bottom-left-radius: 15px;
  padding: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; 
`;

const SongTitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: .8rem;
  margin-bottom: 10px;
`;

const AudioItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
  .audio-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .audio-player {
    display: none; 
  }
`;

const AudioLabel = styled.span`
  margin-left: 10px;
  font-size: 0.8rem;
  font-family: 'Roboto Mono', monospace;
`;

const VolumeControl = styled.input.attrs({ type: 'range' })`
  margin-left: 10px;
  width: 100px;
`;

const Song = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { backgroundColor } = useContext(BackgroundColorContext);
  
  const fireAudioRef = useRef<HTMLAudioElement>(null);
  const walkingAudioRef = useRef<HTMLAudioElement>(null);
  const natureAudioRef = useRef<HTMLAudioElement>(null);
  const peopleAudioRef = useRef<HTMLAudioElement>(null);
  const rainAudioRef = useRef<HTMLAudioElement>(null);
  const subwayAudioRef = useRef<HTMLAudioElement>(null);

  const [fireVolume, setFireVolume] = useState(0);
  const [walkingVolume, setWalkingVolume] = useState(0);
  const [natureVolume, setNatureVolume] = useState(0);
  const [peopleVolume, setPeopleVolume] = useState(0);
  const [rainVolume, setRainVolume] = useState(0);
  const [subwayVolume, setSubwayVolume] = useState(0);

  const toggleSongs = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const setVolumeAndPlay = (audioRef: React.RefObject<HTMLAudioElement>, volume: number) => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        if (volume > 0) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    };

    setVolumeAndPlay(fireAudioRef, fireVolume);
    setVolumeAndPlay(walkingAudioRef, walkingVolume);
    setVolumeAndPlay(natureAudioRef, natureVolume);
    setVolumeAndPlay(peopleAudioRef, peopleVolume);
    setVolumeAndPlay(rainAudioRef, rainVolume);
    setVolumeAndPlay(subwayAudioRef, subwayVolume);

  }, [fireVolume, walkingVolume, natureVolume, peopleVolume, rainVolume, subwayVolume]);

  return (
    <>
      <GlobalStyles backgroundColor={backgroundColor} />
      <SongsContainer onClick={toggleSongs} isOpen={isOpen} themeColor={backgroundColor}>
        <FaMusic size={14} />
      </SongsContainer>
      <SongContent isOpen={isOpen} themeColor={backgroundColor}>
        <SongTitle>songs (enjoy):</SongTitle>

        <AudioItem>
          <FaFire size={20} color="#e25822" />
          <AudioLabel>Fire</AudioLabel>
          <div className="audio-controls">
            <audio ref={fireAudioRef} className="audio-player" loop>
              <source src={firesound} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <VolumeControl
              min="0"
              max="1"
              step="0.01"
              value={fireVolume}
              onChange={(e) => setFireVolume(Number(e.target.value))}
            />
          </div>
        </AudioItem>

        <AudioItem>
          <FaWalking size={20} color="#8b4513" />
          <AudioLabel>Walking</AudioLabel>
          <div className="audio-controls">
            <audio ref={walkingAudioRef} className="audio-player" loop>
              <source src={footstepsond} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <VolumeControl
              min="0"
              max="1"
              step="0.01"
              value={walkingVolume}
              onChange={(e) => setWalkingVolume(Number(e.target.value))}
            />
          </div>
        </AudioItem>

        <AudioItem>
          <FaTree size={20} color="#228b22" />
          <AudioLabel>Nature</AudioLabel>
          <div className="audio-controls">
            <audio ref={natureAudioRef} className="audio-player" loop>
              <source src={naturesound} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <VolumeControl
              min="0"
              max="1"
              step="0.01"
              value={natureVolume}
              onChange={(e) => setNatureVolume(Number(e.target.value))}
            />
          </div>
        </AudioItem>

        <AudioItem>
          <FaUserFriends size={20} color="#708090" />
          <AudioLabel>People</AudioLabel>
          <div className="audio-controls">
            <audio ref={peopleAudioRef} className="audio-player" loop>
              <source src={peoplesond} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <VolumeControl
              min="0"
              max="1"
              step="0.01"
              value={peopleVolume}
              onChange={(e) => setPeopleVolume(Number(e.target.value))}
            />
          </div>
        </AudioItem>

        <AudioItem>
          <FaCloudRain size={20} color="#1e90ff" />
          <AudioLabel>Rain</AudioLabel>
          <div className="audio-controls">
            <audio ref={rainAudioRef} className="audio-player" loop>
              <source src={rainsound} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <VolumeControl
              min="0"
              max="1"
              step="0.01"
              value={rainVolume}
              onChange={(e) => setRainVolume(Number(e.target.value))}
            />
          </div>
        </AudioItem>

        <AudioItem>
          <FaSubway size={20} color="#808080" />
          <AudioLabel>Subway</AudioLabel>
          <div className="audio-controls">
            <audio ref={subwayAudioRef} className="audio-player" loop>
              <source src={subwaysond} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <VolumeControl
              min="0"
              max="1"
              step="0.01"
              value={subwayVolume}
              onChange={(e) => setSubwayVolume(Number(e.target.value))}
            />
          </div>
        </AudioItem>

      </SongContent>
    </>
  );
};

export default Song;
