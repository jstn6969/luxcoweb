import React, { useState } from 'react';
import './App.css';  // Import your CSS file for styling


function App() {
    // Add these state variables right here
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
  
  return (
    <div className="App">
      {/* Hero Section */}
      <div class="INTROwrapper">
      <section className="INTROBLOCK">
        <div className="INTROBLOCK-content">
          <h1>We Turn <span className="KEYWORDS">Creators</span> Into <span className="KEYWORDS">Stars</span></h1>

          <h1>Are You Ready To <span className="KEYWORDS">Shine?</span></h1>

          <p>At <span className="KEYWORDS">Luxco Agency,</span> We Transform Creators Into Stars by <span className="KEYWORDS">Managing, Growing, & Scaling </span>Your 
            Personal Brand. Book A Call With Us Below!</p>
          <a href="#apply" className="cta-btn">BECOME A MODEL</a>

        </div>

      </section>
      </div>
      
      {/* Results Section */}
      <section className="results">
        <h2 className="results-header">Want Results Like This?</h2>
        <div className="results-images">
          <img src="https://cdn-ilamcbj.nitrocdn.com/VoJvJPTrAUDIxhbQvjRvVtmtbjLDUFYk/assets/images/optimized/rev-4816283/manageher.io/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-30-at-11.52.19-1-e1717080820378.jpeg" alt="Result 1" className="results-image" />
          <img src="https://cdn-ilamcbj.nitrocdn.com/VoJvJPTrAUDIxhbQvjRvVtmtbjLDUFYk/assets/images/optimized/rev-4816283/manageher.io/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-19-at-09.30.42-3.jpeg" alt="Result 2" className="results-image" />
          <img src="https://cdn-ilamcbj.nitrocdn.com/VoJvJPTrAUDIxhbQvjRvVtmtbjLDUFYk/assets/images/optimized/rev-4816283/manageher.io/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-30-at-11.52.19-e1717080798489.jpeg" alt="Result 3" className="results-image" />
         </div>
        <div className="resultsCTA">
        <a href="#apply" className="cta-btn">BECOME A MODEL</a>
        </div>
        
      </section>


      {/* Guaranteed Success Section */}
      <section className="guaranteed-success">
        <div className="guaranteed-content">
          <h2 className="guaranteed-header">We Promise You 2000 OnlyFans Subscribers in 180 Days</h2>
          <h3 className="guaranteed-subheader">If we don’t, we’ll give you a $2000 refund!</h3>

          <a href="#apply" className="cta-btn">BECOME A MODEL</a>
        </div>
      </section>


{/* Why Join Luxco Section */}
<section className="why-join-luxco">
  <h2 className="why-join-header">Why Join Luxco Agency?</h2>
  <p className="servicesdescription">
    See why so many models from all over the world want to work with us! From new to experienced models, From making 0-100k per month, 
    From Los Angeles to Monaco, we want to work with all models!

  </p>

  <div className="why-join-boxes">
    <div className="why-join-box">
      <h3>⚡ Fast Results</h3>
      <p>We’re committed to helping you reach your goals as quickly and efficiently as possible. You’ll achieve financial freedom faster, 
        leaving you more time to enjoy what you love.</p>

        <div className="model-success">
        <img src="https://i.pinimg.com/enabled_lo/564x/47/39/5f/47395f8a9a967b670b17c42153d1f1a1.jpg" alt="Model 1" className="model-pfp" />
        <div className="model-info">
          <h4>From 0-113k a Month in 6 Months</h4>
          <p>From gym  goer to a prominent  gym influencer in under 6 months!</p>
        </div>
      </div>

      <div className="model-success">
        <img src="https://i.pinimg.com/enabled_lo/564x/c5/48/a0/c548a058ff9c69742705a2e8a2fd8cea.jpg" alt="Model 2" className="model-pfp" />
        <div className="model-info">
          <h4>From 5k-50k a Month in 3 Months</h4>
          <p>Cosplaying for fun to one of the biggest cosplayers in the space!</p>
        </div>
      </div>

      <div className="model-success">
        <img src="https://i.pinimg.com/736x/51/74/c9/5174c9b62a5888638703941785153642.jpg" alt="Model 3" className="model-pfp" />
        <div className="model-info">
          <h4>From 7k-75k a Month in 3 Months</h4>
          <p>Already having a following, our gym girl got to her goals even faster!</p>
        </div>
      </div>
    </div>

    <div className="why-join-box">
      <h3>👑 We Prioritize Your Comfort</h3>
      <p>At Luxco, we respect your boundaries. Whether you want to show a little or none at all, we provide the support
         you need. Our models have reached success without nudity, proving that comfort and profit can go hand-in-hand.</p>
         
         <div className="model-success">
        <img src="https://i.pinimg.com/736x/7a/80/c1/7a80c1663255037fcdfe3b6977cad20d.jpg" alt="Model 1" className="model-pfp" />
        <div className="model-info">
          <h4>Posting No Nudity & Making 70k a Month</h4>
          <p>Showing the minimum, you can also get paid to be pretty!</p>
        </div>
      </div>

      <div className="model-success">
        <img src="https://i.pinimg.com/736x/6d/6a/10/6d6a109e4329db606289933d4d1eea3a.jpg" alt="Model 2" className="model-pfp" />
        <div className="model-info">
          <h4>Posting Minimal Nudity & Making 67k a Month</h4>
          <p>Posting similar to Instagram, but making 67k a month more than before!</p>
        </div>
      </div>
    </div>

    <div className="why-join-box">
      <h3>📈 Our Brands & Strategies</h3>
      <p>With our data-driven approach, we ensure consistent growth for every model. We tailor strategies to your goals,
         posting you on various theme pages and apps to get you the most guaranteed success. </p>

         <div className="model-success">
        <img src="https://i.pinimg.com/736x/96/ee/3d/96ee3d966a433c590cc29d4bf88dd913.jpg" alt="Model 1" className="model-pfp" />
        <div className="model-info">
          <h4>@luxcoagency</h4>
          <p>Our main page! We post all of our models here!</p>
        </div>
      </div>

      <div className="model-success">
        <img src="https://i.pinimg.com/736x/a2/69/8b/a2698b0ed2ab1b8930cc47e4cd6aae07.jpg" alt="Model 2" className="model-pfp" />
        <div className="model-info">
          <h4>@luxmodels</h4>
          <p>The place to post all our reels! We work with other agency models too!</p>
        </div>
      </div>
    </div>
    
    <div className="why-join-box">
      <h3>💬 Personalized Support</h3>
      <p>You’re never alone with Luxco. We do one-on-one calls each week to help you navigate the ups and downs of
         being a creator. All our models has acess to our team 24/7 in case you need help with anything!</p>
    </div>
  </div>

  <a href="#apply" className="cta-btn">Join Our Models</a>
</section>





      {/* Services Section */}
      <section className="services">
        <h2 className="servicesheader">We Make It Easy For You To Shine</h2>
        <p className="servicesdescription">
    At Luxco Agency, we simplify the journey for creators. We take care of the hard parts so you can focus on what matters most. Our goal is to give you a stress-free experience while boosting your visibility
    and success.
        </p>
        <div className="service-list">
          <div className="service-item">
            <h3>Account Managment</h3>
            <p>Managing a successful account can be overwhelming, but that’s where we come in. We handle everything
               from content planning to fan engagement, keeping you at the front of trends while optimizing your growth. 
               Our expert team ensures your account is running smoothly, so you can focus on creating and enjoying a stress-free 
               journey to success.
            </p>
          </div>
          <div className="service-item">
            <h3>Content Creation & Strategy</h3>
            <p>Creating captivating content is the most important part of your brand's success. At Luxco Agency, we specialize in creating
              the most eye catching content for your specific niche so that you can become the face of it. We help film if needed and edit 
              all content to give your fans the quality they deserve. We focus on consistency because thats the best way to grow your brand.
               </p>
          </div>
          <div className="service-item">
            <h3>Chat Management</h3>
            <p>Engaging with fans is crucial to building a loyal community, and we make it effortless. Selling content through chatting
               is the most lucrative part of onlyfans & will make you up to 10x what you make from subscribers! We have a team of chatters
               that are the best at selling content so that you dont have to worry about it at all.


            </p>
          </div>
          <div className="service-item">
            <h3>Marketing & Promotion</h3>
            <p>
            Maximizing your reach is the key to growing your brand, and our network of models/theme pages can easily help with that.
            Although we mainly focus on organic growth and marketing, we use paid ads to help you get a headstart with your page.
            We specialize your content to your niche/category so that you can grow your audience as fast as possible!
             
            </p>
          </div>
        </div>
  

      </section>





{/* FAQs Section */}


<section className="faqs">
  <h2 className="faqs-header">Frequently Asked Questions</h2>

  <div className="faq-item">
    <button 
      className="faq-question"
      onClick={() => setIsOpen1(!isOpen1)}
    >
      How do i know if this agency is right for me?
      <span className="faq-icon">{isOpen1 ? '−' : '+'}</span>
    </button>
    <div className={`faq-answer ${isOpen1 ? 'active' : ''}`}>
      <p>In this day and age viewership & visibility is the new currency. If you want to be seen by millions of people and be succesfull with
        minimum effort, you found the right agency. If you want to start but dont know how or have the connections to do it, you are the perfect fit for us!</p>
    </div>
  </div>

  <div className="faq-item">
    <button 
      className="faq-question"
      onClick={() => setIsOpen2(!isOpen2)}
    >
      How Fast Until I see Results?
      <span className="faq-icon">{isOpen2 ? '−' : '+'}</span>
    </button>
    <div className={`faq-answer ${isOpen2 ? 'active' : ''}`}>
      <p>Within 3 Months, we have gotten every single one of our new unexperienced models to go from 0 to 10k a month. With simply posting content 
        consistently, you can build a secure future in a couple of months!</p>
    </div>
  </div>

  <div className="faq-item">
    <button 
      className="faq-question"
      onClick={() => setIsOpen3(!isOpen3)}
    >
      What if I Don't Want to Show Nudity?
      <span className="faq-icon">{isOpen3 ? '−' : '+'}</span>
    </button>
    <div className={`faq-answer ${isOpen3 ? 'active' : ''}`}>
      <p>Believe it or not, the highest earners dont post as much nudity as you might think. By focusing on marketing and funneling, 
      you can achieve the best results. Although selling content is the most profitable revenue stream, we respect your boundaries and will
      do our best to help you at any stage.</p>
    </div>
  </div>

  <div className="faq-item">
    <button 
      className="faq-question"
      onClick={() => setIsOpen4(!isOpen4)}
    >
      Is There a Guarantee for Growth?
      <span className="faq-icon">{isOpen4 ? '−' : '+'}</span>
    </button>
    <div className={`faq-answer ${isOpen4 ? 'active' : ''}`}>
      <p>Yes! We promise 2000 subscribers in 180 days or $1500 if we don't meet this goal, ensuring you have peace of mind. We have never
        had to give this to any of our models and dont plan to because our reputation is very important to us.</p>
    </div>
  </div>

  <div className="faq-item">
    <button 
      className="faq-question"
      onClick={() => setIsOpen5(!isOpen5)}
    >
      How is Luxco different from other agencies?
      <span className="faq-icon">{isOpen5 ? '−' : '+'}</span>
    </button>
    <div className={`faq-answer ${isOpen5 ? 'active' : ''}`}>
      <p>With multiple years of experience, we have built a network that ensures you will be seen by milions of people. We go off the data
         and perfect your content to maximize reach & conversions.</p>
    </div>
  </div>

  <div className="faq-item">
    <button 
      className="faq-question"
      onClick={() => setIsOpen6(!isOpen6)}
    >
      What support do I get as a Luxco model?
      <span className="faq-icon">{isOpen6 ? '−' : '+'}</span>
    </button>
    <div className={`faq-answer ${isOpen6 ? 'active' : ''}`}>
      <p>You can reach us by instagram at any time of day however since we do have many models from different parts of the world,
         we usually reply later on in the day. Any problem you have we can get it resolved quickly.</p>
    </div>
  </div>
</section>















<footer className="footer">


  <h2 className="footer-main-message">We’re Waiting for You!</h2>
  <p className="footer-subtext">We understand this is a big decision and want to help you through it all!</p>
  <p className="footer-subtext_1">Where You Can Find Us:</p>

  <div className="footer-social">
    <a href="https://instagram.com/luxcoagency" target="_blank" rel="noopener noreferrer" className="social-icon">
      <img width="40" height="40" src="https://img.icons8.com/fluency/480/instagram-new.png" alt="instagram-new"/>
      <span className="social-text">@luxcoagency</span>
    </a>
    <a href="https://instagram.com/pimpzaddyjustin" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img width="40" height="40" src="https://img.icons8.com/fluency/480/instagram-new.png" alt="instagram-new"/>
      <span className="social-text">@pimpzaddyjustin</span>
    </a>
  
  </div>



  <hr className="footer-divider" />
  <p className="footer-credit">Website made by the sexy ceo justin | JSTN ENTERPRISES LLC</p>
</footer>





    </div>
  );
}






export default App;
