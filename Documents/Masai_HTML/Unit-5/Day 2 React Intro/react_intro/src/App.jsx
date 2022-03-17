
import './App.css';
import {Mobile} from './components/Mobile'

const head1 = "Mobile Operating Systems"
const Os = ["Apple", "BlackBerry", "iPhone", "Windows Phone"]

const head2 = "Mobile Manufacturers"
const company = ["Samsung", "HTC", "Micromax", "Apple"]

function App() {
  return (
   <>
     <Mobile head = {head1} arr = {Os}/>
     <Mobile head = {head2} arr = {company}/>
   </>   
  );
}

export default App;
