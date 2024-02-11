import Header from './Header';
import bgVid from './../vids/mixkit-luxury-sports-car-in-nature-35205-large.webm'; 

function HeroPage(){
   return (
      <section className='hero-page'>
         <video id="bgVid" autoPlay loop muted>
            <source src={bgVid} type="video/webM" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
         </video>
         <div>
            <Header />
            <div className='hero-text'>
               <h2>Join The Journey</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti molestias deserunt saepe at error. Dolore, veniam?
               </p>
            </div>
         </div>
      </section>
   )
}

export default HeroPage