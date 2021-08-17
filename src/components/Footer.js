import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
     
        <div className='input-areas'>
       
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><i class="fa fa-check" aria-hidden="true"></i>Easysocial</h2>
              <Link>Bring Your Bussiness Online</Link>
              <Link class='social-icon-link facebook'>  <i class='fab fa-facebook-f' /><small>facebook</small></Link>
              <Link class='social-icon-link twitter'>  <i class='fab fa-twitter' /><small>twitter</small></Link>
              <Link class='social-icon-link instagram'>  <i class='fab fa-instagram' /><small>instagram</small></Link>
             
          </div>
          <div class='footer-link-items'>
            <h2>Basysocks</h2>
            <Link to='/sign-up'>Home</Link>
            <Link >About Us</Link>
            <Link >Contact Us</Link>
         
          </div>
          <div class='footer-link-items'>
            <h2>Products</h2>
            <Link >Reach</Link>
            <Link >Engage</Link>
            <Link >Sell</Link>
            <Link >Shops</Link>
            <Link >Delivery</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Industries</h2>
            <Link>Education</Link>
            <Link>Grocery</Link>
            <Link>Automobile</Link>
            <Link>Cake, Industries</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Legal</h2>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Security</Link>
          
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          
          </div>
        
        </div>
      </section>
    </div>
  );
}

export default Footer;