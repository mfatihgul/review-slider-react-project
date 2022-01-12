import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(number < 0 ){
      setNumber(lastIndex)
    }
    if(number > lastIndex){
      setNumber(0)
    }
  }, [number, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setNumber(number + 1)
    }, 3000)
    return () => clearInterval(slider);
  }, [number])


  return(
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <section className='section-center'>
        {people.map((person, index) => {
          const {id, image, name, title, quote} = person;
          let position = 'nextSlide'
          if(index === number) {
            position = 'activeSlide'
          }
          if(index === number -1 || 
            (number === 0 && index === people.length-1)){
            position = 'lastSlide'
          }
          return(
            <article className={position} key={id}>
              <img className='person-img' src={image} alt={name} />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button onClick={() => setNumber(number - 1)} className='prev'>
          <FaChevronLeft />
        </button>
        <button onClick={() => setNumber(number + 1)} className='next'>
          <FaChevronRight />
        </button>
      </section>
    </section>
  )
}

export default App;
