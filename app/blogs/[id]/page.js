import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
    const { id } = params;

    if(id == '3') {
        notFound();
    }

    return <div className="mt-6"> This blog id is : {id}</div>;
} 