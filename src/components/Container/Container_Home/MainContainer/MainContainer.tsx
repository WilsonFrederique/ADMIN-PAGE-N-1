import React from 'react';
import './MainContainer.css';
import Banner from '../../../../assets/images/3.jpg';
import Card1 from '../../../../assets/images/1.jpg';
import Card2 from '../../../../assets/images/2.jpg';
import Card3 from '../../../../assets/images/3.jpg';
import Card4 from '../../../../assets/images/1.jpg';
import Card5 from '../../../../assets/images/2.jpg';
import Card6 from '../../../../assets/images/3.jpg';
import CardMain from '../CardMain/CardMain';
import MainRightTop from '../MainRightTop/MainRightTop';
import MainRightBottom from '../MainRightBottom/MainRightBottom';

const MainContainer = () => {
  return (
    <div className='mainContainer'>
        <div className="left">
            <div className="banner" 
                style={{ 
                    backgroundImage: `url(${Banner})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover'
                }}>
                <div className="textContainer">
                    <h1>E-COMMERCE</h1>
                    <h2>1.5 TH</h2>
                    <h3>Uploaded by Walle Fred</h3>
                    <div className='bid'>
                        <a href="#" className="button1">Bid Now</a>
                        <p>Ending in <span>2d:15h:30m</span></p>
                    </div>
                </div>
            </div>
            
            <div className="cards">
                <div className="filters">
                    <div className="popular h2-btn">
                        <h2>Feed</h2>
                        <a href="#" className="button2">Popular</a>
                    </div>
                    <hr className='BtnHr' />
                    <div className="filter_buttons">
                        <a href="#" className="button1">All</a>
                        <a href="#" className="button2">Illustration</a>
                        <a href="#" className="button2">Art</a>
                        <a href="#" className="button2">Games</a>
                    </div>
                </div>
                <main>
                    <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
                    <CardMain imgSrc={Card2} title={"Cubic Thunder"} hearts={"15"} />
                    <CardMain imgSrc={Card3} title={"Cubic Thunder"} hearts={"35"} />
                    <CardMain imgSrc={Card4} title={"Cubic Thunder"} hearts={"45"} />
                    <CardMain imgSrc={Card5} title={"Cubic Thunder"} hearts={"55"} />
                    <CardMain imgSrc={Card6} title={"Cubic Thunder"} hearts={"85"} />
                    <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
                    <CardMain imgSrc={Card2} title={"Cubic Thunder"} hearts={"15"} />
                    <CardMain imgSrc={Card3} title={"Cubic Thunder"} hearts={"35"} />
                    <CardMain imgSrc={Card4} title={"Cubic Thunder"} hearts={"45"} />
                    <CardMain imgSrc={Card5} title={"Cubic Thunder"} hearts={"55"} />
                    <CardMain imgSrc={Card6} title={"Cubic Thunder"} hearts={"85"} />
                </main>  

                <div className="right-bottom-responsive">
                    <MainRightTop />
                    <MainRightBottom />
                </div>
                
                <footer>
                     <p className='p'>
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     pariatur odit, voluptatem cum eius repellendus possimus totam distinctio laboriosam sed est.
                     </p>
                </footer>
            </div>
        </div>

        <div className="right">
            <MainRightTop />
            <MainRightBottom />
        </div>
    </div>
  );
}

export default MainContainer;
