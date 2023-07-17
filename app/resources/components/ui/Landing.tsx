import React from 'react';

// Define the prop types for LandingSection component
interface LandingSectionProps {
    title: string;
    description: string;
}

// LandingSection component
const LandingSection: React.FC<LandingSectionProps> = ({ title, description }) => {
    return (
        <div className="component-landing-section">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

// Define the data structure for the landing sections
interface LandingSectionData {
    title: string;
    description: string;
}

const landingSectionsData: LandingSectionData[] = [
    {
        title: 'Welcome to Knowledge-AI',
        description: 'Knowledge-AI is not just an application; it\'s a revolution in education. Designed with a mission to empower, inspire and ignite a love for knowledge in every user...'
    },
    {
        title: 'Learn Unbounded',
        description: 'There is no limit to what you can learn at Knowledge-AI...'
    },
    // Continue to add other sections similarly
];

const Landing: React.FC = () => {
    return (
        <div className="component-landing">
            <h1>Knowledge-AI: Empowering Your Intellectual Growth</h1>
            {landingSectionsData.map((sectionData, index) => (
                <LandingSection 
                    key={index}
                    title={sectionData.title}
                    description={sectionData.description}
                />
            ))}
        </div>
    );
};

export default Landing;


