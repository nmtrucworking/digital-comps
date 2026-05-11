import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GlobeState {
  phi: number;
  theta: number;
  width: number;
  height: number;
  [key: string]: any;
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phi = useRef(0);
  const canvasSize = 1000;

  useEffect(() => {
    const currentMovement = () => pointerInteractionMovement.current;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasSize,
      height: canvasSize,
      phi: 0,
      theta: 0.3,
      dark: 0, 
      diffuse: 1.2,
      // TĂNG TỶ LỆ RENDER ĐỂ KHỬ INTERNAL MARGIN
      scale: 2.0, 
      mapSamples: 16000,
      mapBrightness: 6,
      // Dịch chuyển tâm render của quả cầu (đơn vị pixel trên canvas)
      // [x, y]: đẩy x sang phải và y xuống dưới để sát mép
      offset: [canvasSize * 0.5, canvasSize * 0.5],
      baseColor: [0.95, 0.98, 0.98],
      markerColor: [0, 0.82, 0.75],
      glowColor: [0.8, 0.95, 1],
      arcColor: [0, 0.82, 0.75],
      arcWidth: 0.55,
      arcHeight: 0.28,
      markers: [
        { location: [21.0285, 105.8542], size: 0.1 },
        { location: [10.8231, 106.6297], size: 0.1 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [37.7749, -122.4194], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.05 },
      ],
      arcs: [
        { from: [21.0285, 105.8542], to: [35.6762, 139.6503], color: [0, 0.82, 0.75] },
        { from: [10.8231, 106.6297], to: [1.3521, 103.8198], color: [0, 0.82, 0.75] },
        { from: [21.0285, 105.8542], to: [51.5074, -0.1278], color: [0, 0.82, 0.75] },
        { from: [10.8231, 106.6297], to: [37.7749, -122.4194], color: [0, 0.82, 0.75] },
        { from: [1.3521, 103.8198], to: [-33.8688, 151.2093], color: [0, 0.82, 0.75] },
        { from: [37.7749, -122.4194], to: [51.5074, -0.1278], color: [0, 0.82, 0.75] },
        { from: [35.6762, 139.6503], to: [37.7749, -122.4194], color: [0, 0.82, 0.75] },
      ],
      onRender: (state: GlobeState) => {
        if (!pointerInteracting.current) {
          phi.current += 0.005;
        }
        state.phi = phi.current + currentMovement() / 200;
        state.width = canvasSize;
        state.height = canvasSize;
      },
    } as any);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-full mx-auto flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    >
      <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-[100px] animate-pulse"></div>
      
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
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