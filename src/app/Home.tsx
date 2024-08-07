import React, { useState } from 'react';
import styled from 'styled-components';
import Player from '../components/Player';
import Menu from '../components/Menu'; 
import Songs from '../components/Songs';
import Info from '../components/Info';

import lofi1 from '../assets/lofis/lofi1.mp3';
import lofi2 from '../assets/lofis/lofi2.mp3';
import lofi3 from '../assets/lofis/lofi3.mp3';
import lofi4 from '../assets/lofis/lofi4.mp3';
import lofi5 from '../assets/lofis/lofi5.mp3';
import lofi6 from '../assets/lofis/lofi6.mp3';
import lofi7 from '../assets/lofis/lofi7.mp3';
import lofi8 from '../assets/lofis/lofi8.mp3';

import wallpaper1 from '../assets/wallpaper/wpp0.gif';
import wallpaper2 from '../assets/wallpaper/wpp1.gif';
import wallpaper3 from '../assets/wallpaper/wpp2.gif';
import wallpaper4 from '../assets/wallpaper/wpp3.gif';
import wallpaper5 from '../assets/wallpaper/wpp4.gif';
import wallpaper6 from '../assets/wallpaper/wpp5.gif';
import wallpaper7 from '../assets/wallpaper/wpp6.gif';
import wallpaper8 from '../assets/wallpaper/wpp7.gif';

const lofiTracks = [
  { src: lofi5, wallpaperIndex: 0 },
  { src: lofi2, wallpaperIndex: 1 },
  { src: lofi3, wallpaperIndex: 2 },
  { src: lofi4, wallpaperIndex: 3 },
  { src: lofi1, wallpaperIndex: 4 },
  { src: lofi6, wallpaperIndex: 5 },
  { src: lofi7, wallpaperIndex: 6 },
  { src: lofi8, wallpaperIndex: 7 },
];

const wallpapers = [
  wallpaper1, wallpaper2, wallpaper3, wallpaper4,
  wallpaper5, wallpaper6, wallpaper7, wallpaper8
];

const HomeContainer = styled.div`
  height: 97vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 25px;
  border-radius: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Home: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSongsOpen, setIsSongsOpen] = useState<boolean>(false);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const handleTrackChange = (trackIndex: number): void => {
    setCurrentTrackIndex(trackIndex);
  };

  const handleBackgroundChange = (wallpaperIndex: number): void => {
    console.log(wallpaperIndex);
  };

  const toggleMenu = (): void => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setIsSongsOpen(false);
      setIsInfoOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  const toggleInfo = (): void => {
    if (!isInfoOpen) {
      setIsInfoOpen(true);
      setIsMenuOpen(false);
      setIsSongsOpen(false);
    } else {
      setIsInfoOpen(false);
    }
  };

  const toggleSongs = (): void => {
    if (!isSongsOpen) {
      setIsSongsOpen(true);
      setIsMenuOpen(false);
      setIsInfoOpen(false);
    } else {
      setIsSongsOpen(false);
    }
  };

  return (
    <HomeContainer style={{ backgroundImage: `url(${wallpapers[lofiTracks[currentTrackIndex].wallpaperIndex]})` }}>
      <Menu 
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <Player
        lofiTracks={lofiTracks}
        onTrackChange={handleTrackChange}
        onBackgroundChange={handleBackgroundChange}
        themeColor="#eeeeee"
      />
      <Songs
        isOpen={isSongsOpen}
        toggleSongs={toggleSongs}
      />
      <Info
        isOpen={isInfoOpen}
        toggleInfo={toggleInfo}
      />
    </HomeContainer>
  );
};

export default Home;
