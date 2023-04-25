import React from 'react';

const BookingPage = () => {
  return (
    <div style={{backgroundColor: '#f7f7f7', padding: '50px'}}>
      <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Book a Room at Our Hotel</h1>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{width: '300px', backgroundColor: 'white', borderRadius: '10px', padding: '20px'}}>
          <h3 style={{textAlign: 'center'}}>Deluxe Room</h3>
          <img src="https://placehold.it/300x200" alt="Deluxe Room" style={{width: '100%', marginBottom: '20px'}} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat nisl. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          <button style={{backgroundColor: '#5a5aff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', marginTop: '20px'}}>Book Now</button>
        </div>
        <div style={{width: '300px', backgroundColor: 'white', borderRadius: '10px', padding: '20px'}}>
          <h3 style={{textAlign: 'center'}}>Suite</h3>
          <img src="https://placehold.it/300x200" alt="Suite" style={{width: '100%', marginBottom: '20px'}} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat nisl. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          <button style={{backgroundColor: '#5a5aff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', marginTop: '20px'}}>Book Now</button>
        </div>
        <div style={{width: '300px', backgroundColor: 'white', borderRadius: '10px', padding: '20px'}}>
          <h3 style={{textAlign: 'center'}}>Family Room</h3>
          <img src="https://placehold.it/300x200" alt="Family Room" style={{width: '100%', marginBottom: '20px'}} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae feugiat nisl. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          <button style={{backgroundColor: '#5a5aff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', marginTop: '20px'}}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
