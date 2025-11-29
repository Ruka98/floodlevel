GeoJSON Node static server
==========================
Steps to run locally:
1. Copy this folder to your machine (or use the zip).
2. Create a .env file in the project root with:
   GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE
   PORT=3000
3. Install dependencies:
   npm install
4. Start server:
   npm start
5. Open http://localhost:3000

Notes:
- index.html.template is served from server with the API key injected server-side.
- public/5m.geojson is served at /static/5m.geojson.
- If you prefer purely static hosting (e.g., Vercel without server), use the earlier static method and keep the API key client-side (but restrict the key).