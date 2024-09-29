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
    </>
  )
}

export default HomePage