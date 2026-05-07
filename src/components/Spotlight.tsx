import { useEffect, useState } from 'react';

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-60 mix-blend-screen"
      style={{ background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(55, 213, 255, 0.12), transparent 42%)` }}
    />
  );
}
