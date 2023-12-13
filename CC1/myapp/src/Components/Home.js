import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <div class="body3">
      <div className="nav">
        <ul>
          <li className="new"><a href="#">FooDle</a></li>


          
         <Link to='/Login'>
          <li className="nex">Login</li>
          </Link>
          <Link to='/Register'>
            <li className="nex">Register</li>
          </Link>
          <Link to='/Home'>
          <li className="nex">Home</li>
          </Link>
         
        </ul>
      </div>
      <div className="ri">
        <img className="im" src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo="></img>
        <img className="im1" src="https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA="></img>
      </div>

        <div className="le">
          Enjoy Your <span className="sp">favourite</span> Food !!
        </div>

      </div>
    </>
  )
}
export default Home;

