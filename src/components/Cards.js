
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image from '../images/people.png'
import login from '../images/login2.png'

function Cards() {
  return (
    <div className='cards'>
  
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={image}
              text='Contact our Support team to grow your bussiness'
              label='Adventure'
              path='/services'
              para="    ur numquam similiquerepellat alias temporibus nesciunt impedit sed odio iste. Est, recusandae dignissimos!"
            />
            <CardItem
              src={login}
           
              label='Luxury'
              path='/services'
            />
          </ul>
          <h1>Current Openings</h1>
          <br />
          <ul className='cards__items'>
            <CardItem
              heading="IOS Developer"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              heading="IOS Developer"
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
               heading="IOS Developer"
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
        
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;