"use client"
import React from "react";
import {REVIEW} from "../constants/index"
import Image from "next/image";
import xaviour from "../../public/xaviour.jpeg"
import customer1 from "../../public/customer1.jpeg"
import customer2 from "../../public/customer2.jpeg"
import customer3 from "../../public/customer3.jpeg"
import customer4 from "../../public/customer4.jpeg"
import {motion} from "framer-motion"


const containerVariants={
hidden:{opacity:0},
show:{opacity:1,transition:{
    staggerChildren:0.8,
}}
}
const ItemVariant={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:0.5}}}



const Review = () => {
  return <section className="container mx-auto mb-8 mt-12" id="review">
            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{once:true}} className="flex-flex-col">
            <motion.p variants={ItemVariant} className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[3.5rem]">{REVIEW.content}</motion.p>
</motion.div>
<motion.div variants={ItemVariant} className="flex items-center justify-center gap-6">
<Image src={xaviour} alt={REVIEW.name} width={80} height={80} className="rounded-full border"/>
    <div className="tracking-tighter">
<h6>{REVIEW.name}</h6>
<p className="text-sm text-neutral-500">{REVIEW.profession}</p>
</div>
</motion.div>

<motion.div initial="hidden" whileInView="show" variants={ItemVariant} viewport={{once:true}} className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">{[customer1,customer2,customer3,customer4].map((customer,index)=>{
      return  <motion.Image variants={ItemVariant} key={index} src={customer} alt="customer" className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"/>
})}</motion.div>
</section>;
};

export default Review;
