import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Landing() {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white h-screen mt-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 mt-4 gap-2">
                Chat-Box allows you to create a room 
                <br />and have a conversation with your friends.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                easy to use, Login, just create a room and share the link with your friends.
            </p>
            <Link href="/dashboard">
                <Button size="lg" className="animate-pulse">
                    Start Chatting
                </Button>
            </Link>

            <div className="mt-12 w-full max-w-5xl flex justify-center">
                {/* Placeholder for Illustration/Image */}
                <Image
                    height={900}
                    width={500}
                    src="/landing.png"
                    alt="Illustration"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}