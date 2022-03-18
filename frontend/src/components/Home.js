import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import Resume from '../Resume.pdf';
import PFP from  '../PFP.jpg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Home() {
  return (
    <div className="wrapper">
        <div className="pfp">
            <img src={PFP} className="pfp" alt="Angelyn's profile" />
        </div>
        <div className="about-me">
            <div className="banner">
                <h1>Angelyn Domingo</h1>
                <h3>coder, organist, learner</h3>
            </div>
            <p>
                I am a Filipina and a first-generation college student. 
                I am currently a sophomore majoring in computer science at George Mason University with an interest in 
                web development, software engineering, and human-computer interaction.
                Besides computing, I also have a passion for music and enjoy playing the piano/organ for my church.
                When I am not coding or studying, I am usually playing Genshin Impact or watching anime with my family 
                and friends.
            </p>
        </div>
        <div className="resume">
        <Document 
            file={Resume} 
            options={{workerSrc: "pdf.worker.js"}}
            onLoadError={console.error}
        >
            <Page pageNumber={1} />
        </Document>
        </div> 
    </div>
  );
}

export default Home;
