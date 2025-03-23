const axios = require("axios");
const pool = require("../config/db");

const recommendGift = async (req, res) => {
  const { userId, occasion, preferences } = req.body;

  if (!userId || !occasion || !preferences) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Call AI agent for recommendations
    const aiResponse = await axios.post("http://localhost:5000/recommend", {
      occasion,
      preferences,
    });

    const recommendations = aiResponse.data.recommendations;

    // Save recommendations in database
    await pool.query(
      "INSERT INTO recommendations (user_id, occasion, recommendations) VALUES (?, ?, ?)",
      [userId, occasion, JSON.stringify(recommendations)]
    );

    res.status(200).json({ success: true, recommendations });
  } catch (error) {
    console.error("AI Recommendation Error:", error.message);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
};

module.exports = { recommendGift };
