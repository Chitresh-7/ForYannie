# Her Birthday Website — v3 (your own Canva artwork)

Everything is in **`index.html`**. All 19 of your decorative PNGs (dove, envelope, lily,
butterfly, dog, cats, vinyl, album, notebook, plaid/lace backgrounds, frames, etc.) are
already wired into `assets/decor/` and placed on the right screens — nothing more to do
there. You only need to:

1. Drop your **content** (photos/drawing/songs) into `assets/images` and `assets/audio`.
2. Edit the `CONFIG` object near the bottom `<script>` in `index.html` to personalize text.

## 1. What's already done for you (`assets/decor/`)

| File | Used on |
|---|---|
| `lace-dots-bg.png` | Opening screen background |
| `kraft-card.png` | Opening screen's torn card |
| `dog-reading.png`, `lily.png` | Opening screen decoration |
| `plaid-bg.png` | Gift hub background |
| `hub-cat.png` | Center cat on the gift hub |
| `vinyl-notes.png` | Songs page + Songs icon on the hub |
| `photo-album.png` | Photos page + Photos icon on the hub |
| `torn-note-heart.png` | Letter icon on hub, drawing page frame, letter's "p.s." note |
| `frame-corners-lined-hearts.png` | Photos page decorative frame |
| `cat-badges.png` | Photos page (next to the heading) |
| `cats-bow.png` | Songs page |
| `notebook.png` | Songs page song-list panel |
| `frame-corners-script.png` | Letter page background frame |
| `envelope-sealed.png`, `dove.png` | Letter page |
| `butterfly.png`, `envelope-plain.png`, `babys-breath.png`, `lily.png`, `dove.png` | Moments (roses) page |

`frame-corners-plain.png` wasn't used on any screen (I used the lined-hearts and script versions instead so each page looks a little different) — it's still in the folder if you'd like it somewhere, just add an `<img>` tag wherever you want it.

## 2. Where to put your own content

```
assets/
├── images/
│   ├── photo1.jpg   ┐
│   ├── photo2.jpg   │  the 4 photos in the album
│   ├── photo3.jpg   │
│   ├── photo4.jpg   ┘
│   ├── drawing.jpg  ← your drawing
│   ├── rose1.jpg     ┐
│   ├── rose2.jpg     │  the 18 "Moments with You" photos
│   ├── ...           │  (numbered exactly like this)
│   └── rose18.jpg    ┘
└── audio/
    ├── song1.mp3  ┐
    ├── song2.mp3  │  the Songs page
    └── song3.mp3  ┘
```

Every slot shows a soft "add your photo here" placeholder until the real file exists, so you can preview the site before your content is ready. Want a different number of photos/songs/roses? Edit `CONFIG.photos` / `CONFIG.songs` / `CONFIG.roseCount` in `index.html`.

## 3. Things to personalize (inside `CONFIG`)

- `girlfriendName`, `openingLine1`, `openingLine2`
- `letterText` — `{{name}}` auto-inserts her name
- `songs` — title + artist per track
- `roseCaptions` — optional captions, one per photo
- `blowThreshold` / `blowHoldFrames` — mic sensitivity for the candle gift

## 4. Running it

**Everything except the candle-blowing gift:** just double-click `index.html`.

**The microphone gift** needs a real server (browsers block mic access on `file://`):
```
python3 -m http.server 8000
```
then open `http://localhost:8000`. To send it to her, upload the folder to a free host like Netlify Drop (netlify.com/drop) or GitHub Pages — both give `https://`, which also enables the mic. Tapping the candles directly still works with no mic at all.
