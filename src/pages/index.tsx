import Head from "next/head";
import { animated, useSpring } from 'react-spring';
import { FaGithub, FaRocket, FaSchool, FaClipboardList, FaCuttlefish, FaYoutube, FaSpotify, FaCommentDots, FaEnvelope } from 'react-icons/fa';

const months: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const calc = (x: number, y: number) => [-(y - window.innerHeight / 3) / 35, (x - window.innerWidth / 1.5) / 30, 1.05];
const trans = (x: number, y: number, s: number): string =>
    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Home() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 250, friction: 100},
  }));
  return (
    <>
      <Head>
        <title>/new-tab</title>
      </Head>
      <div>
        <h1>hello.</h1>
        <h2>{`today is ${months[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`}</h2>

        <br/>
        <animated.div
          className="card"
          onMouseMove={({ clientX: x, clientY: y}: { clientX: number; clientY: number; }) => {
            set({ xys: calc(x, y) })
          }}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
        >
          <h1>
            <a href="https://github.com/"><FaGithub className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="https://launchpad.classlink.com/newtonga"><FaRocket className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="https://newton.instructure.com"><FaSchool className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="https://clever.com/in/newtoncounty/student/portal"><FaCuttlefish className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="https://services.planningcenteronline.com"><FaClipboardList className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="https://youtube.com"><FaYoutube className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="spotify://"><FaSpotify className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="messages://"><FaCommentDots className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
          <h1>
            <a href="mailto:"><FaEnvelope className="item scale-100 hover:scale-110 focus:scale-110"/></a>
          </h1>
        </animated.div>
      </div>
    </>
  )
}

function Link(text: string, link: string) {
  return (
    <a href={link} className="font-extrabold underline underline-offset-4 hover:underline-offset-8 hover:cursor-pointer duration-200">{text}</a>
  )
}