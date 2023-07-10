import saveTheDate from './SaveTheDatePhoto.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from "react";
// import './App.css';
// https://i.imgur.com/EIAAMOK.png - Names image

//      <div id="navContent" className="split inverse singleNav">
      //   <div className="bgBox"></div>   
      //   <nav>
      //     <div className="navScroll">     
      //       <a href="home" className="navItem" rel="nofollow">Home Page</a>
      //       <a href="p41464" className="navItem" rel="nofollow">Itinerary</a>
      //       <a href="p41466" className="navItem" rel="nofollow">Boracay</a>
      //       <a href="p41467" className="navItem" rel="nofollow">Information</a>
      //       <a href="p41469" className="navItem" rel="nofollow">RSVP Button</a>                                                 
      //     </div>    
      //   </nav>
      // </div>
import './css/bootstrap.min.css';
import './css/styles.css'



function PictureCarousel() {
  const delay = 5000
  return (
    <Carousel data-bs-theme="dark" pause={false}>
      <Carousel.Item interval={delay}>
        <section className="home halign-center valign-middle coverpage cover" data-color="">
        <div className="bgBox" style={{'backgroundImage':"url(https://i.imgur.com/ZySJ0Rq.jpg)", "backgroundPosition": "top", "top": "-10%", "backgroundPositionX": "60%"}}>
        </div>     
        </section>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={delay}>
        <section className="home halign-center valign-middle coverpage cover" data-color="">
                  <div className="bgBox" style={{'backgroundImage':"url(https://i.imgur.com/L9zycrH.jpeg)", "backgroundPosition": "top", "top": "-7%", "backgroundPositionX": "50%"}}>
        </div>   
        </section>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={delay}>
        <section className="home halign-center valign-middle coverpage cover" data-color="">
          <div className="bgBox" style={{'backgroundImage':"url(https://i.imgur.com/v64KrwT.jpeg)", "backgroundPosition": "top", "top": "-8%", "backgroundPositionX": "25%"}}>
        </div>     
        </section>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={delay}>
        <section className="home halign-center valign-middle coverpage cover" data-color="">
          <div className="bgBox" style={{'backgroundImage':"url(https://i.imgur.com/lXpQcbG.jpeg)", "backgroundPosition": "top", "top": "-10%"}}>
        </div>     
        </section>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function InviteCarousel() {
  return (
    <Carousel data-bs-theme="dark" pause={false} interval={null}>
      <Carousel.Item>
        <img src="https://i.imgur.com/tFyrkYX.png" alt="Invite 1" width="100%" height="auto"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.imgur.com/29Cnfmv.png" alt="Invite 2" width="100%" height="auto"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.imgur.com/mnjjbXC.jpeg" alt="Invite 1" width="100%" height="auto"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.imgur.com/2QLWedZ.png" alt="Invite 1" width="100%" height="auto"></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="App">


    
      <header className="home singlePage cover">      
        <h1 className="monogram text">
          <a href="home" className="navItem" rel="nofollow">ARISA - SAAGAR</a>
        </h1>
      </header>
    
      <main className="singlePage"> 

      

        <section className="home halign-center valign-middle coverpage cover" data-color="">
          <div className="bgBox" style={{'backgroundImage':"url(https://i.imgur.com/NtcMidB.jpg)"}}>
          </div>               
          <h1 id="coverpage_0" className="logo">
            <img src="https://i.imgur.com/iLMjWwW.png"></img>
          </h1>
        </section>

        
        <PictureCarousel></PictureCarousel>

        <section className="content_page p41464"  >
          <div className="section full addPadd" style={{'paddingTop': '0px', 'paddingBottom': '20px'}}>                                                                                
            <div className="sectionCont small">
              <div className="imgCont" style={{'backgroundColor': '#ccb16f'}}>
                <div id="head_10" className="textCont">
                  <h2 style={{'color': '#ffffff', 'fontSize': '3.75em'}}>ITINERARY</h2>
                  <div className="subsection"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="section stagger">             
            <div className="sectionCont large">
              <div id="head_11" className="textCont textOnly">
                <h2>WED 2023-11-29</h2>
                <div className="subsection">
                  <h3>SANGEET/MEHNDHI/JAGGO</h3>
                  <h4>
                    Location: Crimson Resort and Spa Boracay - Events Pavillion (Outdoors)
                    <br />
                    5:30pm - 10pm
                    
                    <br />
                    <br />
                    Join us for a night of singing and dancing performances (Sangeet), henna (Mehndhi), and a party to symbolically "wake up" everyone for the wedding (Jaggo)
                    <br />
                    <br />
                    <b>Attire</b>
                    <br />
                    Any colorful cultural or beach cocktail outfit
                    <div className="indian-attire"><img src="https://i.imgur.com/mLuWFAm.png"></img></div>
                  </h4>
                </div>
              </div>
            </div>
          </div>

        <div className="section stagger">             
          <div className="sectionCont large">
            <div id="head_12" className="textCont textOnly">
              <h2>THURS 2023-11-30</h2>
              <div className="subsection">
                <h3>WEDDING CEREMONY</h3>
                <h4>
                  Location: Crimson Resort and Spa Boracay - Beachfront
                  <br />
                  Groom's side lines up for the Baraat at 3pm
                  <br />
                  All guests seated for the ceremony at 4pm
                  <br />
                  <br />
                  <b>Attire</b>
                  <br />
                  GENTLEMAN: Button-down shirt and pants. No sandals and flip-flops.
                  <br />
                  LADIES: Ankle to floor-length dresses. Strictly NO white or black colors
                  <br />
                  <div className="palette"><img src="https://i.imgur.com/HaiQ1w7.png"></img></div>
                  <br />
                  The bride and groom encourage you to participate in their theme colors below or any neutral color your prefer
                  <div className="palette"><img src="https://i.imgur.com/UCJaS2W.png"></img></div>
                </h4>
              </div>

              <div className="subsection">
                <h3>Cocktail Hour</h3>
                <h4>
                  Location: Crimson Resort and Spa Boracay - Beachfront
                  <br />
                  5pm - 6pm
                  <br />
                </h4>
              </div>

              <div className="subsection">
                <h3>Reception</h3>
                <h4>
                  Location: Crimson Resort and Spa Boracay - Coral Ballroom
                  <br />
                  6pm - 10pm
                  <br />
                </h4>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="content_page p41465" style={{"marginTop":"56px"}}>
                    
        <div className="section full addPadd">             
          <div className="sectionCont medium">
            <div className="imgCont ">
              <div className="bgBox" style={{'backgroundImage':"url(https://i.imgur.com/rFpTbbL.jpg)", "filter":"saturate(100%) brightness(100%)"}}>
              </div>                                                    
            </div>
          </div>
        </div>
        <div className="section stagger">             
          <div className="sectionCont large">
            <div id="head_21" className="textCont textOnly">
              <br/>
              <h2>BORACAY</h2>
              <div className="subsection">
              </div>
            </div>
          </div>
        </div>
        <div className="section stagger" style={{"paddingTop":"0px"}}>             
          <div className="sectionCont large">
            <div id="head_22" className="textCont textOnly">
              <div className="subsection">
                <h4>
                  Boracay is a resort island in the Western Visayas region of the Philippines. It was awarded as the 2012 Best Island in the World by the international travel magazine <b>Travel + Leisure</b>. 
                  There are so many things to do in Borcay, including but not limited to: island hopping, water sports, snorkeling and diving, nightlife, hiking, and cliff diving. 
                  <br />
                  <br />
                  <a href="https://guidetothephilippines.ph/articles/what-to-experience/boracay-tourist-spots" target="_blank" rel="nofollow"><u>Click here to see more</u></a>.
                  <br />
                  Back in the day, boats used to be allowed to bring tourists directly to Boracay's White Beach. They would drop off tourists at boat staion 1
                  in the north to boat station 3 in the south part of White Beach. The Boat stations have been replaced by the singular port, but the naming of Boracay's
                  stations have remained. Today, Station 1 in the north of White Beach is home to luxorious and peaceful beach resorts. Station 2 is the epicenter of the
                  island, home to the biggest shopping areas and night life. Station 3 is home to the backpacker hostels and nature.
                  <br />
                  <br/>
                  <div className="map"><img src="https://i.imgur.com/aOiiHVY.jpeg"></img></div>
                  <br />
                  <a href="https://www.crimsonhotel.com/boracay/about-us" target="_blank" rel="nofollow" style={{'display':"inline"}}><u>The Crimson Resort and Spa in Boracay</u></a> is not on White Beach, and is located in the coveted Station 0 of Boracay in the very north part of the island.
                  This is the most tranquil and isolated part of the island, and home to many 5-star resorts. The Crimson hosts a secluded and pristine beach, a pool bar, and four superb restaurants.
                </h4>
              </div>
            </div>
          </div>
        </div>                                                                               
      </section>

      <section className="content_page p41469" style={{"marginTop":"56px"}}>
          <div className="section full addPadd" style={{'paddingTop': '0px', 'paddingBottom': '20px'}}>                                                                                
            <div className="sectionCont small">
              <div className="imgCont" style={{'backgroundColor': '#ccb16f'}}>
                <div id="head_10" className="textCont">
                  <h2 style={{'color': '#ffffff', 'fontSize': '3.75em'}}>INVITE</h2>
                  <div className="subsection"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section stagger">             
            <div className="sectionCont large">
              <div id="head_21" className="textCont textOnly">
                <br />
                <div className="subsection">
                  <h3><a onClick={handleShow}>
                    Click here to view invite
                  </a></h3>

                  <Modal show={show} onHide={handleClose} fullscreen={false} size='lg' style={{"width": "90%", "marginLeft": "5%"}}>
                    <Modal.Header closeButton>
                      <Modal.Title>Invite</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <InviteCarousel></InviteCarousel>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="content_page p41466" >
          <div className="section full addPadd" style={{'paddingBottom': '20px'}}>                                                                                
            <div className="sectionCont small">
              <div className="imgCont" style={{'backgroundColor': '#ccb16f'}}>
                <div id="head_10" className="textCont">
                  <h2 style={{'color': '#ffffff', 'fontSize': '3.75em'}}>INFORMATION</h2>
                  <div className="subsection"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="section stagger ">             
            <div className="sectionCont large">
              <div id="head_11" className="textCont textOnly">
                <h2>WEATHER</h2>
                <div className="subsection">
                  <h4>
                    The dry season on Boracay starts in November. The average daytime temperatures are around 30°C (86°F) and nighttime temperatures are around 23°C (74°F). 
                    It is of course highly recommended to wear reef safe sunscreen and to stay hydrated while out under the sun.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="section stagger ">             
            <div className="sectionCont large">
              <div id="head_11" className="textCont textOnly">
                <h2>GETTING THERE</h2>
                <div className="subsection">
                  <h3>Flight Booking</h3>
                  <h4>
                    For international travelers, it is recommended to book a roundtrip flight to Manila, and then arrange domestic travel afterwards.
                    <br />
                    <br />
                    From Manila, it is recommended to fly into Caticlan (Airport Code: MPH). We suggest that you book your flights ahead of time. Below are the airlines that fly from Manila to Caticlan daily.
                    <br />
                    <br />
                    <b>Philippine Airlines</b> - <a href="https://www.philippineairlines.com/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.philippineairlines.com/</a>
                    <br />
                    <b>Cebu Pacific Air</b> - <a href="https://www.cebupacificair.com/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.cebupacificair.com/</a>
                    <br />
                    <b>AirAsia</b> - <a href="https://www.airasia.com/en/gb" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.airasia.com/en/gb</a>
                    <br />
                    <b>Royal Air PH</b> - <a href="https://flyroyalair.com/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://flyroyalair.com/</a>
                    <br />
                    <br />
                    From Caticlan airport, it is a short vehicle ride to Jetty port, and a 10-20 minute ferry ride to the island.
                    <br />
                    <br />
                    If you are staying at the Crimson, please forward your confirmed flight itinerary to Crimson Reservation so they can 
                    arrange your pick-up from Caticlan Airport to the resort.
                  </h4>
                </div>
                  <div className="subsection">
                  <h3>Airport Transport Booking</h3>
                  <h4>
                    If your accommodation does not include airport transfers and you wish to avail, here are some of the Transport Company in the Island that offers shared door to door transfer and private transfer via Caticlan Airport:
                    <br />
                    <br />
                    <b>Layod’s Travel & Tours</b> - <a href="https://www.facebook.com/layodstransport/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.facebook.com/layodstransport/</a>
                    <br />
                    <b>Southwest Travel & Tours</b> - <a href="https://www.southwesttours.com.ph/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.southwesttours.com.ph/</a>
                    <br />
                    <b>MyBoracayGuide</b> - <a href="https://www.myboracayguide.com/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.myboracayguide.com/</a>
                    <br />
                    <b>Island Star Express</b> - <a href="https://www.islandstarexpress.com/" target="_blank" rel="nofollow" style={{'display':"inline"}}>https://www.islandstarexpress.com/</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="section stagger ">             
            <div className="sectionCont large">
              <div id="head_11" className="textCont textOnly">
                <h2>WHERE TO STAY</h2>
                <div className="subsection">
                  <h4>During the time of the wedding, it is recommended to stay in station 0 or 1, so as to have quick and easy access to the venue. 
                  Should you arrive before the events, or decide to stay after, it is recommended to stay in station 1 or 2 so as to be more central
                  on the island and have acess to the island's amenities and activities.</h4>
                  < br/>
                  <h3>STATION 0</h3>
                  <h4>
                    Station 0 has many five star resorts and private villas for rent on AirBnb.
                    <br />
                    <br />
                    The Crimson Resort and Spa has provided the wedding code <b>WEDDING15</b> (15% discount based on Best Available Online Rates) for guests of the wedding.
                     To reserve a room and take advantage of special rates, booking must be booked thru <a href="https://booking.crimsonhotel.com/ibe/search?hid=4145&lang=EN&cur=PHP&_affclk=adn:3817:2159795:EAIaIQobChMI1sW5g73T_wIVlNTICh3BKAfBEAAYAiAAEgInmPD_BwE:8002y1:#q&guests=A,A&in=2023-11-28&out=2023-12-1&coupon=WEDDING15" target="_blank" rel="nofollow" style={{'display':"inline"}}><u>the Crimson Boracay Website</u></a>
                    <br/>
                    <br/>
                    <b>RATE INCLUSIONS:</b>
                    <br />
                    <i>Daily breakfast for two (2) persons</i>
                    <br />
                    <br />
                    <i>Complimentary Round-trip land and boat transfers from Godofredo Ramos Domestic Airport or Caticlan Jetty port for rooms booked with an average room rate above P11,000++ per night. Prior notice of confirmed flight or arrival details are required to arrange transfers.</i>
                    <br />
                    <br />
                    <i>For rooms booked with an average room rate of P11,000++ and below, round-trip land and boat transfers may be booked for a special rate of P1,750 net per person. Prior notice of confirmed flight or arrival details are required to arrange transfers.</i>
                    <i>Complimentary mini-bar items upon arrival</i>
                    <br />
                    <br />
                    <i>One-time welcome healthy drink to be served in the available outlet</i>
                    <br />
                    <br />
                    <i>Access to the Fitness Centre, swimming pools and beach</i>
                    <br />
                    <br />
                    <i>Unlimited Hi-speed WIFI internet access</i>
                    <br />
                    <br />
                    You may also contact them through their email and contact numbers below:
                    <br />
                    <br />
                    <b>T</b>: (+36) 669 5888 
                    <br />
                    <b>T Local</b>: (+36) 286 2700 
                    <br />
                    <b>M</b>: (+63) 998 596 4626 
                    <br />
                    <b>E</b>: boracay.reservation@crimsonhotel.com 
                  </h4>
                  <br/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="content_page p41467" >
        <div className="section full addPadd" style={{'paddingBottom': '20px'}}>                                                                                
          <div className="sectionCont small">
            <div className="imgCont" style={{'backgroundColor': '#ccb16f'}}>
              <div id="head_10" className="textCont">
                <h2 style={{'color': '#ffffff', 'fontSize': '3.75em'}}>RSVP</h2>
                <div className="subsection"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="section stagger">             
          <div className="sectionCont large">
            <div id="head_11" className="textCont textOnly">
              <div className="subsection">
                <h3>RSVP Form</h3>
                <h4>Please kindly fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAPmSkAlFXZesgOzxiskiI5xQujZk8xS5n6BOjPuvIX4dOWw/viewform?usp=sf_link" target="_blank" rel="nofollow" style={{'display':"inline"}}><u>this form</u></a> to RSVP</h4>
                <br/>
                <br />
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
