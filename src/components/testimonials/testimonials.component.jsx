import React from "react";
import "./testimonials.css";
import customer1 from "../../assets/Reshma.png";
import customer2 from "../../assets/puneet.png";
import customer3 from "../../assets/vrinda.png";
import customer4 from "../../assets/Harshvardhan.png";
import customer5 from "../../assets/dp.jpg";
import customer6 from "../../assets/yash.jpg";
import Card from "../card/card.component";

const userData = [
  {
    profilePic: customer1,
    name: "Reshma",
    score: "760",
    bio: "Crackverbal was one of the best decisions I have ever made. And because of the trust I had in Crackverbal for GMAT, I didn’t have to think twice about opting for the Crackverbal Admit Prep program.",
  },
  {
    profilePic: customer2,
    name: "Puneet",
    score: "710",
    bio: "As my GMAT score wasn’t high, my application needed to stand out. Crackverbal helped me take out the unique parts of my story and project them as strengths. I felt very comfortable going through the whole MBA application process.",
  },
  {
    profilePic: customer3,
    name: "Vrinda",
    score: "680",
    bio: "Many of my friends recommended Crackverbal for my MBA journey. Right from the first call, my experience with the Crackverbal team was extremely positive and my mentors were encouraging & motivating throughout.",
  },
  {
    profilePic: customer4,
    name: "Harshvardhan",
    score: "760",
    bio: "I had two major pain points that I needed help with – not understanding how to eliminate the wrong options & spending too much time on each question. My mentor was very patient & helped me tackle these head-on.",
  },
  {
    profilePic: customer5,
    name: "Yash",
    score: "700",
    bio: "I can't express enough how grateful I am to have found Crackverbal. Choosing Crackverbal for GMAT was a game-changer for me. Their dedication and expertise in test prep are unparalleled, and I couldn't have made a better decision for my future.",
  },
  {
    profilePic: customer6,
    name: "Aman",
    score: "720",
    bio: "Crackverbal has truly been a life-changing experience for me. Opting for Crackverbal for GMAT was a decision I'll never regret, and the Crackverbal Admit Prep program was the cherry on top, and I can confidently say that it was one of the best choices I've ever made in my academic journey.",
  }
];
function Testimonials() {
  return (
    <section id="section4">
    <div className="section">
      <h1 className="section-title">Recent Reviews of Our Alumni</h1>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/Ev739wXDMWg"
          title="YouTube Video"
          allowFullScreen = "true"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/DlM4gqClios"
          title="YouTube Video"
          allowFullScreen = "true"
        ></iframe>
      </div>
      <div className="grid-container">
        {userData.map((user) => (
          <Card
            name={user.name}
            profilePic={user.profilePic}
            score={user.score}
            bio={user.bio}
          />
        ))}
      </div>
      <div>
        <button className="testimonials-btn" type="submit">
          Read More Testimonials
        </button>
      </div>
    </div>
    </section>
  );
}

export default Testimonials;
