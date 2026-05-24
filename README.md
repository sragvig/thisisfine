# ThisIsFine — Disaster Preparedness Game

**A Girl Scouts Gold Award Project by Sragvi Gireesh**

A free, interactive disaster preparedness game teaching kids and families how to stay safe during hurricanes, wildfires, tornadoes, thunderstorms, heat events, and winter storms.

🎮 **Play the game:** https://this-is-fine-a.flutterflow.app  
📋 **Book a workshop:** https://forms.gle/YUbzW1ZQCg4c9Kn59

---

## Deploying to GitHub Pages

### Step 1 — Create a repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it `thisisfine` (or `yourusername.github.io` for a root domain site)

### Step 2 — Upload these files
Upload all files in this folder to your repository, keeping the folder structure:
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── .nojekyll
├── _config.yml
└── README.md
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main` (or `master`), folder: `/ (root)`
4. Click **Save**

### Step 4 — Your site is live!
GitHub will publish your site at:
- `https://yourusername.github.io/thisisfine/`
- Or `https://yourusername.github.io/` if you named the repo `yourusername.github.io`

It may take 1–2 minutes to go live after enabling Pages.

---

## Adding real photos

The site uses emoji placeholders in the School Workshops section. To replace them with real photos:

1. Add your photos to an `images/` folder
2. Replace the emoji `<div class="wphoto ...">` elements in `index.html` with:
   ```html
   <div class="wphoto">
     <img src="images/your-photo.jpg" alt="Workshop at [School Name]" />
   </div>
   ```
3. Add this CSS to `css/style.css`:
   ```css
   .wphoto img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }
   ```

## Adding real YouTube video embeds

In `index.html`, find the `.video-thumb` divs and replace the play button links with actual YouTube iframes:
```html
<iframe 
  width="100%" height="200" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  title="Workshop video"
  frameborder="0" 
  allowfullscreen>
</iframe>
```

---

## Impact Stats (update as they grow!)

Edit the numbers in `index.html` under the `<!-- STATS -->` section to keep them current.

---

*Built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies, fast everywhere.*
