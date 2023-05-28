import saveTheDate from './SaveTheDatePhoto.jpeg';
// import './App.css';
import './css/styles.css'


function App() {
  return (
    <div className="App">

      <div id="navContent" className="split inverse singleNav">
        <div className="bgBox"></div>   
        <nav>
          <div className="navScroll">     
            <a href="home" className="navItem" rel="nofollow">Home Page</a>
            <a href="p41464" className="navItem" rel="nofollow">Itinerary</a>
            <a href="p41466" className="navItem" rel="nofollow">Boracay</a>
            <a href="p41467" className="navItem" rel="nofollow">Information</a>
            <a href="p41469" className="navItem" rel="nofollow">RSVP Button</a>                                                 
          </div>    
        </nav>
      </div>
    
      <header className="home singlePage cover">      
        <h1 className="monogram text">
          <a href="home" className="navItem" rel="nofollow">ARISA - SAAGAR</a>
        </h1>
      </header>
    
      <main className="singlePage"> 

        <section className="home halign-center valign-middle coverpage cover" data-color="">
          <div className="bgBox" style={{'backgroundImage':"url(https://myblissandbone.com/plunge-01/_images/db008a3efa8db667fc74256c013ffd4a.jpeg)"}}>
          </div>               
          <h1 id="coverpage_0" className="logo">
            <img src="https://myblissandbone.com/plunge-01/_images/4b738367f290959cc45e6b46f3b44ab1.png"></img>
          </h1>
        </section>

        <section className="content_page p41464" >
          <div className="section full addPadd">                                                                                
            <div className="sectionCont small">
              <div className="imgCont" style={{'backgroundColor': '#ccb16f'}}>
                <div id="head_10" className="textCont">
                  <h2 style={{'color': '#ffffff', 'fontSize': '3.75em'}}>ITINERARY</h2>
                  <div className="subsection"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="section stagger_l ">             
            <div className="sectionCont large">
              <div id="head_11" className="textCont textOnly">
                <h2>WEDNESDAY 2023-11-29</h2>
                <div className="subsection">
                  <h3>CHECK IN</h3>
                  <h4>
                    Anytime
                    <br />
                    Please send your flight information to our lovely event support team so we know when to expect you.
                  </h4>
                  <div className="buttonCont">
                    <a href="https://www.google.com" className="button">
                      <span>Send Info</span>
                    </a>
                  </div>
                </div>
                <div className="subsection">
                  <h3>SANGEET/MEHNDHI/JAGGO</h3>
                  <h4>
                    Location: Crimson Resort and Spa Borcay: Events Pavillion (Outdoors)
                    <br />
                    5:30pm
                    
                    <br />
                    <br />
                    Join us for a night of singing and dancing performances (Sangeet), henna (Mehndhi), and a party to symbolically "wake up" everyone for the wedding (Jaggo)
                    <br />
                    <br />
                    Dress: While this is a traditional Indian event, no need to worry if you don't have Indian clothes! Any colorful cutural or formal clothing will suffice!
                  </h4><
                /div>
              </div>
            </div>
          </div>

      <div className="section stagger_r ">             
        <div className="sectionCont large">
           <div id="head_12" className="textCont textOnly">
              <h2>THURSDAY 2023-11-30</h2>
              <div className="subsection">
                <h3>WEDDING CEREMONY</h3>
                <h4>
                  Location: Crimson Resort and Spa Boracay: Beachfront
                  <br />
                  Groom's side lines up for the Baraat at 3:00pm
                  <br />
                  All guests seated for the ceremony at 4:00pm
                  <br />
                  <br />
                  Dress: Beach Formal
                  <br />
                  The Bride and groom invite you to participate in their theme colors below or any beach color your prefer
                  <br />
                </h4>
              </div>
            </div>
          </div>
        </div>
        </section>
            </main>
    </div>
  );
}

export default App;
