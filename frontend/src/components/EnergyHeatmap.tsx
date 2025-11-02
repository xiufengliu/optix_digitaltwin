import React, { useMemo } from 'react';

interface EnergyHeatmapProps {
  data: number[]; // Energy values
  timestamps?: string[] | null;
  stepSize?: number; // minutes per step (default 10)
  width?: number;
  height?: number;
}

export function EnergyHeatmap({ data, timestamps, stepSize = 10, width = 800, height = 400 }: EnergyHeatmapProps) {
  const heatmapData = useMemo(() => {
    if (!data || data.length === 0) return null;

    // Group data by hour and day (if we have enough data)
    const hoursPerDay = 24;
    const stepsPerHour = 60 / stepSize;
    const stepsPerDay = hoursPerDay * stepsPerHour;
    
    // Parse timestamps if available
    let dateObjects: Date[] = [];
    if (timestamps && timestamps.length === data.length) {
      dateObjects = timestamps.map(ts => new Date(ts));
    } else {
      // Generate synthetic dates starting from today
      const startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      dateObjects = data.map((_, i) => {
        const date = new Date(startDate);
        date.setMinutes(date.getMinutes() + i * stepSize);
        return date;
      });
    }

    // Create a matrix: rows = days, cols = hours
    const dayMap = new Map<number, Map<number, number[]>>();
    
    dateObjects.forEach((date, idx) => {
      const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
      const hour = date.getHours();
      
      if (!dayMap.has(dayOfYear)) {
        dayMap.set(dayOfYear, new Map());
      }
      const hourMap = dayMap.get(dayOfYear)!;
      if (!hourMap.has(hour)) {
        hourMap.set(hour, []);
      }
      hourMap.get(hour)!.push(data[idx] || 0);
    });

    // Convert to array format and calculate averages
    const maxDay = Math.max(...Array.from(dayMap.keys()));
    const minDay = Math.min(...Array.from(dayMap.keys()));
    const numDays = maxDay - minDay + 1;
    
    const matrix: number[][] = [];
    for (let day = minDay; day <= maxDay; day++) {
      const row: number[] = [];
      for (let hour = 0; hour < 24; hour++) {
        const values = dayMap.get(day)?.get(hour) || [];
        const avg = values.length > 0 
          ? values.reduce((a, b) => a + b, 0) / values.length 
          : 0;
        row.push(avg);
      }
      matrix.push(row);
    }

    // Find min/max for color scaling
    const allValues = matrix.flat();
    const max = Math.max(...allValues, 1);
    const min = Math.min(...allValues, 0);

    return { matrix, min, max, numDays };
  }, [data, timestamps, stepSize]);

  if (!heatmapData || heatmapData.matrix.length === 0) {
    return <div style={{ padding: '2rem', color: '#94a3b8' }}>No data available for heatmap</div>;
  }

  const { matrix, min, max } = heatmapData;
  const cellWidth = Math.floor(width / 24);
  const cellHeight = Math.floor(height / Math.max(matrix.length, 7));

  const getColor = (value: number) => {
    const normalized = max > min ? (value - min) / (max - min) : 0;
    // Color scale: blue (low) -> green -> yellow -> red (high)
    if (normalized < 0.25) {
      const t = normalized / 0.25;
      return `rgb(${Math.floor(30 + t * 20)}, ${Math.floor(144 + t * 60)}, ${Math.floor(255 - t * 100)})`;
    } else if (normalized < 0.5) {
      const t = (normalized - 0.25) / 0.25;
      return `rgb(${Math.floor(50 + t * 100)}, ${Math.floor(204 + t * 40)}, ${Math.floor(155 - t * 50)})`;
    } else if (normalized < 0.75) {
      const t = (normalized - 0.5) / 0.25;
      return `rgb(${Math.floor(150 + t * 100)}, ${Math.floor(244 - t * 50)}, ${Math.floor(105 - t * 50)})`;
    } else {
      const t = (normalized - 0.75) / 0.25;
      return `rgb(${Math.floor(250 - t * 10)}, ${Math.floor(194 + t * 30)}, ${Math.floor(55 - t * 20)})`;
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', padding: '1rem' }}>
      <div style={{ marginBottom: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
        Energy Pattern Heatmap (Time of Day vs Day)
      </div>
      <svg width={width} height={height} style={{ background: '#1e293b' }}>
        {/* Hour labels (x-axis) */}
        {Array.from({ length: 24 }, (_, h) => {
          if (h % 4 !== 0) return null;
          return (
            <text
              key={`hour-${h}`}
              x={h * cellWidth + cellWidth / 2}
              y={15}
              fill="#94a3b8"
              fontSize="10px"
              textAnchor="middle"
            >
              {h}:00
            </text>
          );
        })}

        {/* Day labels (y-axis) */}
        {matrix.map((_, dayIdx) => {
          if (dayIdx % Math.ceil(matrix.length / 7) !== 0 && dayIdx !== matrix.length - 1) return null;
          return (
            <text
              key={`day-${dayIdx}`}
              x={5}
              y={dayIdx * cellHeight + cellHeight / 2 + 5}
              fill="#94a3b8"
              fontSize="10px"
            >
              Day {dayIdx + 1}
            </text>
          );
        })}

        {/* Heatmap cells */}
        {matrix.map((row, dayIdx) =>
          row.map((value, hourIdx) => (
            <rect
              key={`cell-${dayIdx}-${hourIdx}`}
              x={hourIdx * cellWidth + 30}
              y={dayIdx * cellHeight + 20}
              width={cellWidth - 1}
              height={cellHeight - 1}
              fill={getColor(value)}
              opacity={0.8}
            >
              <title>{`Day ${dayIdx + 1}, ${hourIdx}:00 - ${value.toFixed(2)} MW`}</title>
            </rect>
          ))
        )}
      </svg>
      <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
        <span>Min: {min.toFixed(2)} MW</span>
        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
          {Array.from({ length: 20 }, (_, i) => {
            const value = min + (max - min) * (i / 19);
            return (
              <div
                key={i}
                style={{
                  width: '12px',
                  height: '12px',
                  background: getColor(value),
                }}
              />
            );
          })}
        </div>
        <span>Max: {max.toFixed(2)} MW</span>
      </div>
    </div>
  );
}
