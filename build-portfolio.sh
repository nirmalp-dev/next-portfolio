#!/bin/bash

# Set the path to your Next.js project directory
PROJECT_DIR="~/next-portfolio"

# Build the Next.js application
cd "$PROJECT_DIR"
npm run build

# Move the `.next` directory to `docs`
mv "$PROJECT_DIR"/.next "$PROJECT_DIR"/docs

echo "Next.js application built and transferred to docs directory."
