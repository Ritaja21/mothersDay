import React from "react";
import { motion } from "framer-motion";
import mother from "./assets/mother1.jpg";
import Lottie from "lottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./assets/mother-amination.json";
import bg from "./assets/bg.jpg";
import flora from "./assets/nature.png";
import scroll from "./assets/scroll.json";
import arrow from "./assets/arrow-right.json";
import flora2 from "./assets/flower.png";
import k1 from "./assets/k1.jpg";
import k2 from "./assets/k2.jpg";
import pujo from "./assets/pujo.jpg";
// import museum from "../assets/museum.jpg";
import aldo from "./assets/aldo.jpg";
import mother2 from "./assets/mother2.jpg";
const Section = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`min-h-screen flex items-center justify-center px-4 md:px-12 py-6 text-center ${className}`}
  >
    <div className="max-w-6xl w-full">{children}</div>
  </motion.section>
);

export default function App() {
  return (
    <main className=" w-full flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat text-gray-800 font-serif relative overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}>
      {/* Flower - Top Left */}
      <img
        src={flora}
        alt="Flower Top Left"
        className="fixed top-4 left-4 w-16 md:w-24"
      />

      {/* Flower - Bottom Right */}
      <img
        src={flora}
        alt="Flower Bottom Right"
        className="fixed bottom-4 right-4 w-16 md:w-24 transform rotate-180"
      />

      {/* Hero Section */}
      < Section>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left  w-full md:w-1/2"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Happy Mother’s Day, Ma ❤️
            </h1>
            <p className="text-base md:text-xl">
              A small tribute to the woman who gave me everything.
            </p>
          </motion.div>

          {/* Image with Lottie Animation Wrapper */}
          <motion.div
            initial={{ opacity: 1, x: 50 }}
            whileInView={{ opacity: 1, x: 50 }}
            viewport={{ once: true }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-sm md:max-w-md mx-auto"
          >
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="absolute inset-0 w-[400px] h-[400px] md:w-[700px] md:h-[600px] -z-10"
            />
            <motion.img
              src={mother}
              alt="Mother"
              className="rounded-xl shadow-lg w-full h-auto object-cover relative z-10"
            />
          </motion.div>
        </div>
      </Section>

      {/* Scroll down animation */}
      <div className="h-[10vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 1, x: 50 }}
          whileInView={{ opacity: 1, x: 50 }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full max-w-sm flex items-center justify-center"
        >
          <Lottie
            animationData={scroll}
            loop={true}
            autoplay={true}
            className="w-[60px] md:w-[100px]"
          />
        </motion.div>

      </div>

      {/* Polaroid Collage */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center font-handwriting">
          Some Memories
        </h2>
        <div className="flex flex-wrap items-start justify-center gap-10">
          {/* Left Polaroid Cluster */}
          <div className="relative w-[300px] h-[460px]">
            <div className="absolute top-0 left-2 rotate-[-8deg] z-20">
              <div className="bg-white p-2 rounded-md shadow-lg w-[260px]">
                <img src={k1} alt="hug" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Kashmir Trip ⛰</p>
              </div>
            </div>
            <div className="absolute top-40 left-36 rotate-[5deg] z-10">
              <div className="bg-white p-2 rounded-md shadow-lg w-[260px]">
                <img src={k2} alt="story" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Shoulder-buddy goals🦅</p>
              </div>
            </div>
            <div className="absolute top-[280px] left-0 w-40 rotate-180 z-30">
              <Player autoplay loop src={arrow} style={{ height: "60px", width: "150px" }} />
            </div>
            <p className="absolute top-[300px] left-[-150px] w-44 text-sm rotate-[-5deg] font-handwriting">
              You switch from chill mode to chandi mode so fast — full drama queen & instant comedian 💫
            </p>
            <div className="absolute top-[360px] left-0 rotate-[15deg] z-30">
              <div className="bg-white p-2 rounded-md shadow-lg w-[200px]">
                <img src={mother2} alt="smile" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Chill Vibes👑</p>
              </div>
            </div>
          </div>

          {/* Center Flower */}
          <div className="w-[100px] h-[400px] flex items-center justify-center">
            <img src={flora2} alt="flower" className="w-full h-auto" />
          </div>

          {/* Right Polaroid Cluster */}
          <div className="relative w-[300px] h-[460px]">
            <div className="absolute top-0 right-32 rotate-[6deg] z-10">
              <div className="bg-white p-2 rounded-md shadow-lg w-[240px]">
                <img src={aldo} alt="talks" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Aldo Cafe🫣</p>
              </div>
            </div>
            <div className="absolute top-[60px] left-[100px] rotate-[10deg] z-30">
              <Player autoplay loop src={arrow} style={{ height: "60px", width: "150px" }} />
            </div>
            <p className="absolute top-[0] right-0 w-40 text-sm text-right rotate-[10deg] font-handwriting">
              Even your silence speaks volumes. Every little act still echoes in my heart.
            </p>
            <div className="absolute top-[300px] right-0 rotate-[30deg] z-20">
              <div className="bg-white p-2 rounded-md shadow-lg w-[240px]">
                <img src={pujo} alt="love" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Pujo🎆</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Letter Section */}
      <Section className="pt-20 pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">A Letter to You</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg leading-relaxed px-4 md:px-12"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          There are so many things I’ve never said out loud, but today I want to say thank you — for everything.<br /><br />
          I still remember how, just to teach me English grammar, you bought not one, but two books. One in Bengali to English — to understand it yourself. And then one in English to English — to explain it to me.<br /><br />
          Even now, I can still recall the Mughal and Chola dynasty from my Class 7 history book — not because I studied hard, but because you sat with me and made it fun.<br /><br />
          There will be ups and downs — but you can handle anything. I believe in you. Always have, always will.<br /><br />
          Whatever I am today — it’s because you made my foundation so strong. I never had to look back in fear.<br /><br />
          I will always carry your faith in me like armor. And I promise, Ma — I’ll try my best to make you proud.<br /><br />
          With all my love,<br />
          Babai
        </motion.p>
      </Section>
    </main >
  );
}
