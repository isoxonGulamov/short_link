import React from 'react'
import fb from '../../image/fb.png';
import insta from '../../image/insta.webp';
import twitter from '../../image/twitter.png';
import linkedin from '../../image/linkedin.png';
import './footer.scss'
export const Footer = () => {
  return (
    <>

      <div className='footer'>
        <div className='container'>
          <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
              <div className='sb__footer-links_div'>
                <h4>For Business</h4>

                <a href="#">
                  <p>Employer</p>
                </a>
                <a href="#">
                  <p>Health Plan</p>
                </a>
                <a href="/#">
                  <p>Individual</p>
                </a>
              </div>
              <div className='sb__footer-links_div'>
                <h4>Resources</h4>

                <a href="#">
                  <p>Resource center</p>
                </a>
                <a href="#">
                  <p>Testimonials</p>
                </a>
                <a href="#">
                  <p>STV</p>
                </a>
              </div>

              <div className='sb__footer-links_div'>
                <h4>Partners</h4>

                <a href="#">
                  <p>Swing Tech</p>
                </a>

              </div>

              <div className='sb__footer-links_div'>
                <h4>Company</h4>

                <a href="/#">
                  <p>About</p>
                </a>
                <a href="/#">
                  <p>Press</p>
                </a>
                <a href="/#">
                  <p>Career</p>
                </a>
                <a href="#">
                  <p>Contact</p>
                </a>

              </div>

              <div className='sb__footer-links_div'>
                <h4>Cooming soon on</h4>

                <div className='socialmedia'>
                  <p><img  src={fb} alt="facebook_icon" /></p>
                  <p><img  src={twitter} alt="twitter_icon" /></p>
                  <p><img  src={linkedin} alt="linkedin_icon" /></p>
                  <p><img  src={insta} alt="insta_icon" /></p>
                </div>

              </div>
              <div>

              </div>
            </div>

            <hr />
            <div className='sb__footer-bellow'>
              <div className='sb__footer-copyright'>
                <p>
                  @{new Date().getFullYear()} CodeInn. All right reserverd.
                </p>
              </div>
              <div className='sb__footer-bellow-links'>
                <a href="#">
                  <div>
                    <p>Terms & Conditions</p>
                  </div>
                </a>
                <a href="#">
                  <div>
                    <p>Privacy</p>
                  </div>
                </a>
                <a href="#">
                  <div>
                    <p>Security</p>
                  </div>
                </a>
                <a href="#">
                  <div>
                    <p>Cookie Declaration</p>
                  </div>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
