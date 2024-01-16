import monica from './assets/monica.png'
import './App.css'

function App() {

  return (
    <>
      <div className='profile-hero'>
        <img src={monica} className='profile-picture'/>
        <div className='title'>
          <h1>Monica Feltsen</h1>
          <h3>Junior full stack developer</h3>
        </div>
      </div>
      <div>
        <p>This page is created with React and TypeScript and will be continuously updated</p>
      </div>
    </>
  )
}

export default App
