import React from 'react';
// import './css/skeleton.css';
// import './css/normalize.css';
// import './css/custom.css';
import logo_white_bg from  './images/logo_white_bg.svg';

import toolImage from './images/tool.svg';
import garbageImage from './images/garbage.svg';
import bitcoinImage from './images/bitcoin.svg';
import HeroSection from './components/HeroSection';
// import ValuePropositionSection from './components/ValuePropositionSectionComponent'
// import ContactSection from './components/ContactSectionComponent';
// import StuffSection from './components/StuffSectionComponent';
// import FooterSection from './components/FooterSectionComponent';
// import FoaasProxy from './utils/FoaasProxy.js';

function App() {

  const content = {
    SiteLogo: logo_white_bg,
    // courtesy of https://lukaszadam.com/illustrations
    MainGreetingMessage: "Jag jobbar data.",
    ContactTitle:"Kontakt",
    ContactText: "Som alla framgångsrika människor är jag extreeemt upptagen",
    ContactButtonText: "To be implemented",
    ValuePropositions: [
      {Image: toolImage, Title: "Rätt verktyg", Description: "Man ska ha rätt verktyg för jobbet. Jag har en jävulsk massa verktyg, och är helt säker på att något av dem är rätt för ditt jobb!"},
      {Image: garbageImage, Title: "Databas", Description: "Oavsett om du väljer SqlServer, Oracle eller någon sån modern NoSql-databas så är databasen i princip en soptunna du slänger data i. Jag kan hjälpa till med din sophantering."},
      {Image: bitcoinImage, Title: "Säkerhet", Description: "Det spelar ingen roll vilken ljusskygg verksamhet du ägnar dig åt. Jag kan skydda din information från snokande ögon."}
    ]
  };

  // const fooasProxy = new FoaasProxy();


  return (
  <div className="container">
    <HeroSection greeting={content.MainGreetingMessage} logo={content.SiteLogo}></HeroSection>
    {/* <ValuePropositionSection valuePropositions={content.ValuePropositions}></ValuePropositionSection>
    <ContactSection title={content.ContactTitle} text={content.ContactText} buttonText={content.ContactButtonText}></ContactSection>
    <StuffSection></StuffSection>
    <FooterSection foaasProxy={fooasProxy}></FooterSection> */}
  </div>
  );
}


export default App;
