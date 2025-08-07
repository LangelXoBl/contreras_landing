# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro landing page project using the basics template. It's a fresh Astro 5.x project with minimal dependencies and configuration.

## Development Commands

All commands should be run from the project root:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

## Architecture

**Framework**: Astro 5.x with TypeScript support (strict mode)

**Key Directories**:

- `src/pages/` - File-based routing, main entry point is index.astro
- `src/layouts/` - Layout components (currently Layout.astro for base HTML structure)
- `src/components/` - Reusable Astro components (currently Welcome.astro)
- `src/assets/` - Static assets like SVG files imported in components
- `public/` - Static files served directly (favicon, etc.)

**Component Structure**:

- Pages use layouts via import and wrapping (`<Layout><Welcome /></Layout>`)
- Components can import assets and use them with `.src` property
- Styling is component-scoped using `<style>` blocks in .astro files
- TypeScript configuration extends astro/tsconfigs/strict

**Current State**: This is a starter template with default Astro welcome content. The main page (index.astro) renders a Welcome component inside the base Layout.
