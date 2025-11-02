import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface SankeyNode {
  id: string;
  name: string;
  type: 'source' | 'sink' | 'intermediate';
  index?: number;
  x?: number;
  y?: number;
  width?: number;
}

interface SankeyLink {
  source: string | number;
  target: string | number;
  value: number;
  color?: string;
}

interface SankeyDiagramProps {
  nodes: SankeyNode[];
  links: SankeyLink[];
  width?: number;
  height?: number;
}

export function SankeyDiagram({ nodes, links, width = 800, height = 600 }: SankeyDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current || nodes.length === 0 || links.length === 0) return;

    const container = containerRef.current;
    const actualWidth = container.clientWidth || width;
    const actualHeight = Math.max(height, 400);

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', actualWidth)
      .attr('height', actualHeight)
      .style('background', '#0f172a');

    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const chartWidth = actualWidth - margin.left - margin.right;
    const chartHeight = actualHeight - margin.top - margin.bottom;

    // Create node map
    const nodeMap = new Map(nodes.map((n, i) => [n.id, { ...n, index: i }]));
    
    // Prepare data for D3 sankey
    const sankeyNodes = nodes.map((n, i) => ({
      ...n,
      index: i,
    }));

    const sankeyLinks = links.map(link => {
      const sourceNode = typeof link.source === 'string' 
        ? nodeMap.get(link.source) 
        : sankeyNodes[link.source as number];
      const targetNode = typeof link.target === 'string'
        ? nodeMap.get(link.target)
        : sankeyNodes[link.target as number];
      
      return {
        source: sourceNode?.index ?? 0,
        target: targetNode?.index ?? 0,
        value: Math.max(0, link.value),
        color: link.color || '#3b82f6',
      };
    }).filter(link => link.value > 0);

    // Calculate node positions manually (simple layout)
    const sourceNodes = sankeyNodes.filter(n => n.type === 'source');
    const sinkNodes = sankeyNodes.filter(n => n.type === 'sink');
    const intermediateNodes = sankeyNodes.filter(n => n.type === 'intermediate');

    // Position sources on the left
    sourceNodes.forEach((node, i) => {
      node.y = margin.top + (i * chartHeight / Math.max(1, sourceNodes.length - 1));
      node.x = margin.left;
      node.width = 20;
    });

    // Position sinks on the right
    sinkNodes.forEach((node, i) => {
      node.y = margin.top + (i * chartHeight / Math.max(1, sinkNodes.length - 1));
      node.x = chartWidth - margin.right - 20;
      node.width = 20;
    });

    // Position intermediate nodes in the middle
    intermediateNodes.forEach((node, i) => {
      node.y = margin.top + chartHeight / 2 + (i - intermediateNodes.length / 2) * 60;
      node.x = margin.left + chartWidth / 2;
      node.width = 20;
    });

    // Calculate link paths (curved)
    const linkPath = (d: any) => {
      const source = sankeyNodes[d.source];
      const target = sankeyNodes[d.target];
      const path = d3.path();
      path.moveTo(source.x! + source.width!, source.y! + 10);
      path.bezierCurveTo(
        source.x! + source.width! + 100, source.y! + 10,
        target.x! - 100, target.y! + 10,
        target.x!, target.y! + 10
      );
      return path.toString();
    };

    // Draw links
    const linkGroup = svg.append('g').attr('class', 'links');
    linkGroup.selectAll('path')
      .data(sankeyLinks)
      .enter()
      .append('path')
      .attr('d', (d: any) => linkPath(d))
      .attr('stroke', d => d.color)
      .attr('stroke-width', d => Math.max(2, Math.min(20, Math.sqrt(d.value) * 2)))
      .attr('fill', 'none')
      .attr('opacity', 0.6)
      .style('mix-blend-mode', 'multiply')
      .append('title')
      .text(d => `${d.value.toFixed(2)} MWh`);

    // Draw nodes
    const nodeGroup = svg.append('g').attr('class', 'nodes');
    nodeGroup.selectAll('rect')
      .data(sankeyNodes)
      .enter()
      .append('rect')
      .attr('x', d => d.x!)
      .attr('y', d => d.y!)
      .attr('width', d => d.width!)
      .attr('height', 20)
      .attr('fill', d => {
        if (d.type === 'source') return '#22c55e'; // green for sources
        if (d.type === 'sink') return '#ef4444'; // red for sinks
        return '#f59e0b'; // orange for intermediate
      })
      .attr('stroke', '#64748b')
      .attr('stroke-width', 1)
      .attr('rx', 4);

    // Draw labels
    const labelGroup = svg.append('g').attr('class', 'labels');
    labelGroup.selectAll('text')
      .data(sankeyNodes)
      .enter()
      .append('text')
      .attr('x', d => d.type === 'source' ? d.x! - 10 : d.x! + d.width! + 10)
      .attr('y', d => d.y! + 15)
      .attr('text-anchor', d => d.type === 'source' ? 'end' : 'start')
      .attr('fill', '#e5e7eb')
      .attr('font-size', '12px')
      .text(d => d.name);

  }, [nodes, links, width, height]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
