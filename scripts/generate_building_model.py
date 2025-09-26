#!/usr/bin/env python3
"""Generate a stylized high‑rise that better matches the reference photo.

The goal is resemblance rather than accuracy: a tall slab body with a grid of
windows and protruding balconies along one long façade.
"""

from pathlib import Path

import numpy as np
import trimesh

BASE_DIR = Path(__file__).resolve().parents[1]
ASSETS_DIR = BASE_DIR / "frontend" / "public" / "assets"
ASSETS_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_PATH = ASSETS_DIR / "building.glb"

# Global dimensions (meters)
# Coordinate convention for generated mesh:
#   X = width (long facade), Y = height (up), Z = depth
FLOORS = 15
FLOOR_H = 3.0
HEIGHT = FLOORS * FLOOR_H
COLS = 12                       # window bays across the long façade
BAY_W = 6.0                      # approx width of a window bay
WIDTH = COLS * BAY_W             # tower width
DEPTH = 16.0

# Balcony parameters (on one long façade)
BALCONY_W = BAY_W * 0.78
BALCONY_D = 1.8
BALCONY_H = 1.1

# Colors (RGBA)
C = {
    "facade": [212, 218, 226, 255],      # light grey
    "window": [130, 160, 190, 255],      # blue grey
    "balcony": [232, 206, 130, 255],     # warm yellow
    "rail": [170, 200, 220, 200],        # semi‑transparent glass
    "core": [205, 210, 220, 255],        # side core panels
    "ground": [55, 70, 90, 255],
}

def color(mesh: trimesh.Trimesh, rgba):
    mesh.visual.vertex_colors = np.tile(rgba, (mesh.vertices.shape[0], 1))
    return mesh

parts = []

# 1) Main tower body (Y-up)
core = trimesh.creation.box(extents=(WIDTH, HEIGHT, DEPTH))
core.apply_translation((0, HEIGHT / 2, 0))
parts.append(color(core, C["facade"]))

# 2) Recessed window planes (slightly inset on both long façades)
win_front = trimesh.creation.box(extents=(WIDTH * 0.98, HEIGHT * 0.98, DEPTH * 0.04))
win_front.apply_translation((0, HEIGHT / 2, DEPTH * 0.52))
parts.append(color(win_front, C["window"]))

win_back = trimesh.creation.box(extents=(WIDTH * 0.98, HEIGHT * 0.98, DEPTH * 0.04))
win_back.apply_translation((0, HEIGHT / 2, -DEPTH * 0.52))
parts.append(color(win_back, C["window"]))

# 3) Vertical side core (mimic service/stair tower look on one long side)
side_core = trimesh.creation.box(extents=(BAY_W * 1.1, HEIGHT, DEPTH))
side_core.apply_translation((WIDTH / 2 - BAY_W * 0.55, HEIGHT / 2, 0))
parts.append(color(side_core, C["core"]))

# 4) Balconies along both long façades (+Z and -Z)
col_spacing = WIDTH / COLS
for f in range(FLOORS):
    y = FLOOR_H * (f + 0.5)
    for c in range(COLS):
        x = -WIDTH / 2 + col_spacing * (c + 0.5)
        # skip a couple of columns to create rhythm like photo
        if c % 3 == 2:
            continue
        # Front (+Z)
        balcony_f = trimesh.creation.box(extents=(BALCONY_W, BALCONY_H, BALCONY_D))
        balcony_f.apply_translation((x, y, DEPTH / 2 + BALCONY_D / 2))
        parts.append(color(balcony_f, C["balcony"]))
        rail_f = trimesh.creation.box(extents=(BALCONY_W * 0.95, BALCONY_H * 0.9, 0.04))
        rail_f.apply_translation((x, y, DEPTH / 2 + BALCONY_D + 0.02))
        parts.append(color(rail_f, C["rail"]))

        # Back (-Z)
        balcony_b = trimesh.creation.box(extents=(BALCONY_W, BALCONY_H, BALCONY_D))
        balcony_b.apply_translation((x, y, -DEPTH / 2 - BALCONY_D / 2))
        parts.append(color(balcony_b, C["balcony"]))
        rail_b = trimesh.creation.box(extents=(BALCONY_W * 0.95, BALCONY_H * 0.9, 0.04))
        rail_b.apply_translation((x, y, -DEPTH / 2 - BALCONY_D - 0.02))
        parts.append(color(rail_b, C["rail"]))

# 5) Window mullion hint (horizontal bands every floor across both façades)
for f in range(1, FLOORS):
    band_f = trimesh.creation.box(extents=(WIDTH * 0.99, 0.12, 0.03))
    band_f.apply_translation((0, f * FLOOR_H, DEPTH * 0.51))
    parts.append(color(band_f, C["facade"]))

    band_b = trimesh.creation.box(extents=(WIDTH * 0.99, 0.12, 0.03))
    band_b.apply_translation((0, f * FLOOR_H, -DEPTH * 0.51))
    parts.append(color(band_b, C["facade"]))

# 6) Ground plinth
base = trimesh.creation.box(extents=(WIDTH * 1.15, 0.6, DEPTH * 1.15))
base.apply_translation((0, 0.3, 0))
parts.append(color(base, C["ground"]))

scene = trimesh.Scene(parts)
scene.export(OUTPUT_PATH)
print(f"Created {OUTPUT_PATH.relative_to(BASE_DIR)}")
