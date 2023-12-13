import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li className="new"><a href="#">FooDle</a></li>

<div className='dr'>
          <li className="nex">Log Out</li>
          <li className="nex">Order Now</li>
         <Link to='/Login'>
          <li className="nex">Login</li>
          </Link>
          <Link to='/Register'>
            <li className="nex">Register</li>
          </Link>
          <Link to='/Home'>
          <li className="nex">Home</li>
          </Link>
          </div>
        </ul>
      </div>
      <div className="ri">
        <img className="im" src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo="></img>
        <img className="im1" src="https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA="></img>

        <div className="le">
          Enjoy Your <span className="sp">favourite</span> Food !!
        </div>
      </div>
    </>
  )
}
export default Home;

