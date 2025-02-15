import { useEffect } from "react";
import anime from "animejs";

export default function Loading() {
  useEffect(() => {
    anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    })
      .add({
        targets: ".loading-text",
        opacity: [0, 1],
        translateY: [20, 0],
      })
      .add({
        targets: ".loading-screen",
        opacity: [1, 0],
        scale: [1.5, 1],
        duration: 1000,
        delay: 1000,
      });
  }, []);

  return (
    <div className="loading-screen fixed inset-0 flex items-center
    justify-center bg-[#ffc107] text-white text-2xl md:text-4xl font-semibold z-50">
      <span className="loading-text">Fake-Shop</span>
    </div>
  );
}
