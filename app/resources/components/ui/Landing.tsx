// LandingSection.js
function LandingSection({ title, description }) {
    return (
        <div className="component-landing-section">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}



export default function Landing() {
    return (
        <div className="component-landing">
            <h1>Knowledge-AI: Empowering Your Intellectual Growth</h1>
            <LandingSection
                title="Welcome to Knowledge-AI"
                description="Knowledge-AI is not just an application; it's a revolution in education. Designed with a mission to empower, inspire and ignite a love for knowledge in every user, we offer an innovative platform that transcends traditional education norms. We merge artificial intelligence with human insight to create an interactive learning environment that keeps up with your pace, understands your needs, and challenges you to become the best."
            />
            <LandingSection
                title="Learn Unbounded"
                description="There is no limit to what you can learn at Knowledge-AI. Whether you're passionate about physics, intrigued by history, or curious about culinary arts, you'll find a wealth of knowledge here. Our expansive library of topics allows you to explore any area of interest and dive as deep as you wish. Embrace a new era of learning that is flexible, engaging, and at your fingertips."
            />
            <LandingSection
                title="Validate Your Expertise"
                description="Prove your skills and knowledge with our interactive testing features. Answer challenging questions, solve intriguing problems and get real-time feedback on your performance. Use our AI to discover your strengths, address your weaknesses, and always continue learning."
            />
            <LandingSection
                title="Connect & Share"
                description="Knowledge-AI isn't just about learning; it's about connecting. Visit your friends' profiles to see what they're learning, share your own progress, and inspire each other. With Knowledge-AI, you're part of a vibrant community of learners who support, encourage, and learn from each other."
            />
            <LandingSection
                title="Join Our Mixed Family of Learning-Partners"
                description="At Knowledge-AI, you're not alone on your learning journey. Our AI-partners are here to guide you every step of the way, adapting to your learning style and providing personalized support. Additionally, connect with fellow learners to exchange ideas, share insights, and foster a collaborative learning environment."
            />
            <LandingSection
                title="Real-Time Feedback"
                description="Receive immediate feedback on your learning progress from our AI and community members. Use it to refine your skills, address learning gaps, and consistently improve. Our real-time feedback system is designed to empower you to take control of your learning journey."
            />
            <LandingSection
                title="Embrace the Future of Learning with Knowledge-AI"
                description="Knowledge-AI is where your passion for learning meets the future of education. It's a space where you can grow, explore, connect, and become the best version of yourself. Join us today and unlock the power of human knowledge."
            />
            <LandingSection
                title="How to Get Started"
                description="Getting started with Knowledge-AI is simple. Just sign up, choose your topics of interest, and you're ready to learn. We'll guide you through the process and be there for you at every step of your learning journey."
            />
        </div>
    );
}
