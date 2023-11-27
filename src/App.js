import { useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvices] = useState("")


  // We use async and await in the getAdvices function to handle asynchronous operations in a more synchronous-looking way
  async function getAdvices() {
    // fetching the data from api
    const fetchTheApi = await fetch("https://api.adviceslip.com/advice");
    // changing the data to json
    const fetchTheApiTojson = await fetchTheApi.json();

    setAdvices(fetchTheApiTojson.slip.advice);
  }


  return (
    // the parent element starts here
    <div className='container'>
      {/* title of the section */}
      <div className='title-of-the-page'>
        <h1>Multipurpose application</h1>
      </div>
      {/* in the div below i display the data coming from api */}
      <div className='data-display-box'>
        <h4 className='info-from-api'>{advice}</h4>
      </div>
      {/* a button to change the advice by each click */}
      <div className='button-box'>
        <button onClick={getAdvices} id="bottone1"><strong>Discover features</strong></button>
      </div>
    </div>
    // the parent element ends here
  )
}

export default App;

