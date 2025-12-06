#!/usr/bin/env bash
# build_frontend.sh
#
# Usage:
#   ./build_frontend.sh
#   API_BASE="https://your.domain/api" ./build_frontend.sh
#
# Notes:
# - API_BASE overrides the default; it is passed to Vite as VITE_API_BASE.
# - Exits on first error.

set -euo pipefail

REPO_DIR="/opt/app/optix_digitaltwin"
FRONTEND_DIR="$REPO_DIR/frontend"
API_BASE="${API_BASE:-https://dt.scicloud.site/api}"

echo "==> Repo dir:     $REPO_DIR"
echo "==> Frontend dir: $FRONTEND_DIR"
echo "==> API base:     $API_BASE"
echo

# 1) Update repository
cd "$REPO_DIR"
echo "==> git pull"
git pull --ff-only

# 2) Build frontend with explicit API base
cd "$FRONTEND_DIR"
echo "==> Vite build (VITE_API_BASE=$API_BASE)"
VITE_API_BASE="$API_BASE" npm run build

echo
echo "✅ Build finished."

