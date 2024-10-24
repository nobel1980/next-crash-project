import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/public/images/genex.jpg";
import React from "react";

export default function Mission() {
    return (
        
        <main className="mt-10">
            <div>Mission page.</div>
          
            <Image placeholder="blur" src={thumb} alt="genex"/>
            <Button /> 
        </main>
    )
}