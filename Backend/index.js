const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Static SEO headline templates
const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "{name}: The Talk of {location} This Year!",
  "Discover Why {name} Dominates {location}'s Market",
  "Top Reasons to Choose {name} in {location}",
  "{name} is the Rising Star of {location} in 2025"
];

// ✅ Root route to show API info
app.get('/', (req, res) => {
  res.json({
    message: "🚀 GrowthProAI API is running",
    available_routes: {
      post_business_data: "POST /business-data",
      get_regenerate_headline: "GET /regenerate-headline?name=...&location=..."
    }
  });
});

// ✅ POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing 'name' or 'location'" });
  }

  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 200 + 30);
  const headline = generateHeadline(name, location);

  res.json({
    rating: parseFloat(rating),
    reviews,
    headline
  });
});

// ✅ GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing 'name' or 'location'" });
  }

  const headline = generateHeadline(name, location);
  res.json({ headline });
});

// Utility: Generate a random headline
function generateHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace(/{name}/g, name).replace(/{location}/g, location);
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
