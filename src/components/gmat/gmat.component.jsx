import React from 'react';
import './gmat.css'
import '../subscribe/subscribe.css'
const gmatData = [
    {
        title: 'CONNECT',
        info: 'Our Coaches will help you create a plan and help you with a highly effective learning path that’s unique to your goals and Target GMAT Score.'
    },
    {
        title: 'CONSUME',
        info: `Concepts, Sessions, and More - Depending on the path that's best for you, you begin your learning journey through our “Learn Paths” optimized for scoring and success.`
    },
    {
        title: 'CLARIFY',
        info: 'Confidently clarify concepts and deep-dive into harder questions with our coaches. For On-Demand Prep, you can buy credits to gain personal access to Coaches too.'
    }
]

const gmatDetail = [
    {
        title: '01. Connect',
        info: 'Our Coaches will help you create a "Optimised Leaning Path" plan and help you with a highly effective learning path that’s unique to your goals and Target GMAT Score.',
        keyPoints: [
            'GMAT Planner + Target Score Session',
            'Access to Cheatsheets',
            'Weekly Goal Progress & Analytics',
            'Review Session with Facilitator'
        ]
    },
    {
        title: '02. Consume - Concepts + Techniques',
        info: `Concepts, Sessions, and More - Depending on the path that's best for you, you begin your learning journey through our 'Learn Paths' optimized for scoring and success.`,
        keyPoints: [
            `Compute™ LIVE - 40+ Hours of GMAT Quant`,
            `Compre™ LIVE - 40+ Hours of GMAT Verbal`,
            `80+ Hours of On-Demand Recordings`
        ]

    },
    {
        title:'03. Correct',
        info:"Sectional Tests after each sub-module to test clarity of concepts and your understanding of 'Quick Hacks'.",
        keyPoints:[
            'We cover more than 55 sectional tests (1200+ Questions) to ensure you got it right from the start.',
            "Clear video explanation of 'How' to solve questions effectively and with incredible accuracy",
            'Scores to visualize your performance and path corrections to increase your learning efficiency and effectiveness.'
        ]
    },
    {
        title:'04. Crack The GMAT - Mock The Mat',
        info:'The best way to crack the GMAT in one go is to score well in the Mock Tests. They mirror your actual performance in the GMAT. We have 5 Full-length tests to get you to the score improvement you need.',
        keyPoints:[ 
            '5 Full Length Mock tests that mirror with accuracy your real-world GMAT score.',
            'GMAT Club CATs + Question Bank - Quant and Verbal to ensure you are moving ahead in the right direction and achieving your target score.'
        ]
    }
]
function Gmat() {
    return (
        <section id='section2'>
        <div className='section'>
            <h1 className='section-title'>We Help You to Accelerate Your GMAT Prep in 3 Ways</h1>
            <div className="card-section">
                {gmatData.map((data) => (
                    <div className='short-tiles'>
                        <h4 className='data-title'>{data?.title}</h4>
                        <hr className='line'></hr>
                        <p>{data?.info}</p>
                    </div>
                ))}
            </div>
            <h2>Our Students Have Seen Results By Applying Our <span className='red-color'>"Magic Method"</span></h2>
            <p className='sub-title'>The most effective techniques revealed ever. That too, with a personal touch. Carefully designed & battle-tested On-Demand GMAT Mastery Program. Best-in-class platform with access to a highly interactive community. Access to Coaches & guides to help you address queries.</p>
            <div className="content">
                {gmatDetail.map((data) => {
                    const keyPoints = data.keyPoints
                    return (
                        <div className='tile'>
                            <h4 className='section-title'>{data?.title}</h4>
                            <p>{data?.info}</p>
                            <ul className='list-data'>
                                {
                                    keyPoints.map(keys => 
                                        <li>{keys}</li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                })
                }

            </div>
        </div>
        </section>
    );
}

export default Gmat;
