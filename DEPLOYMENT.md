# Deployment

## GitHub Pages

This game is deployed via GitHub Pages.

### First-time setup

1. Install dependencies: `npm install`
2. Deploy: `npm run deploy`

This builds the project and pushes the output to a `gh-pages` branch, which GitHub serves automatically.

### After making changes

Run `npm run deploy` — it handles the build and publish in one step.

### Custom domain (optional)

To use a custom domain, add a `CNAME` file to the `public/` folder containing your domain name, then configure DNS to point to GitHub Pages.
