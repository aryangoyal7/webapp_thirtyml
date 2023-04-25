import React from 'react';

const ClubPage = () => {
  return (
    <div style={{backgroundColor: '#6a0dad', color: 'white'}}>
      <h1 style={{textAlign: 'center'}}>Welcome to Purple Club</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src="https://placehold.it/300x200" alt="Club Image 1" style={{marginRight: '20px'}} />
        <img src="https://placehold.it/300x200" alt="Club Image 2" />
      </div>
      <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat nisl. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
    </div>
  );
}

export default ClubPage;
