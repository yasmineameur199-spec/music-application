# Music Application

A simple Node.js and Express-based API for managing a music library.  
You can create, update, delete, and fetch music tracks and artists.

## Features

- Add, view, update, and delete songs
- Search for songs by artist
- Authentication and admin access control
- Organized with controllers, routes, and middlewares
## Project Structure

projet-musique/
├── controllers/
│ ├── music.controllers.js
│ └── artiste.controllers.js
├── routes/
│ └── music.routes.js
│ 
├── middlewares/
│ └── middlewares.js
├── package.json
└── server.js

## Installation

1. Clone the repository  
   `git clone https://github.com/yasmineameur199-spec/music-application.git`

2. Install dependencies  
   `npm install`

3. Start the server  
   `npm start`

## Example API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/music/` | Get all songs |
| GET | `/music/:id` | Get a song by ID |
| POST | `/music/` | Add a new song |
| PUT | `/music/:id` | Update an existing song |
| DELETE | `/music/:id` | Delete a song |
| GET | `/artiste/:artiste` | Get all songs by an artist |

## Author

Yasmine Ameur  
Student at Collège La Cité  
GitHub: [@yasmineameur199-spec](https://github.com/yasmineameur199-spec)
