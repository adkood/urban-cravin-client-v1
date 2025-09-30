import React, { useRef, useEffect, useState, useCallback } from 'react';

interface WaterRippleProps {
  image?: string;
  hoverEffectEnabled?: boolean;
  hoverRippleRadius?: number;
  frameRate?: number;
  damping?: number;
  clickToRipple?: boolean;
  clickRippleRadius?: number;
  clickRippleStrength?: number;
  className?: string;
}

export const WaterRipple: React.FC<WaterRippleProps> = ({
  image,
  hoverEffectEnabled = true,
  hoverRippleRadius = 10,
  frameRate = 144,
  damping = 50,
  clickToRipple = true,
  clickRippleRadius = 5,
  clickRippleStrength = 512,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const rippleDataRef = useRef<any>({});
  const lastFrameTimeRef = useRef(0);
  const mouseTrailRef = useRef<Array<{ x: number; y: number; time: number }>>([]);
  const [size, setSize] = useState({ width: 400, height: 400 });
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(isHovering);
  isHoveringRef.current = isHovering;

  const initializeRipple = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
      const width = canvas.width;
      const height = canvas.height;
      const halfWidth = width >> 1;
      const halfHeight = height >> 1;
      const bufferSize = width * (height + 2) * 2;
      const oldIdx = width;
      const newIdx = width * (height + 3);

      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;
      let drawWidth, drawHeight, drawX, drawY;

      if (imgAspect > canvasAspect) {
        drawHeight = height;
        drawWidth = height * imgAspect;
        drawX = (width - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = width;
        drawHeight = width / imgAspect;
        drawX = 0;
        drawY = (height - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

      const texture = ctx.getImageData(0, 0, width, height);
      const ripple = ctx.getImageData(0, 0, width, height);
      const rippleMap = new Array(bufferSize).fill(0);
      const lastMap = new Array(width * height).fill(0);

      rippleDataRef.current = {
        width,
        height,
        halfWidth,
        halfHeight,
        oldIdx,
        newIdx,
        rippleMap,
        lastMap,
        texture,
        ripple,
        mapIdx: oldIdx,
      };
    },
    []
  );

  const dropAt = useCallback((dx: number, dy: number, radius: number, strength: number) => {
    const data = rippleDataRef.current;
    if (!data.rippleMap) return;

    const { width, height, rippleMap, oldIdx } = data;
    dx = Math.floor(dx);
    dy = Math.floor(dy);

    for (let j = dy - radius; j < dy + radius; j++) {
      for (let k = dx - radius; k < dx + radius; k++) {
        if (j >= 0 && j < height && k >= 0 && k < width) {
          rippleMap[oldIdx + j * width + k] += strength;
        }
      }
    }
  }, []);

  const newFrame = useCallback(() => {
    const data = rippleDataRef.current;
    if (!data.rippleMap) return;

    const { width, height, halfWidth, halfHeight, rippleMap, lastMap, texture, ripple } = data;

    const temp = data.oldIdx;
    data.oldIdx = data.newIdx;
    data.newIdx = temp;

    let i = 0;
    data.mapIdx = data.oldIdx;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let rippleData =
          ((rippleMap[data.mapIdx - width] +
            rippleMap[data.mapIdx + width] +
            rippleMap[data.mapIdx - 1] +
            rippleMap[data.mapIdx + 1]) >>
            1);

        rippleData -= rippleMap[data.newIdx + i];

        if (damping > 0) rippleData -= rippleData >> damping;

        rippleMap[data.newIdx + i] = rippleData;
        rippleData = 1024 - rippleData;

        const oldData = lastMap[i];
        lastMap[i] = rippleData;

        if (oldData !== rippleData) {
          let a = Math.floor(((x - halfWidth) * rippleData) / 1024) + halfWidth;
          let b = Math.floor(((y - halfHeight) * rippleData) / 1024) + halfHeight;

          a = Math.max(0, Math.min(width - 1, a));
          b = Math.max(0, Math.min(height - 1, b));

          const newPixel = (a + b * width) * 4;
          const curPixel = i * 4;

          ripple.data[curPixel] = texture.data[newPixel];
          ripple.data[curPixel + 1] = texture.data[newPixel + 1];
          ripple.data[curPixel + 2] = texture.data[newPixel + 2];
        }

        data.mapIdx++;
        i++;
      }
    }
  }, [damping]);

  const run = useCallback(() => {
    if (!canvasRef.current || !rippleDataRef.current.rippleMap) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    newFrame();
    ctx.putImageData(rippleDataRef.current.ripple, 0, 0);

    if (hoverEffectEnabled && isHoveringRef.current && mouseTrailRef.current.length > 0) {
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';

      mouseTrailRef.current.forEach((trail, index) => {
        const age = Date.now() - trail.time;
        const maxAge = 500;

        if (age < maxAge) {
          const alpha = 1 - age / maxAge;
          const radius = 3 + index * 0.5;
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(trail.x, trail.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.restore();

      const now = Date.now();
      mouseTrailRef.current = mouseTrailRef.current.filter((trail) => now - trail.time < 500);
    }
  }, [newFrame, hoverEffectEnabled]);

  const updateMouseTrail = (x: number, y: number) => {
    mouseTrailRef.current.push({ x, y, time: Date.now() });
    if (mouseTrailRef.current.length > 8) mouseTrailRef.current.shift();
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!canvasRef.current || !isHoveringRef.current || !hoverEffectEnabled) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      updateMouseTrail(x, y);
      dropAt(x, y, hoverRippleRadius, 128);
    },
    [dropAt, hoverRippleRadius, hoverEffectEnabled]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!canvasRef.current || !clickToRipple) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      dropAt(x, y, clickRippleRadius, clickRippleStrength);
    },
    [dropAt, clickToRipple, clickRippleRadius, clickRippleStrength]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    mouseTrailRef.current = [];
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      if (!canvasRef.current || !e.touches.length || !isHoveringRef.current || !hoverEffectEnabled)
        return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;

      updateMouseTrail(x, y);
      dropAt(x, y, hoverRippleRadius, 128);
    },
    [dropAt, hoverRippleRadius, hoverEffectEnabled]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      setIsHovering(true);

      if (!clickToRipple || !canvasRef.current || !e.touches.length) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;

      dropAt(x, y, clickRippleRadius, clickRippleStrength);
    },
    [dropAt, clickToRipple, clickRippleRadius, clickRippleStrength]
  );

  const handleTouchEnd = useCallback(() => {
    setIsHovering(false);
    mouseTrailRef.current = [];
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.floor(width), height: Math.floor(height) });
    });

    resizeObserver.observe(canvasRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size.width;
    canvas.height = size.height;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    const setupRipple = () => {
      const frameInterval = 1000 / frameRate;

      initializeRipple(canvas, ctx, img);

      const animate = (timestamp: number) => {
        if (timestamp - lastFrameTimeRef.current >= frameInterval) {
          lastFrameTimeRef.current = timestamp;
          run();
        }
        animationFrameId.current = requestAnimationFrame(animate);
      };

      lastFrameTimeRef.current = performance.now();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    img.onload = setupRipple;

    img.onerror = () => {
      const gradient = ctx.createLinearGradient(0, 0, size.width, size.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size.width, size.height);
      setupRipple();
    };

    if (image) {
      img.src = image;
    } else {
      img.onerror?.(new Event('error'));
    }

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [size, image, initializeRipple, run, frameRate]);

  return (
    <canvas
      ref={canvasRef}
      width={size.width}
      height={size.height}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    />
  );
};
