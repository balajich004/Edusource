import React from 'react'
import "./Home.css"
import homep from "../../images/home.png"
import authp from "../../images/author.png"

function Home() {
  return (
    <div className='home-container'>
      <div className="sub-home">
      <div className="home-text">
        <div className="home-main-text">
          Explore the world through <span className='books'>Books</span>
        </div>
        <div className="home-sub-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem velit eaque, natus iure quo modi facere debitis nemo doloremque consequatur delectus dolores, esse ab cupiditate laudantium placeat maxime, vero officiis reprehenderit. Voluptatem eum impedit nam eligendi laboriosam soluta laborum maiores odit iusto!
        </div>
      </div>
      <div className="home-logo">
        <img src={homep} alt="there used to be homep" />
        </div>
      </div>
      <div className="author-signup">
        <div className="sub-auth">
        <div className="auth-logo">
          <img src={authp} alt="author logo" className='author-logo'/>
        </div>
        <div className="auth-context">
          <h2>Join our author program</h2>
          <div className="auth-input">
            <input type="text" placeholder='Enter your username' className='auth-in'/>
          </div>
          <div className="auth-submit">
            <button type="button" className='auth-signup'>Signup</button>
          </div>
        </div></div>
      </div>
    </div>
  )
}

export default Home