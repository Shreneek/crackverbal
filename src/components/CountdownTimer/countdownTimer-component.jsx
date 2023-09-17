import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Import your CSS file for styling

function CountdownTimer() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set your target date here (replace with your desired date)
        const targetDate = new Date('2023-12-31T23:59:59').getTime();

        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const timeLeft = targetDate - currentDate;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });

            if (timeLeft < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (

        <div className="section">
            <h1>Access Free Trail Now</h1>
            <div className="countdown-timer">
                <div className="countdown-box">
                    <div className="countdown-value">{countdown.days}</div>
                    <div className="countdown-label">Days</div>
                </div>
                <div className="countdown-box">
                    <div className="countdown-value">{countdown.hours}</div>
                    <div className="countdown-label">Hours</div>
                </div>
                <div className="countdown-box">
                    <div className="countdown-value">{countdown.minutes}</div>
                    <div className="countdown-label">Minutes</div>
                </div>
                <div className="countdown-box">
                    <div className="countdown-value">{countdown.seconds}</div>
                    <div className="countdown-label">Seconds</div>
                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;