import React from 'react';
import './about.css'
import arun from '../../assets/arun.png'
import shree from '../../assets/shree.png'
import standford from '../../assets/stanford.png'
import wharton from '../../assets/wharton.png'
import isb from '../../assets/isb.png'
import rotman from '../../assets/rotman.webp'
import insead from '../../assets/insead.png'
import nus from '../../assets/nus.jpg'
import tepper from '../../assets/tepper.jpg'
import michigan from '../../assets/michigan.jpg'
import schulich from '../../assets/schulich.png'
import cambridge from '../../assets/cambridge.png'
import johnson from '../../assets/johnson.png'
import forecast from '../../assets/forecast.jpg'
import foster from '../../assets/foster.webp'


const aboutData = [
    {
        name: 'Arun Jagannathan',
        title: 'Co-Founder CEO | Crackverbal | GMAT Verbal & MBA Coach',
        bio: 'Arun has trained and mentored over 30K students for the GMAT, GRE and applications in the past 12 years. Arun has personally designed the Crackverbal GMAT curriculum from the ground up to include every feature he saw as missing in traditional courses and has also devised all-new techniques to help out students.  He is an active and well-respected member on popular online GMAT forums such as Pagalguy.com (member since 2003, and one of the official MBA consultants), beatthegmat.com and gmatclub.com.His students have made it into top B-Schools such as INSEAD, Wharton, Harvard, Stanford, and ISB to name a few.',
        src: arun
    },
    {
        name: 'Shree Kurup',
        title: 'Co-Founder COO | Crackverbal | MBA Admissions Coach',
        bio: `Fellow of the ISB Goldman Sachs 10,000 Women Entrepreneurs program.
        Mentor with the Cherie Blair Foundation where she mentors women entrepreneurs from across the world."As an entrepreneur, if there is one lesson you learn it is this: There is no problem that cannot be fixed."Grew Crackverbal from 30 students to 30,000+ students through growth hacking and gumption.`,
        src: shree
    }
]

const logos = [
    standford, wharton, isb, rotman, insead, nus, tepper, michigan, schulich, cambridge, johnson, forecast, foster
]
function About() {
    return (
        <section id="section3">
            <div className='section'>
                <h1 className="section-title">About US</h1>
                <p className='sub-title'>Crackverbal is composed of diverse team members who are united by the mission to build a world-class test-prep and admissions company to help students make smarter career choices</p>
                <div className="cards">
                    {aboutData.map((data) => (
                        <div className='card'>
                            <div className="card_content">
                                <img src={data?.src} alt='profile' className='img-data'></img>
                                <h4>{data?.name}</h4>
                                <h5>{data?.title}</h5>
                            </div>
                            {/* <p className="card_text">{data?.bio}</p> */}
                        </div>
                    ))}
                </div>
                <h1 className='section-title'>University Alum Represent</h1>
                <div className='about-2'>
                    <div className="logos">
                        {logos.map((logo) => (
                            <div>
                                <img className='logo' src={logo} alt='profile'></img>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
