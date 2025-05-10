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
const Section = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen flex items-center justify-center px-4 md:px-12 py-6 text-center"
  >
    <div className="max-w-5xl w-full">{children}</div>
  </motion.section>
);


export default function MothersDayPage() {
  return (
    <main className=" flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat text-gray-800 font-serif relative"
      style={{ backgroundImage: `url(${bg})` }}>
      {/* Flower - Top Left */}
      <img
        src={flora}
        alt="Flower Top Left"
        className="fixed top-4 left-4 w-20 h-50 md:w-30 md:h-30"
      />

      {/* Flower - Bottom Right */}
      <img
        src={flora}
        alt="Flower Bottom Right"
        className="fixed bottom-4 right-4 w-10 h-10 md:w-30 md:h-30"
        style={{
          transform: 'rotate(180deg)'
        }}
      />

      {/* Hero Section */}
      < Section className="min-h-[40vh]">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Happy Mother’s Day, Ma ❤️
            </h1>
            <p className="text-lg md:text-xl">
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
            className="relative w-full max-w-sm mt-6 md:mt-0"
          >
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="absolute top-1/2 left-1/2 w-[750px] h-[600px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            />
            <motion.img
              src={mother}
              alt="Mother"
              className="rounded-xl shadow-lg w-full relative z-10"
            />
          </motion.div>
        </div>
      </Section>

      {/* Scroll down animation */}
      <div className="h-[10vh] flex items-center justify-center mt-[-10px]">
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
            className="w-[100px] h-[200px] z-10 pointer-events-none"
          />
        </motion.div>

      </div>

      {/* Polaroid Collage Section */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center font-handwriting">Some Memories</h2>
        <div className="flex items-center justify-between gap-10">

          {/* Left Polaroids and Paragraph */}
          <div className="relative w-[300px] h-[400px]">
            <motion.div className="absolute top-0 left-2 rotate-[-8deg] z-20">
              <div className="bg-white p-2 rounded-md shadow-lg w-[300px]">
                <img src={k1} alt="hug" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Kashmir Trip ⛰</p>
              </div>
            </motion.div>
            <motion.div className="absolute top-50 left-40 rotate-[5deg] z-10">
              <div className="bg-white p-2 rounded-md shadow-lg w-[300px]">
                <img src={k2} alt="story" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Shoulder-buddy goals🦅</p>
              </div>
            </motion.div>
            {/* Arrow Animation */}
            <div className="absolute top-[250px] left-[0px] w-40 rotate-[180deg] z-30">
              <Player
                autoplay
                loop
                src={arrow}
                style={{ height: "60px", width: "200px" }}
              />
            </div>

            {/* PARA1 in middle of the two polaroids */}
            <p className="absolute top-[300px] left-[-200px] w-48 text-sm text-left rotate-[-5deg] z-30 font-handwriting">
              You switch from chill mode to chandi mode so fast — always a full-blown drama queen and an instant stand-up comedian, trying way too hard to make me smile!
            </p>
            <motion.div className="absolute top-100 left-0 rotate-[15deg] z-30">
              <div className="bg-white p-2 rounded-md shadow-lg w-[200px]">
                <img src={mother2} alt="smile" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Chill Vibes👑</p>
              </div>
            </motion.div>
          </div>
          {/* Center SVG */}
          <div className="w-[120px] h-[400px] flex items-center justify-center">
            <img src={flora2} alt="flower" className="w-full h-[400]" />
          </div>
          {/* Right Polaroids and Paragraph */}
          <div className="relative w-[300px] h-[400px]">
            <motion.div className="absolute top-0 right-40 rotate-[6deg] z-10">
              <div className="bg-white p-2 rounded-md shadow-lg w-[250px]">
                <img src={aldo} alt="talks" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Aldo Cafe🫣</p>
              </div>
            </motion.div>
            {/* Arrow Animation */}
            <div className="absolute top-[50px] left-[100px] w-24 rotate-[10deg] z-30">
              <Player
                autoplay
                loop
                src={arrow}
                style={{ height: "60px", width: "200px" }}
              />
            </div>
            {/* PARA2 - top right */}
            <p className="absolute -top-[0] left-50 w-40 text-sm text-right rotate-[10deg] font-handwriting">
              Even in silence, your presence spoke volumes. The little things you did still echo in every corner of my heart.
            </p>
            <motion.div className="absolute top-70 right-0 rotate-[30deg] z-20">
              <div className="bg-white p-2 rounded-md shadow-lg w-[250px]">
                <img src={pujo} alt="love" className="rounded w-full h-auto" />
                <p className="mt-2 text-xs text-center font-handwriting">Pujo🎆</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Letter Section */}
      <Section className="pt-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">A Letter to You</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" text-lg leading-relaxed"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >

          There are so many things I’ve never said out loud, but today I want to say thank you — for everything.<br></br>

          I still remember how, just to teach me English grammar, you bought not one, but two books. One in Bengali to English — to understand it yourself. And then one in English to English — to explain it to me. That effort, that love, that determination... I’ll never forget it.<br></br>

          Even now, I can still recall the Mughal and Chola dynasty from my Class 7 history book — not because I studied hard, but because you sat with me and made it simple, memorable, and fun.<br></br>

          There have been ups and downs on this journey — and there will be more. But I know one thing for sure: you can handle anything. No matter what anyone says, I believe in you. Always have, always will.<br></br>

          Whatever I am today — even if I got marks by winging some exams — the reason I could is you. Because you made my foundation so strong, I never had to look back in fear or doubt.<br></br>

          I just want you to know this: I will always carry your faith in me like armour. And I promise, Ma — I’ll try my best to make you proud.<br></br>

          With all my love,<br></br>
          Babai

        </motion.p>
      </Section>
    </main >
  );
}
