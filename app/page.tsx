'use client'
import Image from 'next/image'
import { useStore } from './resources/context/store'
import Link from 'next/link'
import NavBar from './resources/components/ui/NavBar'

export default function Landing() {
  const { settings } = useStore()
  return (
    <main className={`page page-landing ${settings.theme}`}>
      {/* <h1>Knowledge-AI</h1> */}
      {/* <h3>Unlock human knowledge with AI</h3> */}

      <NavBar />
      <h1>Knowledge-AI: Empowering Your Intellectual Growth</h1>
      <h2>Welcome to Knowledge-AI</h2>
      <p>
        Knowledge-AI is not just an application; it&apos;s a revolution in education. Designed with a mission to empower, inspire and ignite a love for knowledge in every user, we offer an innovative platform that transcends traditional education norms. We merge artificial intelligence with human insight to create an interactive learning environment that keeps up with your pace, understands your needs, and challenges you to become the best.
      </p>
      <h2>Learn Unbounded</h2>
      <p>
      There is no limit to what you can learn at Knowledge-AI. Whether you&apos;re passionate about physics, intrigued by history, or curious about culinary arts, you&apos;ll find a wealth of knowledge here. Our expansive library of topics allows you to explore any area of interest and dive as deep as you wish. Embrace a new era of learning that is flexible, engaging, and at your fingertips.
      </p>
      <h2>Validate Your Expertise</h2>
      <p>
      Prove your skills and knowledge with our interactive testing features. Answer challenging questions, solve intriguing problems and get real-time feedback on your performance. Use our AI to discover your strengths, address your weaknesses, and always continue learning.
      </p>

      <h2>Connect & Share</h2>
      <p>
        Knowledge-AI isn&apos;t just about learning; it&apos;s about connecting. Visit your friends&apos; profiles to see what they&apos;re learning, share your own progress, and inspire each other. With Knowledge-AI, you&apos;re part of a vibrant community of learners who support, encourage, and learn from each other.
      </p>
      <h2>
        Join Our Mixed Family of Learning-Partners
      </h2>
      <p>
        At Knowledge-AI, you&apos;re not alone on your learning journey. Our AI-partners are here to guide you every step of the way, adapting to your learning style and providing personalized support. Additionally, connect with fellow learners to exchange ideas, share insights, and foster a collaborative learning environment.
      </p>

      <h2>Real-Time Feedback</h2>
      <p>
      Receive immediate feedback on your learning progress from our AI and community members. Use it to refine your skills, address learning gaps, and consistently improve. Our real-time feedback system is designed to empower you to take control of your learning journey.
      </p>

      <h2>
        Embrace the Future of Learning with Knowledge-AI
      </h2>
      <p>
      Knowledge-AI is where your passion for learning meets the future of education. It&apos;s a space where you can grow, explore, connect, and become the best version of yourself. Join us today and unlock the power of human knowledge.
      </p>

      <h2>
      How to Get Started      
      </h2>
      <p>
      Getting started with Knowledge-AI is simple. Just sign up, choose your topics of interest, and you&apos;re ready to learn. We&apos;ll guide you through the process and be there for you at every step of your learning journey.
      </p>
      
    </main>
  )
}

// Example usage of Zustand
// export default function Home() {

//   const bears = useStore((state) => state.bears);

//   const {increasePopulation} = useStore()
//   return (
//     <main >      <h1>I will be a cool header</h1>
//     <h2>Number of bears: {bears}</h2>
//     <button onClick={increasePopulation}>Get</button>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui vero tempore delectus recusandae repudiandae obcaecati distinctio voluptatem eveniet? Quidem beatae modi voluptas reprehenderit, excepturi inventore qui vero delectus asperiores, illum consequatur et quod perferendis dolorem non cupiditate quam pariatur, dolor consequuntur magnam dignissimos a? Molestiae, nisi numquam dolore amet voluptate fuga provident quas maiores optio. Architecto laudantium, enim debitis voluptatibus quo quos accusamus mollitia repellat in quod rem, amet necessitatibus aliquam reprehenderit sed ipsum doloribus. Est, numquam quae earum laboriosam officiis modi cupiditate non accusantium. Modi impedit tempora omnis repellendus. Blanditiis quos a excepturi libero incidunt, eum provident nulla doloribus.</p>
//     </main>
//   )
// }
