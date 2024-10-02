import './Homepage.css'
import imgPlaceholder from '../assets/placeholder.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <>
    <div className="custom-shape-divider-bottom-1727714667">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
      <section id='Home'>
        <div>
          <h1>
            Exit<span>Ka</span>
          </h1>
        </div>
        <div id="toCenter" className="on-Bottom">
          <span>Studentský projekt 🙋🏻‍♀️</span>
          <br />
          <span>Vytvořený partou ajťáků a jednou skvělou paní učitelkou 💻</span>
        </div>
      </section>
      <section id='About'>
        <div>
          <div id='img1'><img src={imgPlaceholder} alt="" /></div>
          <div >
            <h2>O nás</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dignissimos eligendi. Dolores magnam veniam architecto iusto, quisquam nam, expedita, quaerat voluptatibus asperiores ipsa itaque deleniti rem eveniet aperiam molestiae excepturi?</p>
          </div>
        </div>
      </section>
      <div className="custom-shape-divider-top-1727712980">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>
      <section id='Subscription'>
        <div className="subscription-container">
          <h2>Subscribe to Premium</h2>
          <p>Get exclusive benefits with our Premium subscription</p>
          <div className="premium-subscription">
            <h3>Premium</h3>
            <ul>
              <li>Ad-free experience</li>
              <li>Priority customer support</li>
              <li>Exclusive content</li>
            </ul>
            <button className="subscribe-button">Subscribe now</button>
          </div>
        </div>
      </section>
      <div className="custom-shape-divider-top-1727715528">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      <section id="SocialMedia">
      <h2>Najdete nás na </h2>
      <ul>
        <li>
          <a href="https://www.tiktok.com/@exitkaproskoly" target="_blank">
            <FontAwesomeIcon icon={faTiktok} />
            <span>exitkaproskoly</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/exit_ka/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            <span>exit_ka</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61566340464605/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Exit Ka</span>
          </a>
        </li>
      </ul>
    </section>
    </>
  )
}

export default HomePage