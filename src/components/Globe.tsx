import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  let phi = 0;

  useEffect(() => {
    let width = 0;
    const currentMovement = () => pointerInteractionMovement.current;
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2 || 1000,
      height: width * 2 || 1000,
      phi: 0,
      theta: 0.3,
      dark: 0, // Light mode theme matching the surface
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.95, 0.98, 0.98],
      markerColor: [0, 0.82, 0.75], // vibrant cyan (#00d1c1 approx)
      glowColor: [0.8, 0.95, 1],
      markers: [
        { location: [21.0285, 105.8542], size: 0.08 }, // Hanoi
        { location: [10.8231, 106.6297], size: 0.08 }, // HCM
      ],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + currentMovement() / 200;
        state.width = width * 2 || 1000;
        state.height = width * 2 || 1000;
      },
    });

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-full max-w-[500px] max-h-[500px] mx-auto flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    >
      <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-[100px] animate-pulse"></div>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
        style={{ width: "100%", height: "100%", aspectRatio: 1 }}
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,209,193,0.3)]"
      />
    </motion.div>
  );
}
