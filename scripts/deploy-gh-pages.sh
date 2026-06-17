#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_DIR="/tmp/qamqor-systems-gh-pages"
REMOTE_URL="$(git -C "$ROOT_DIR" remote get-url origin)"

cd "$ROOT_DIR"

npm run build

rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -R "$ROOT_DIR/dist/." "$DEPLOY_DIR/"

git -C "$DEPLOY_DIR" init
git -C "$DEPLOY_DIR" checkout -b gh-pages
git -C "$DEPLOY_DIR" add .
git -C "$DEPLOY_DIR" commit -m "Publish the built site to GitHub Pages" \
  -m "Constraint: GitHub Pages serves the production site from the gh-pages branch" \
  -m "Confidence: high" \
  -m "Scope-risk: narrow" \
  -m "Tested: npm run build" \
  -m "Not-tested: live GitHub Pages cache invalidation timing" \
  -m "Co-authored-by: OmX <omx@oh-my-codex.dev>"
git -C "$DEPLOY_DIR" remote add origin "$REMOTE_URL"
git -C "$DEPLOY_DIR" push -f origin gh-pages

echo "Deployed to GitHub Pages from dist/"
