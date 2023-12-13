function Home()
{
    return(
           <div className="ho">
            <div class="nav">
        
          <a href="Home" >Home</a>
            <a href="Login">Login</a>
            <a href="explore">Explore</a>
            <a href="Ratings">Ratings</a>
            </div>
            <section>
  <div class="content">
    <div class="info">
      <p>Embark on a <span class="movie-night"> musical journey</span> with us! From timeless classics to contemporary beats, our diverse collection caters to every taste. Let the universal language of music elevate your moments, evoke emotions, and create memories. Discover the magic of sound with us. </p>
      <button class="btn">Join</button>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <span>Just music</span>
          <img className="im" src="https://img.freepik.com/premium-photo/lofi-music-beautiful-girl-listening-music-sleeping-bed-wallpaper-generative-ai_837759-471.jpg" ></img>
        </div>

        {/* <div class="swiper-slide">
          <span>9.5</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>8.1</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>8.7</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>8.6</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>8.9</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>8.6</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>8.7</span>
          <h2></h2>
        </div>

        <div class="swiper-slide">
          <span>9.2</span>
          <h2></h2>
        </div> */}
      </div>
    </div>

  </div>

  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</section>
            
           </div>
    )
}
export default Home;