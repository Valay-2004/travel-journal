# Travel Journal

A React-based travel journal application that showcases travel experiences with beautiful location cards. Built with React + Vite for a fast, modern development experience.

## 📋 Features

- Display travel entries with location information
- Images of iconic landmarks
- Location details including dates visited
- Google Maps integration links
- Responsive, clean UI design
- Fast performance with Vite

## 🛠️ Technologies Used

- **React** - UI library for building interactive components
- **Vite** - Next generation frontend build tool
- **CSS** - Styling and responsive design
- **JavaScript (ES6+)** - Application logic

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.jsx      - Header component
│   └── Entry.jsx       - Individual travel entry component
├── App.jsx             - Main application component
├── data.js             - Sample travel data
├── index.css           - Global styles
└── main.jsx            - Entry point
```

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Data Structure

Each travel entry contains:

- `id` - Unique identifier
- `img` - Image object with src and alt text
- `title` - Location name
- `country` - Country of the location
- `dates` - Travel dates
- `text` - Description of the location
- `googleMapsLink` - Link to Google Maps

## 🔗 Related Projects

This project is part of a series of React learning projects from Scrimba, exploring component composition, data handling, and styling in React applications.

## 📄 License

This project is open source and available for educational purposes.
