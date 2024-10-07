import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import Link from "next/link";

const Footer = () => {
  return <div className="mb-8 mt-20">
        <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link,index)=>{
    return <Link href={link.href} key={index}>{link.icon}</Link>
})}

</div>
    <p className="mt-8 text-center tracking-tighter text-neutral-500">&copy;Saint, All rights reserved.</p>
</div>;
};

export default Footer;
