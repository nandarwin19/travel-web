import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'
import Places from './components/Places'
import './index.css';


const App = () => (
  <div className='relative'>
    <Home/>
    <Features/>
    <Places/>
    <Contact/>
  </div>
)

export default App;