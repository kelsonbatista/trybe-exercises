// import logo from './logo.svg';
// import './App.css';
import Image from './Image';

function App() {
  const data = {
    source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    alternativeText: 'Cute cat staring'
  }
  return (
    <div className="App">
      <header className="App-header">
        <Image img = { data } />
      </header>
    </div>
  );
}

export default App;
