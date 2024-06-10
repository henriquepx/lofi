import { useState } from 'react';
import styled from 'styled-components';
import Player from '../components/Player';
import lofi1 from '../assets/lofis/lofi1.mp3';
import lofi2 from '../assets/lofis/lofi2.mp3';
import lofi3 from '../assets/lofis/lofi3.mp3';
import lofi4 from '../assets/lofis/lofi4.mp3';
import lofi5 from '../assets/lofis/lofiagatha.mp3';
import wallpaper1 from '../assets/wallpaper/medical.jpg';
import wallpaper2 from '../assets/wallpaper/agatha.jpg';
import wallpaper3 from '../assets/wallpaper/initial.gif';
import wallpaper4 from '../assets/wallpaper/lonely.gif';
import wallpaper5 from '../assets/wallpaper/cat.gif';

interface LofiTrack {
  src: string;
  wallpaperIndex: number;
}

const wallpapers: string[] = [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5];

const lofiTracks: LofiTrack[] = [
  { src: lofi1, wallpaperIndex: 0 },
  { src: lofi2, wallpaperIndex: 1 },
  { src: lofi3, wallpaperIndex: 2 },
  { src: lofi4, wallpaperIndex: 3 },
  { src: lofi5, wallpaperIndex: 4 },
];

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease;
`;

const Home: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const handleTrackChange = (trackIndex: number) => {
    setCurrentTrackIndex(trackIndex);
  };

  const handleBackgroundChange = (wallpaperIndex: number) => {
    console.log("Background mudou para o wallpaper de índice:", wallpaperIndex);
  };

  return (
    <HomeContainer style={{ backgroundImage: `url(${wallpapers[lofiTracks[currentTrackIndex].wallpaperIndex]})` }}>
      <Player
        lofiTracks={lofiTracks}
        onTrackChange={handleTrackChange}
        onBackgroundChange={handleBackgroundChange}
      />
    </HomeContainer>
  );
};

export default Home;
