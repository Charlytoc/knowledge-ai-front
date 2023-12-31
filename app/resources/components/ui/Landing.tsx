import React from 'react';
import Image, { StaticImageData } from 'next/image';
import books from '@/app/resources/files/images/reading-books.png'
import teams from '@/app/resources/files/images/teams.png'
import metrics from '@/app/resources/files/images/metrics.png'
// Define the prop types for LandingSection component

interface ILandingSectionProps {
    title: string
    description: string
    imageUrl?: StaticImageData
}

// LandingSection component
const LandingSection = ({ title, description, imageUrl }: ILandingSectionProps) => {
    return (
        <div className="component-landing-section">
            {imageUrl ? 
            <>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <Image alt={`${title}`} width={600} height={600} style={{
                    width: '100%',
                    height: '100%',
                }} src={imageUrl} />
            </div>
            </>
            :
            <>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            </>
        }
        </div>
    );
};


const landingSectionsData: ILandingSectionProps[] = [
    {
        title: 'Welcome to Knowledge-AI',
        description: "Knowledge-AI is not just an application; it's a revolution in education. Designed with a mission to empower, inspire and ignite a love for knowledge in every user, we offer an innovative platform that transcends traditional education norms. We merge artificial intelligence with human insight to create an interactive learning environment that keeps up with your pace, understands your needs, and challenges you to become the best.",
        imageUrl: books
    },
    {
        title: 'Learn Unbounded',
        description: "There is no limit to what you can learn at Knowledge-AI. Whether you're passionate about physics, intrigued by history, or curious about culinary arts, you'll find a wealth of knowledge here. Our expansive library of topics allows you to explore any area of interest and dive as deep as you wish. Embrace a new era of learning that is flexible, engaging, and at your fingertips.",
    },
    {
        title: 'Validate Your Expertise',
        description: "Prove your skills and knowledge with our interactive testing features. Answer challenging questions, solve intriguing problems and get real-time feedback on your performance. Use our AI to discover your strengths, address your weaknesses, and always continue learning."
    },
    {
        title: 'Connect & Share',
        description: "Knowledge-AI isn't just about learning; it's about connecting. Visit your friends' profiles to see what they're learning, share your own progress, and inspire each other. With Knowledge-AI, you're part of a vibrant community of learners who support, encourage, and learn from each other.",
        imageUrl: teams
    },
    // {
    //     title: 'Join Our Mixed Family of Learning-Partners',
    //     description: "At Knowledge-AI, you're not alone on your learning journey. Our AI-partners are here to guide you every step of the way, adapting to your learning style and providing personalized support. Additionally, connect with fellow learners to exchange ideas, share insights, and foster a collaborative learning environment."
    // },
    {
        title: 'Real-Time Feedback',
        description: "Receive immediate feedback on your learning progress from our AI and community members. Use it to refine your skills, address learning gaps, and consistently improve. Our real-time feedback system is designed to empower you to take control of your learning journey.",
        imageUrl: metrics
    },
    {
        title: 'Embrace the Future of Learning with Knowledge-AI',
        description: "Knowledge-AI is where your passion for learning meets the future of education. It's a space where you can grow, explore, connect, and become the best version of yourself. Join us today and unlock the power of human knowledge."
    },
    {
        title: 'How to Get Started',
        description: "Getting started with Knowledge-AI is simple. Just sign up, choose your topics of interest, and you're ready to learn. We'll guide you through the process and be there for you at every step of your learning journey."
    },
];


const Landing = () => {
    return (
        <div className="component-landing">
            <h1>Knowledge-AI: Empowering Your Intellectual Growth</h1>
            {landingSectionsData.map((sectionData, index) => (
                <LandingSection 
                    key={index}
                    title={sectionData.title}
                    description={sectionData.description}
                    imageUrl={sectionData.imageUrl}
                />
            ))}
            <div className='call-t-action'>
                <span>
                    What do you want to learn?
                </span>
            </div>
        </div>
    );
};

export default Landing;


