import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([])
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(ref.current.value)
    
    // API URL
    const endpointURL = 
      `https://pixabay.com/api/?key=43385307-62aaa7aff1ec0a25276441c07&q=${ref.current.value}&image_type=photo`
    // APIを叩くデータフェッチング　　fetch or axios
    fetch(endpointURL)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setFetchData(data.hits)
    })
  }


  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='Search Image' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
