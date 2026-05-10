import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Định nghĩa cấu trúc dữ liệu cho trạng thái của Globe.
 * Việc khai báo này giúp loại bỏ lỗi ts(7006) và tăng tính minh bạch cho mã nguồn.
 */
interface GlobeState {
  phi: number;
  theta: number;
  width: number;
  height: number;
  [key: string]: any;
}

/**
 * Component Globe: Hiển thị quả địa cầu 3D tương tác sử dụng WebGL.
 * Tích hợp các đường arcs đại diện cho sự kết nối số giữa các khu vực địa lý.
 */
export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phi = useRef(0);
  const canvasSize = 1000;

  useEffect(() => {
    const currentMovement = () => pointerInteractionMovement.current;

    if (!canvasRef.current) return;

    // Khởi tạo instance quả địa cầu từ thư viện cobe
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasSize,
      height: canvasSize,
      phi: 0,
      theta: 0.3,
      dark: 0, 
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.95, 0.98, 0.98], // Màu nền lục địa
      markerColor: [0, 0.82, 0.75], // Màu của các điểm nút (Cyan)
      glowColor: [0.8, 0.95, 1],    // Màu hào quang xung quanh
      arcColor: [0, 0.82, 0.75],
      arcWidth: 0.55,
      arcHeight: 0.28,
      markers: [
        // Tọa độ các thành phố chiến lược [vĩ độ, kinh độ]
        { location: [21.0285, 105.8542], size: 0.1 },  // Hà Nội
        { location: [10.8231, 106.6297], size: 0.1 },  // TP.HCM
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [37.7749, -122.4194], size: 0.05 },// San Francisco
        { location: [51.5074, -0.1278], size: 0.05 },  // London
        { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
        { location: [-33.8688, 151.2093], size: 0.05 },// Sydney
      ],
      arcs: [
        // Định nghĩa các đường cung nối giữa các điểm để thể hiện sự liên kết
        { from: [21.0285, 105.8542], to: [35.6762, 139.6503], color: [0, 0.82, 0.75] }, // Hà Nội - Tokyo
        { from: [10.8231, 106.6297], to: [1.3521, 103.8198], color: [0, 0.82, 0.75] }, // TP.HCM - Singapore
        { from: [21.0285, 105.8542], to: [51.5074, -0.1278], color: [0, 0.82, 0.75] }, // Hà Nội - London
        { from: [10.8231, 106.6297], to: [37.7749, -122.4194], color: [0, 0.82, 0.75] },// TP.HCM - SF
        { from: [1.3521, 103.8198], to: [-33.8688, 151.2093], color: [0, 0.82, 0.75] }, // Singapore - Sydney
        { from: [37.7749, -122.4194], to: [51.5074, -0.1278], color: [0, 0.82, 0.75] }, // SF - London
        { from: [35.6762, 139.6503], to: [37.7749, -122.4194], color: [0, 0.82, 0.75] }, // Tokyo - SF
      ],
      onRender: (state: GlobeState) => {
        // Cơ chế tự động quay khi không có sự tương tác của người dùng
        if (!pointerInteracting.current) {
          phi.current += 0.005;
        }
        state.phi = phi.current + currentMovement() / 200;
        state.width = canvasSize;
        state.height = canvasSize;
      },
    } as any);

    // Cleanup khi component unmount
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
      {/* Hiệu ứng gradient nền phát sáng (pulse) */}
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