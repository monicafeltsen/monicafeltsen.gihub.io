import monica from './assets/monica.png'
import './App.css'

function App() {

  return (
    <>
      <div className='profile-hero'>
        <img src={monica} className='profile-picture'/>
        <div className='title'>
          <h1>Monica Feltsen</h1>
          <h3>Junior systemutvecklare</h3>
        </div>
      </div>
    </>
  )
}

export default App
