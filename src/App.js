import './App.css';
import x from './images/x.png'

function App() {
  return (
    <div className='homeParent'>
      <div className='homeHeading'>
        <h1>Great things are coming soon.</h1>
        <div style={{ textAlign: 'center' }}>
          First Ape collection on Monad blockchain.{' '}
        <div>

        <a href='https://twitter.com/monadapes' target='_blank' rel="noreferrer">
            <img src={x} className='logo' alt='x'/>
          </a>
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
