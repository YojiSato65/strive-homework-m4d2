import './App.css';
import MyNavbar from './components/MyNavbar';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';
import MyFooter from './components/MyFooter';

function App()
{
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
