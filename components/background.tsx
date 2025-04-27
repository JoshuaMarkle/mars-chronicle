"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 2;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Mars planet
    const planet = {
      x: canvas.width * 0.8,
      y: canvas.height * 0.25,
      radius: Math.min(canvas.width, canvas.height) * 0.15,
	  oscillation: Math.random() * Math.PI * 2,
      draw() {
        this.oscillation += 0.005;
        const offsetX = Math.sin(this.oscillation) * 5;
        const offsetY = Math.cos(this.oscillation) * 3;
        
        ctx.beginPath();
        ctx.arc(this.x + offsetX, this.y + offsetY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#bb4444' : '#9c2327';
        ctx.fill();
        
        // // Surface details
        // for (let i = 0; i < 5; i++) {
        //   const angle = Math.random() * Math.PI * 2;
        //   const distance = Math.random() * this.radius * 0.8;
        //   const size = Math.random() * this.radius * 0.2 + this.radius * 0.05;
        //   
        //   ctx.beginPath();
        //   ctx.arc(
        //     this.x + offsetX + Math.cos(angle) * distance,
        //     this.y + offsetY + Math.sin(angle) * distance,
        //     size,
        //     0, Math.PI * 2
        //   );
        //   ctx.fillStyle = isDark ? '#883333' : '#7a1c1f';
        //   ctx.fill();
        // }
      }
    };
    
    // Orbiting objects
    const satellites = Array.from({ length: 2 }, (_, i) => ({
      angle: Math.random() * Math.PI * 2,
      distance: planet.radius * (1.5 + i * 0.5),
      size: 5 + Math.random() * 8,
      speed: 0.001 + Math.random() * 0.001,
      draw() {
        this.angle += this.speed;
        const x = planet.x + Math.cos(this.angle) * this.distance;
        const y = planet.y + Math.sin(this.angle) * this.distance;
        
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? '#aaaaaa' : '#555555';
        ctx.fill();
      }
    }));
    
    // Geometric shapes
    const shapes = [
      {
        type: 'square',
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        size: 120,
        rotation: 0,
        rotationSpeed: 0.0005,
        oscillation: Math.random() * Math.PI * 2,
        draw() {
          this.oscillation += 0.01;
          this.rotation += this.rotationSpeed;
          const offsetX = Math.sin(this.oscillation) * 10;
          const offsetY = Math.cos(this.oscillation) * 8;
          
          ctx.save();
          ctx.translate(this.x + offsetX, this.y + offsetY);
          ctx.rotate(this.rotation);
          ctx.beginPath();
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
          ctx.fillStyle = isDark ? '#333333' : '#e2d9ca';
          ctx.strokeStyle = isDark ? '#444444' : '#cccccc';
          ctx.lineWidth = 2;
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }
      },
      {
        type: 'circle',
        x: canvas.width * 0.3,
        y: canvas.height * 0.3,
        radius: 20,
        oscillation: Math.random() * Math.PI * 2,
        draw() {
          this.oscillation += 0.005;
          const offsetX = Math.sin(this.oscillation) * 15;
          const offsetY = Math.cos(this.oscillation) * 10;
          
          ctx.beginPath();
          ctx.arc(this.x + offsetX, this.y + offsetY, this.radius, 0, Math.PI * 2);
          ctx.strokeStyle = isDark ? '#666666' : '#9c2327';
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }
    ];
    
    // Lines
    const lines = Array.from({ length: 5 }, () => ({
      x1: Math.random() * canvas.width,
      y1: Math.random() * canvas.height,
      x2: Math.random() * canvas.width,
      y2: Math.random() * canvas.height,
      oscillation: Math.random() * Math.PI * 2,
      amplitude: 20 + Math.random() * 30,
      frequency: 0.002 + Math.random() * 0.005,
      draw() {
        this.oscillation += this.frequency;
        const offsetX = Math.sin(this.oscillation) * this.amplitude;
        const offsetY = Math.cos(this.oscillation) * this.amplitude;
        
        ctx.beginPath();
        ctx.moveTo(this.x1 + offsetX, this.y1 + offsetY);
        ctx.lineTo(this.x2 - offsetX, this.y2 - offsetY);
        ctx.strokeStyle = isDark ? '#444444' : '#cccccc';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }));
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background elements
      lines.forEach(line => line.draw());
      shapes.forEach(shape => shape.draw());
      
      // Draw Mars and orbiting objects
      planet.draw();
      satellites.forEach(satellite => satellite.draw());
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark, theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={cn(
        "inset-0 w-full h-full z-0 opacity-20 transition-opacity duration-300",
        isDark ? "opacity-30" : "opacity-15"
      )}
    />
  );
};

export default Background;
