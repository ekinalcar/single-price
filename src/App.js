import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <h1>Join our community</h1>
          <h2 className="yellow-heading">
            30-day, hassle-free money back guarantee
          </h2>
          <p className="light-black">
            Gain access to our full library of tutorials along with expert code
            reviews.
            <br />
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </section>
        <div className="section-container">
          <section className="cyan">
            <h3>Monthly Subscription</h3>
            <p className="faded">
              <span>$29</span> per month
            </p>
            <p>Full access for less than $1 a day</p>
            <button type="button">Sign Up</button>
          </section>
          <section className="grayish-blue">
            <h2>Why Us</h2>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
