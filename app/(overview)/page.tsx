import { redirect } from "next/navigation";
// components
import Player from "../ui/player";
import ListenButtons from "../ui/listenButtons";
import Image from "next/image";
// assets, styling
import logo from '../assets/logo.png';
import kino1 from '../assets/kino1.webp';
import kino2 from '../assets/kino2.webp';
import kino3 from '../assets/kinobg.gif';
import glitch from '../assets/glitchbg.gif'
import RSS from '../assets/buttons/RSS.svg';
import './page.css';


export default async function Page() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll pt-[100px] md:pt-20 ">
      <section id="home" className="h-screen w-full flex flex-col md:flex-row items-center justify-end text-2xl leading-loose p-4 bg-black relative ">
        <div id="image-logo-wrapper" className="flex relative bg-black">
          <Image src={kino1} alt="abadoned-cinema" className="brightness-50 mb-24 min-w-[400px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: '50%' }}>
            <div className="mx-16 mb-24 flex flex-col">
              <Image src={logo} alt="logo" className="z-20 min-w-[200px]" />
            </div>
          </div>
        </div>
        <div className="w-1/3 md:w-1/2 flex-col mr-40 md:items-center md:p-8 bg-black">
          <p className="text-white text-base md:text-3xl mb-10 w-[250px] md:w-full font-mono pl-12 md:pl-16">
            A six part fiction podcast with an original <span className="text-red-600"> soundtrack.</span>
          </p>
          <div id="mobile-credits" className="text-white text-xs pl-20 w-[250px] md:hidden">
            <p className="mb-2">Written & Read:</p>
            <p className="mb-2">Joe Copplestone </p>
            <p className="mb-2">Soundtrack by</p>
            <p className="mb-2"> Alix Lhoumeau.</p>
          </div>
          <div id="credits" className="flex-col pl-16 hidden md:flex">
            <p className="text-white text-base md:text-sm">Written & Read by <a target="_blank" href="https://github.com/Strasseneck" className="hover:text-red-600 hover:cursor-pointer">Joe Copplestone.</a> Soundtrack by <a target="_blank" href="https://www.alixlhoumeau.com/" className="hover:text-red-600 hover:cursor-pointer">Alix Lhoumeau.</a>
            </p>
          </div>
          <div className="pl-8 hidden md:block">
            <ListenButtons />
          </div>
        </div>
      </section>
      <div id="btns-mobile" className="md:hidden pl-24">
        <ListenButtons />
      </div>
      <section id="about" className="h-screen flex md:p-1 text-2xl leading-loose relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={kino3} alt="cinema-background" className="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block" />
          <div id="text container" className="flex flex-col md:flex-row p-10 md:pl-28">
          <strong className="text-red-600 text-2xl mb-10 font-serif tracking-widest underline underline-offset-8 pl-16 md:hidden">
              ABOUT
            </strong>
            <div className="w-4/5 md:w-2/5 mx-8">
              <strong className="text-red-600 text-base md:text-3xl">
                In an a nameless city, a nameless narrator lives with their best friend ‘The Chewing Gum Kid’ on the very edge of modern society, squatting in deserted buildings and shoplifting for food.
              </strong>
            </div>
            <div className="w-4/5 md:w-2/5 mx-8">
              <strong className="text-red-600 text-sm md:text-2xl hidden md:block">
                When the two of them discover and take over an abandoned cinema, we follow their transformation from scavenging outsiders to leaders of an underground counter culture movement but what starts as a radical experiment slowly descends into something much, much, darker...
              </strong>
            </div>
          </div>
        </div>
      </section>
      <div className="relative h-80 md:hidden">
        <Image src={kino3} alt="cinema-background" className="h-2/3"/>
      </div>
      <section id="about-2" className="h-screen flex p-4 text-2xl leading-loose relative md:hidden">
        <div className="w-4/5 mx-8 p-10 md:pl-28">
          <strong className="text-red-600 text-base">
            When the two of them take over an abandoned cinema, we follow their transformation from scavenging outsiders to leaders of an underground counter culture movement 
          </strong>
          <strong className="text-red-600 text-base">but what starts as a radical experiment slowly descends into something much, much, darker...
          </strong>
        </div>
      </section>
      <Image src={kino2} alt="abandoned cinema" className="md:hidden" />
      <section id="episodes" className="h-screen flex p-4 bg-black text-2xl leading-loose relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/5 md:w-2/5 mx-8 flex flex-col font-mono">
            <strong className="text-red-600 text-2xl md:text-3xl mb-10 font-serif tracking-widest underline underline-offset-8">
              READ
            </strong>
            <strong className="text-white hover:text-red-600 cursor-pointer text-base md:text-2xl mb-5">
              <a href="/data/transcripts/Part One: Mausoleums of The Boom.pdf" download="Part One: Mausoleums of The Boom.pdf">Part One: Mausoleums of The Boom</a>
            </strong>
            <strong className="text-white hover:text-red-600 cursor-pointer text-base md:text-2xl mb-5">
              <a href="/data/transcripts/Part Two: The Fatman.pdf" download="Part Two: The Fatman.pdf">Part Two: The Fatman</a>
            </strong>
            <strong className="text-white hover:text-red-600 cursor-pointer text-base md:text-2xl mb-5">
              <a href="/data/transcripts/Part Three: Wall of Tapes.pdf" download="Part Three: Wall of Tapes.pdf">Part Three: Wall of Tapes</a>
            </strong>
            <strong className="text-white hover:text-red-600 cursor-pointer text-base md:text-2xl mb-5">
              <a href="/data/transcripts/Part Four: The Herd.pdf" download="Part Four: The Herd.pdf">Part Four: The Herd</a>
            </strong>
            <strong className="text-white hover:text-red-600 cursor-pointer text-base md:text-2xl mb-5">
              <a href="/data/transcripts/Part Five: The Fear Outside.pdf" download="Part Five: The Fear Outside.pdf">Part Five: The Fear Outside</a>
            </strong>
            <strong className="text-white hover:text-red-600 cursor-pointer text-base md:text-2xl mb-5">
              <a href="/data/transcripts/Part Six: A Slowly Unfolding Apocalypse.pdf" download="Part Six: A Slowly Unfolding Apocalypse.pdf">Part Six: A Slowly Unfolding Apocalypse</a>
            </strong>
          </div>
          <Image src={kino2} alt="abandoned cinema" className="w-1/3 hidden md:block" />
        </div>
      </section>
      <section id="listen" className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 ">
          <Image src={glitch} alt="glitch-background" className="absolute inset-0 w-full h-full object-cover -z-10" />
        </div>
        <div className="relative z-10 w-full">
          <Player />
        </div>
        <a
          target="_blank"
          href="https://feeds.buzzsprout.com/2319717.rss"
          className='flex items-center mt-10'
        >
          <Image src={RSS} alt='RSS logo' className='mx-8 z-10' />
        </a>
        <p className="absolute bottom-0 text-red-600 font-bold">© 2024 The House That Shadows Built</p>
      </section>
    </div>
  );
}
