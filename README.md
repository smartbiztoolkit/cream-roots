# Brew City Roots - Coming Soon Landing Page

A luxury coming soon landing page for Brew City Roots, featuring glassmorphic design elements and a sophisticated plant-themed aesthetic.

## Features

- **Luxury Design**: High-end aesthetic with lush green backgrounds and glassmorphic effects
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Email Signup**: Functional email collection form with success feedback
- **Smooth Animations**: Fade-in effects and hover interactions
- **Brand Integration**: Your authentic Brew City logo prominently featured
- **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS

## Quick Start

### Option 1: Deploy to GitHub Pages
1. Upload the contents of this zip to your GitHub repository
2. Go to Settings > Pages in your GitHub repo
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Deploy to Netlify
1. Extract the zip file
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site will be instantly deployed with a custom URL

### Option 3: Deploy to Vercel
1. Upload to GitHub (see Option 1)
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy your site

## Development

If you want to modify the website:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Email Integration

Currently, the email form shows a success message but doesn't actually send emails. To integrate with your email service:

1. **Mailchimp**: Replace the form submission with Mailchimp API calls
2. **ConvertKit**: Use ConvertKit's form embed or API
3. **Custom Backend**: Set up a backend service to handle form submissions to `growwithus@brewcityroots.com`

## File Structure

- `src/` - Source code
- `dist/` - Built files ready for deployment
- `public/` - Static assets
- `src/assets/` - Your logo and other images

## Customization

The main styling is in `src/App.css` and uses Tailwind CSS classes. Key colors and effects can be modified there.

## Contact

For questions about this website, contact the development team.

---

**Built with ❤️ for Brew City Roots**

