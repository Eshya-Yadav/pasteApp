># Paste App 📝

A simple paste application built with React, Redux Toolkit, and Vite — allowing users to create, edit, and manage text snippets quickly.


> Features 🚀 

- Create, edit and delete snippets (pastes)

- Search pastes by title/content

- Copy paste content to clipboard with one click

- Local persistence using localStorage

- Clean responsive UI

> Tech Stack 🧰 

- React 19

- Redux Toolkit

- Vite

- Tailwind CSS

- React Router

- React Hot Toast

- Lucide React (for icons)

> 🏁 Quick Start (development)

Make sure you run these commands from the folder that contains package.json (e.g. paste-app/)

# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview

> ⚙️ Deployment

This project is configured to deploy on Vercel (Vite preset).
If using Vercel, set the Root Directory to the folder containing this package.json (e.g. paste-app), set Build Command to npm run build and Output Directory to dist.

> 📁 Project Structure 
paste-app/
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── ...
├── public/
└── README.md


> ✅ Tips & Notes

If Vercel build fails with Could not read package.json, ensure the root directory in Vercel points to this folder (paste-app), not the repository root.

If Vercel fails with vite: command not found, ensure Build Command is npm run build so devDependencies (local vite) are used.

>🙋‍♀️ Want to contribute?

Feel free to open issues or submit pull requests. Suggestions and improvements are welcome!
