import React from "react";
import './Hero.css';
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="best-ad">
                    <motion.div
                        initial={{ left: mobile ? "178px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}>
                    </motion.div>
                    <span>The Best Fitness Club In The Town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span><NumberCounter start={100}
                            end={140}
                            delay={4}
                            preFix="+" /></span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter start={900}
                        end={1000}
                        delay={4}
                        preFix="+" /></span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span><NumberCounter start={30}
                        end={50}
                        delay={4}
                        preFix="+" /></span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={heart} alt="Heart Rate" className="heart-img" />
                    <span>Heart Rate</span>
                    <span>115 bpm</span>
                </motion.div>
                <div>
                    <img src={hero_image} alt="" className="hero_image" />

                    <motion.img
                        initial={{ right: '11rem' }}
                        whileInView={{ right: '20rem' }}
                        transition={transition}
                        src={hero_image_back} alt="Poster Back" className="hero_image_back" />
                </div>
                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero