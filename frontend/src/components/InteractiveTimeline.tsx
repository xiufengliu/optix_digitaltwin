import React, { useCallback, useEffect, useRef, useState } from 'react';

interface InteractiveTimelineProps {
  currentStep: number;
  maxSteps: number;
  onStepChange: (step: number) => void;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  playbackSpeed?: number; // steps per second
}

export function InteractiveTimeline({
  currentStep,
  maxSteps,
  onStepChange,
  isPlaying = false,
  onPlayPause,
  playbackSpeed = 2,
}: InteractiveTimelineProps) {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const handleSliderChange = useCallback((value: number) => {
    const clamped = Math.max(0, Math.min(maxSteps, Math.round(value)));
    onStepChange(clamped);
  }, [maxSteps, onStepChange]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, x / rect.width));
      handleSliderChange(ratio * maxSteps);
    }
  }, [maxSteps, handleSliderChange]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, x / rect.width));
    handleSliderChange(ratio * maxSteps);
  }, [isDragging, maxSteps, handleSliderChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && onPlayPause) {
      intervalRef.current = window.setInterval(() => {
        if (currentStep < maxSteps) {
          handleSliderChange(currentStep + 1);
        } else {
          onPlayPause(); // Stop at end
        }
      }, 1000 / playbackSpeed);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isPlaying, currentStep, maxSteps, playbackSpeed, handleSliderChange, onPlayPause]);

  const ratio = maxSteps > 0 ? currentStep / maxSteps : 0;

  return (
    <div style={{
      padding: '1rem',
      background: '#1e293b',
      borderRadius: '8px',
      border: '1px solid #334155',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '0.5rem',
      }}>
        {onPlayPause && (
          <button
            onClick={onPlayPause}
            style={{
              padding: '0.5rem 1rem',
              background: isPlaying ? '#ef4444' : '#22c55e',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>
        )}
        <span style={{ color: '#cbd5e1', fontSize: '0.9rem', minWidth: '80px' }}>
          Step: {currentStep} / {maxSteps}
        </span>
        <div style={{ flex: 1, position: 'relative' }}>
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            style={{
              width: '100%',
              height: '32px',
              background: '#334155',
              borderRadius: '4px',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            {/* Progress bar */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: `${ratio * 100}%`,
                height: '100%',
                background: '#3b82f6',
                borderRadius: '4px',
                transition: isDragging ? 'none' : 'width 0.1s ease',
              }}
            />
            {/* Handle */}
            <div
              style={{
                position: 'absolute',
                left: `${ratio * 100}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                background: '#fbbf24',
                borderRadius: '50%',
                border: '2px solid white',
                cursor: 'grab',
                transition: isDragging ? 'none' : 'left 0.1s ease',
              }}
            />
          </div>
        </div>
        <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
          {Math.round(ratio * 100)}%
        </span>
      </div>
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        fontSize: '0.85rem',
        color: '#94a3b8',
      }}>
        <button
          onClick={() => handleSliderChange(0)}
          style={{
            padding: '0.25rem 0.5rem',
            background: '#334155',
            color: '#cbd5e1',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          ⏮ Start
        </button>
        <button
          onClick={() => handleSliderChange(Math.max(0, currentStep - 10))}
          style={{
            padding: '0.25rem 0.5rem',
            background: '#334155',
            color: '#cbd5e1',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          ⏪ -10
        </button>
        <button
          onClick={() => handleSliderChange(Math.min(maxSteps, currentStep + 10))}
          style={{
            padding: '0.25rem 0.5rem',
            background: '#334155',
            color: '#cbd5e1',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          +10 ⏩
        </button>
        <button
          onClick={() => handleSliderChange(maxSteps)}
          style={{
            padding: '0.25rem 0.5rem',
            background: '#334155',
            color: '#cbd5e1',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          End ⏭
        </button>
      </div>
    </div>
  );
}
