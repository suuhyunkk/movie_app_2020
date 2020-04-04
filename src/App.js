import React from 'react';
import PropTypes from 'prop-types';

function Dog ( { species, picture, rating } ) {
  return (
    <div> 
      <h2> I like { species } </h2>
  <h2> { rating } / 5.0 </h2> 
      <img src={ picture } alt={ species } />
    </div>
  )
}

const dogILike = [
  {
    id: 1,
    name: '사모예드',
    image: 'https://t1.daumcdn.net/cfile/tistory/27118F4259357D530B',
    rating: 5
  }, 
  {
    id: 2,
    name: '웰시코기',
    image: 'http://www.petmagazine.kr/news/photo/201706/65_229_4449.jpg',
    rating: 4.3
  },
  {
    id: 3,
    name: '시바',
    image: 'https://www.nemopan.com/files/attach/images/166591/633/118/012/e95074d8ef11749c7ef07435ad0a550a.jpg',
    rating: 4.7
  }
]

Dog.propTypes = {
  species: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {dogILike.map( dog => (
        <Dog key={dog.id} species={dog.name} picture={dog.image} rating={dog.rating} />
      ))}
    </div>
  )
}

export default App;
