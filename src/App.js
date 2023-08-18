
import React from 'react';
import './App.css';
import FacebookCard from './FacebookCard';
import sampleImage from './sample image.jpg';
import sampleImage2 from './123.jpg';
import sampleImage3 from './456.jpeg';
import sampleImage4 from './789.jpeg';


function App() {
  const user = {
    name: 'Wasif Raza',
    avatarUrl: sampleImage, 
  };

  return (
    <div className="">
      <FacebookCard
        user={user}
        time="10 hr"
        imageUrl={sampleImage}
        postText="Captured a picture on Eid day in Madinah, where the empty road echoed serenity."
      />
      <FacebookCard
        user={user}
        time="10 hr"
        imageUrl={sampleImage2}
        postText="fsyhsghhdjdhjdhdjdhjdhdjdjjdndjdbjdjdhdjdhj."
      />
      <FacebookCard
        user={user}
        time="15 hr"
        imageUrl={sampleImage3}
        postText="Captured a picture on Eid day in Madinah, where the empty road echoed serenity."
      />
      <FacebookCard
        user={user}
        time="14 hr"
        imageUrl={sampleImage4}
        postText="Captured a picture on Eid day in Madinah, where the empty road echoed serenity."
      />
    </div>
  );
}

export default App;
