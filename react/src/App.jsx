import './App.css'
import { ThemeProvider } from './Context/ThemeContext';
import InterviewKPMG from './Interview';
import CallApi from './Interview/nawhas';
import ApiCallUsingAxios from './practice/apiCall/usingAxios';
import ApiCallUsingFetch from './practice/apiCall/usingFetch';
import BlinkingText from './practice/BlikingText';
import CitiesDropdown from './practice/findCitiesDropdown';
import HOC from './practice/HigherOrderComponent';
import LightDarkMode from './practice/LightAndDark';
import ListCheckBoxDelete from './practice/listCheckboxAndDeleteButton';
import Paginate from './practice/productsApi&Paginate';
import ProgessBar from './practice/progressBar';
import SportSelection from './practice/sportSelection';
import Todos from './practice/Todos';

function App() {
  // const [count, setCount] = useState(0);

  
  return (
    <>
    {/* <h2>React Practice Questions</h2> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* <CitiesDropdown/>
      <ListCheckBoxDelete/>
      <BlinkingText/> 
      <ProgessBar/>
      <SportSelection/>
      <ApiCallUsingFetch/>
      <ApiCallUsingAxios/> */}
      {/* <Paginate/> */}
      {/* <Todos/> */}
      {/* <InterviewKPMG/> */}
      {/* <ThemeProvider>
      <LightDarkMode/>
      </ThemeProvider> */}
      {/* <HOC/> */}
      <CallApi/>
    </>
  )
}
export default App