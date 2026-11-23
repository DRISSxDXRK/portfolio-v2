/* Portfolio V2 — work list.
   The 25 videos, copied from the live portfolio's videos.js.
   Posters and video files are served from https://drizoeditz.pro/
   (absolute URLs) — no media files are stored in this repo.
   Client codes: ahp = Art Home Photo, as = Art Social,
   charlie = Charlie's Pokecards, hercules = Hercules Training. */
const VIDEOS = [
  { "title": "Isabelle \u2014 Reel 1", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-isabelle-reel-1.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-isabelle-reel-1.jpg", "format": ["reels"], "vertical": true },
  { "title": "Isabelle \u2014 Reel 2", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-isabelle-reel-2.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-isabelle-reel-2.jpg", "format": ["reels"], "vertical": true },
  { "title": "Delaney \u2014 Reel 1", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-delaney-reel-1.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-delaney-reel-1.jpg", "format": ["reels"], "vertical": true },
  { "title": "Claire \u2014 Reel 2", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-claire-reel-2.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-claire-reel-2.jpg", "format": ["reels"], "vertical": true },
  { "title": "Claire \u2014 Reel 3", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-claire-reel-3.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-claire-reel-3.jpg", "format": ["reels"], "vertical": true },
  { "title": "Peekaboo Cut", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-peekaboo.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-peekaboo.jpg", "format": ["reels"], "vertical": true },
  { "title": "Lilly \u2014 Reel 1", "client": "ahp", "src": "https://drizoeditz.pro/videos/ahp-lilly-reel-1.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-lilly-reel-1.jpg", "format": ["reels"], "vertical": true },
  { "title": "Gomez \u2014 Reel 1", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-gomez-reel-1.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-gomez-reel-1.jpg", "format": ["reels"], "vertical": true },
  { "title": "Gomez \u2014 Reel 2", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-gomez-reel-2.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-gomez-reel-2.jpg", "format": ["reels"], "vertical": true },
  { "title": "Alexa Gomez \u2014 Reel", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-alexa-gomez-reel.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-alexa-gomez-reel.jpg", "format": ["reels"], "vertical": true },
  { "title": "Dustin \u2014 Reel 2", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-dustin-reel-2.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-dustin-reel-2.jpg", "format": ["reels"], "vertical": true },
  { "title": "Dustin \u2014 Reel 3", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-dustin-reel-3.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-dustin-reel-3.jpg", "format": ["reels"], "vertical": true },
  { "title": "Brachen \u2014 Reel 1", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-brachen-reel-1.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-brachen-reel-1.jpg", "format": ["reels"], "vertical": true },
  { "title": "Brachen \u2014 Reel 2", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-brachen-reel-2.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-brachen-reel-2.jpg", "format": ["reels"], "vertical": true },
  { "title": "Brachen \u2014 Reel 3", "client": "as", "src": "https://drizoeditz.pro/videos/ahp-brachen-reel-3.mp4", "poster": "https://drizoeditz.pro/thumbs/ahp-brachen-reel-3.jpg", "format": ["reels"], "vertical": true },
  { "title": "Pack Opening \u2014 iPhone Cut", "client": "charlie", "src": "https://drizoeditz.pro/videos/charlie-pack-opening.mp4", "poster": "https://drizoeditz.pro/thumbs/charlie-pack-opening.jpg", "format": ["reels"], "vertical": true },
  { "title": "Pikachu x Zekrom", "client": "charlie", "src": "https://drizoeditz.pro/videos/charlie-pikachu-zekrom.mp4", "poster": "https://drizoeditz.pro/thumbs/charlie-pikachu-zekrom.jpg", "format": ["reels"], "vertical": true },
  { "title": "$200 Trade-Up", "client": "charlie", "src": "https://drizoeditz.pro/videos/charlie-200-trade-up.mp4", "poster": "https://drizoeditz.pro/thumbs/charlie-200-trade-up.jpg", "format": ["reels"], "vertical": true },
  { "title": "401 Games Feature", "client": "charlie", "src": "https://drizoeditz.pro/videos/charlie-401-games.mp4", "poster": "https://drizoeditz.pro/thumbs/charlie-401-games.jpg", "format": ["reels"], "vertical": true },
  { "title": "Client Edit \u2014 Derrek 12", "client": "hercules", "src": "https://drizoeditz.pro/videos/drive-derrek-edit-12.mp4", "poster": "https://drizoeditz.pro/thumbs/drive-derrek-edit-12.jpg", "format": ["reels"], "vertical": true },
  { "title": "Client Edit \u2014 Derrek 14", "client": "hercules", "src": "https://drizoeditz.pro/videos/drive-derrek-edit-14.mp4", "poster": "https://drizoeditz.pro/thumbs/drive-derrek-edit-14.jpg", "format": ["reels"], "vertical": true },
  { "title": "Client Edit \u2014 Drake 13", "client": "hercules", "src": "https://drizoeditz.pro/videos/drive-drake-edit-13.mp4", "poster": "https://drizoeditz.pro/thumbs/drive-drake-edit-13.jpg", "format": ["reels"], "vertical": true },
  { "title": "Chaos Rising \u2014 Pack Opening", "client": "charlie", "youtube": "VPgi7ncVia0", "poster": "https://drizoeditz.pro/thumbs/yt-VPgi7ncVia0.jpg", "format": ["youtube"], "vertical": false },
  { "title": "Mega Zygarde", "client": "charlie", "youtube": "bY7Z3jxcb6g", "poster": "https://drizoeditz.pro/thumbs/yt-bY7Z3jxcb6g.jpg", "format": ["youtube"], "vertical": false },
  { "title": "Chinese Exclusive Gem Pack 3", "client": "charlie", "youtube": "mxR-9d-3uaQ", "poster": "https://drizoeditz.pro/thumbs/yt-mxR-9d-3uaQ.jpg", "format": ["youtube"], "vertical": false }
];
