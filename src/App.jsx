import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const App = () => {
  
  const [index, setIndex] =  useState(0)

  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0
    }
    if(number < 0) {
      return people.length - 1
    }
    return number
  }
  
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return checkNumber(newIndex);
    })
  }
  
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let rand = Math.floor(Math.random() * people.length)
    if(rand === index) {
      rand = index + 1
    }
    setIndex(checkNumber(rand))
  }

  const {name, image, job, text} = people[index];
  return (
    <main>
      <article className='review'>
        <h2 className='review-title'>Reviews</h2>
        <div className="person">
            <div className='img-container'>
              <img src={image} alt={name} className='person-img' />
              <div className="quote-icon">
              <FaQuoteRight />
            </div>
            </div>
          <h3 className='author'>{name}</h3>
          <h4 className='job'>{job}</h4>
          <p className='info'>{text}</p>
        </div>
        <div className="btn-container">
          <button className='prev-btn' type="button" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' type="button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn' type='button' onClick={randomPerson}>Surprise Me</button>
      </article>
    </main>
  )
};
export default App;


