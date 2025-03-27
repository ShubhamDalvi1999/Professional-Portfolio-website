# Data & AI Engineering Portfolio

A futuristic, minimalistic Data & AI Engineering portfolio website inspired by the aesthetic and layout of x.ai. The site features a dark theme with cosmic gradients and a central interactive search bar.
![image](https://github.com/user-attachments/assets/53a1f053-f2b6-4900-b8db-6d41f0d0a318)

## Features

- Cosmic dark theme with parallax effects
- Interactive elements with glowing hover effects
- Responsive design for all devices
- Skills showcase with animated cards
- Project gallery with gradient backgrounds
- Contact form with animated feedback

## Running the Website

### Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up --build
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## Production Deployment

```bash
# Build for production
npm run build

# Start the production server
npm start
```

For Docker production deployment, uncomment the production service in `docker-compose.yml` and run:

```bash
docker-compose -f docker-compose.yml up --build
```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Docker for containerization 
