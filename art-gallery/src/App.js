import { useState, useEffect } from 'react'
import './App.css';
import {Gallery} from './Gallery.js';
import {ButtonBar} from './ButtonBar.js';


function App(){
{/* State variables here... */}

let [artId, setArtId] = useState(12720)
let [data, setData] = useState({})

    useEffect(() => {
        document.title = 'Welcome to ArtWorld'
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
        .then(response => response.json())
        .then(resData => setData(resData))
    }, [artId])


const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
}


return (
    <div>
      <Gallery objectImage={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar  handleIterate={handleIterate}/>
    </div>

)}

export default App;
