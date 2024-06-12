import { useState } from 'react';
import styled from 'styled-components';
import Player from '../components/Player';

import lofi1 from '../assets/lofis/lofi1.mp3';
import lofi2 from '../assets/lofis/lofi2.mp3';
import lofi3 from '../assets/lofis/lofi3.mp3';
import lofi4 from '../assets/lofis/lofi4.mp3';
import lofi5 from '../assets/lofis/lofiagatha.mp3';

import wallpaper1 from '../assets/wallpaper/music.gif';
import wallpaper2 from '../assets/wallpaper/study.gif';
import wallpaper3 from '../assets/wallpaper/sun.gif';
import wallpaper4 from '../assets/wallpaper/lonely.gif';
import wallpaper5 from '../assets/wallpaper/initial.gif';
// import Menu from '../components/Menu';
import Volume from '../components/Volume';

interface Asset {
  src: string;
  wallpaperIndex: number;
}

const lofiTracks: Asset[] = [
  { src: lofi1, wallpaperIndex: 0 },
  { src: lofi2, wallpaperIndex: 1 },
  { src: lofi3, wallpaperIndex: 2 },
  { src: lofi4, wallpaperIndex: 3 },
  { src: lofi5, wallpaperIndex: 4 },
];

const wallpapers: string[] = [wallpaper5, wallpaper2, wallpaper3, wallpaper4, wallpaper1];

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
`;

const Home: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const handleTrackChange = (trackIndex: number): void => {
    setCurrentTrackIndex(trackIndex);
  };

  const handleBackgroundChange = (wallpaperIndex: number): void => {
    console.log(wallpaperIndex);
  };

  return (
    <HomeContainer style={{ backgroundImage: `url(${wallpapers[lofiTracks[currentTrackIndex].wallpaperIndex]})` }}>
      {/* <Menu /> */}
      <Volume />
      <Player
        lofiTracks={lofiTracks}
        onTrackChange={handleTrackChange}
        onBackgroundChange={handleBackgroundChange}
      />
    </HomeContainer>
  );
};

export default Home;
