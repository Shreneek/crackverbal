import React from 'react';
import './subscribe.css'


const Subscribe = () => {

    return (
        <section id='section5'>
            <div className='section'>
                <h1 className='section-title'>Subscribe To Our Newsletter Where We Share Weekly Insights On All Things Career</h1>
                <h3 className='red-color'>& GET A FREE EBOOK IN YOUR MAIL</h3>
                <div className='subscribe-section'>
                    <form className='form'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className='textbox'
                            required
                        />
                        <input
                            type="text"
                            name="contact"
                            placeholder="Mobile Number"
                            className='textbox'
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className='textbox'
                            required
                        />
                        <div>
                            <button className='btn' type="submit" >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
