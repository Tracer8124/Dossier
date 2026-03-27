"use client";

import { useRef, useEffect } from "react";
import { useScroll, motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.2, 0]);

    // Setup 3D Mouse Parallax
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = (event: React.MouseEvent) => {
        // Normalize mouse coordinates from -1 to 1 based on screen size
        const { clientX, clientY } = event;
        const width = window.innerWidth;
        const height = window.innerHeight;
        mouseX.set((clientX / width) * 2 - 1);
        mouseY.set((clientY / height) * 2 - 1);
    };

    // Apply smooth spring physics to the mouse tracking
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Calculate rotation and translation based on the smoothed mouse position
    const rotateX = useTransform(smoothMouseY, [-1, 1], [10, -10]);
    const rotateY = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
    const bgX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
    const bgY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div 
                className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]"
                style={{ perspective: 1000 }}
                onMouseMove={handleMouseMove}
            >
                <motion.div 
                    style={{ 
                        scale, 
                        opacity,
                        rotateX,
                        rotateY,
                        x: bgX,
                        y: bgY,
                    }} 
                    className="absolute inset-0 w-full h-full origin-center"
                >
                    {/* The Full Uncropped Photo - Crystal Clear */}
                    <div className="absolute inset-0 z-10 p-2 md:p-12">
                        <Image
                            src="/Profile.jpeg"
                            alt="Tanvi Ligade"
                            fill
                            priority
                            className="object-contain"
                            quality={100}
                            unoptimized={true}
                        />
                    </div>

                    {/* Subtle gradients to make text strictly readable, without ruining the photo */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />
                </motion.div>
                
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
