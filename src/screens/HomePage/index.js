import React from 'react';
import { useAuth } from '../../context/AuthContext';
import DFRoundedLogo from "../../assets/img/df-rounded.webp";
import "./index.css";

const HomePage = (props) => {

    const { user } = useAuth();

    return (
        <section className="home-section">
            <div className="home-welcome">
                <div className="columns">
                    <div className="column is-8">
                        <section className="hero is-medium home-welcome-hero">
                            <div className="hero-body">
                                <div className="columns">
                                    <div className="column is-7 is-align-self-center">
                                        <h1 className="title is-1">Hello {user ? user.displayName.split(" ")[0] : "There"}!</h1>
                                        <p className="subtitle mt-2">
                                            We are excited to have you on board with us. DevFest community events connect you with other developers near you. Join for 1:1's, networking, and more.
                                        </p>
                                    </div>
                                    <div className="column is-5 has-text-centered">
                                        <img src={DFRoundedLogo} alt="DevFest" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="column is-4">
                        <section className="hero is-medium home-status-hero">
                            <div className="hero-body">
                                <h1 className="title is-3">Application Status</h1>
                                <img className="mt-3 mb-3" src="https://io.google/2022/app/images/codelabs-logo.svg" alt="DevFest"/>
                                <h1 className="title is-1">Approved</h1>
                                <p className="subtitle is-5">
                                    Your application has been approved! See you at DevFest Sri Lanka.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="bottom-section mt-6 has-text-centered">
                <h1 className="title is-1 has-text-white">Happy Coding!</h1>
            </div>
        </section>
    );
}

export default HomePage;