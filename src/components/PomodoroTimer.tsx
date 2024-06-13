import { useState, useRef } from 'react';
import styled from 'styled-components';

const PomodoroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  border-radius: 8px;
`;

const TimerText = styled.div`
  font-size: 1rem;
`;

const TimeDisplay = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const PomodoroButton = styled.button`
  border: 1px solid #979797;
  color: #000000;
  padding: 10px 10px;
  font-size: .7rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const PomodoroTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const intervalRef = useRef<number | null>(null);

  const startPomodoro = () => {
    setIsActive(true);
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalRef.current!);
          setIsBreak(!isBreak);
          return isBreak ? 25 * 60 : 5 * 60;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pausePomodoro = () => {
    setIsActive(false);
    clearInterval(intervalRef.current!);
  };

  const resetPomodoro = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
    clearInterval(intervalRef.current!);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <PomodoroContainer>
      <TimerText>{isBreak ? 'Break' : 'Pomodoro'}</TimerText>
      <TimeDisplay>{formatTime(timeLeft)}</TimeDisplay>
      <ButtonContainer>
        {!isActive && (
          <PomodoroButton onClick={startPomodoro}>Start</PomodoroButton>
        )}
        {isActive && (
          <PomodoroButton onClick={pausePomodoro}>Pause</PomodoroButton>
        )}
        <PomodoroButton onClick={resetPomodoro}>Reset</PomodoroButton>
      </ButtonContainer>
    </PomodoroContainer>
  );
};

export default PomodoroTimer;
