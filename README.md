# Reigner Initiative Website

NGO website built with React + Vite.

## Local development

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production files: `npm run build`

## Netlify hosting

This project is already configured for Netlify via [netlify.toml](netlify.toml).

1. Push this project to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Select your GitHub repository.
4. Deploy (Netlify will use:
	- Build command: `npm run build`
	- Publish directory: `dist`
	- Node version: `22.12.0`)

After deploy, Netlify will give you a live URL.
