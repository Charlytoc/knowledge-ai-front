'use client'
import Image from 'next/image'
import { useStore } from './context/store'
export default function Home() {

  const bears = useStore((state) => state.bears);

  const {increasePopulation} = useStore()
  return (
    <main >
      <h1>I will be a cool header</h1>
      <h2>Number of bears: {bears}</h2>
      <button onClick={increasePopulation}>Get</button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui vero tempore delectus recusandae repudiandae obcaecati distinctio voluptatem eveniet? Quidem beatae modi voluptas reprehenderit, excepturi inventore qui vero delectus asperiores, illum consequatur et quod perferendis dolorem non cupiditate quam pariatur, dolor consequuntur magnam dignissimos a? Molestiae, nisi numquam dolore amet voluptate fuga provident quas maiores optio. Architecto laudantium, enim debitis voluptatibus quo quos accusamus mollitia repellat in quod rem, amet necessitatibus aliquam reprehenderit sed ipsum doloribus. Est, numquam quae earum laboriosam officiis modi cupiditate non accusantium. Modi impedit tempora omnis repellendus. Blanditiis quos a excepturi libero incidunt, eum provident nulla doloribus.</p>
    </main>
  )
}
