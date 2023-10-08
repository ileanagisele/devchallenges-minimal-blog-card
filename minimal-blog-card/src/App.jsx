import './App.css'
import cactus from './assets/cactus.jpg'

function App() {

  return (
    <>
      <section className='App'>

        <div className='card'>

          <div className='image'>
            <img
              className='cactus-image'
              src={cactus}
              alt='cactus'
            />
          </div>

          <div className='tag'>
            <span>Design</span>
          </div>

          <div className='text-box'>
            <h1 className='title'>Embracing Minimalism</h1>
            <p className='text'>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
          </div>

          <div className='bottom-line'></div>

          <div className='footer'>
            <footer>Annie Spratt</footer>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
