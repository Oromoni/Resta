"use client"
import logo from "../../public/logo.png"
//import hero from "../../public/hero.jpeg"
import Image from "next/image";
import {motion} from "framer-motion"
const Hero = () => {
  return <section className="relative flex h-screen items-center justify-center">
<div className="absolute inset-0   h-full overflow-hidden">
{/* <video src={video}></video> */}
 <video width="320" height="240" preload="none" className="h-full w-full object-cover" muted autoPlay loop playsInline controls={false} poster={"/hero.jpeg"}>
      <source src={"/hero.mp4"} type="video/mp4" />
     
      
    </video>
</div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
</div>
<div className="relative z-20 flex h-screen flex-col justify-end">
    <motion.div 
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.5,delay:1.20}}
>
    <Image src={logo} priority   alt="restaura" className="w-full p-4" />
</motion.div>
<motion.p 
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{delay:1.40, duration:1}} className="p-4 text-lg tracking-tighter text-white">London</motion.p>
</div>
</section>;
};

export default Hero;
