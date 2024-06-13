
import { createContext, useState, ReactNode } from 'react';

interface BackgroundColorContextProps {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

export const BackgroundColorContext = createContext<BackgroundColorContextProps>({
  backgroundColor: '#eeeeee',
  setBackgroundColor: () => {},
});

export const BackgroundColorProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState('#eeeeee');

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};
