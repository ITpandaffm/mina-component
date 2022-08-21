import './App.css';
import CustomSlider from './stories/Playground/CustomSlider';
import { Button, StyledEngineProvider } from '@mui/material'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        更新

        <CustomSlider />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
