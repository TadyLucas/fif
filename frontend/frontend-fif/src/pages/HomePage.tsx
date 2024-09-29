import './Homepage.css'
import imgPlaceholder from '../assets/placeholder.jpg'

const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage