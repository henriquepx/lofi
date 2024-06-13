import Home from "./app/Home";
import GlobalStyles from "./styles/GlobalStyles"; 

const backgroundColor = '#eeeeee';

function App() {
  return (
    <>
      <GlobalStyles  backgroundColor={backgroundColor} />
      <Home />
    </>
  );
}

export default App;