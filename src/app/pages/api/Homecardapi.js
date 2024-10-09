// pages/api/cards.js

export default function handler(req, res) {
    // This function will send JSON data when the API is called
    res.status(200).json([
      {
        "title": "Card Title 1",
        "description": "This is a description for card 1.",
        "image": "https://example.com/image1.jpg",
        "ctaLink": "https://example.com/learn-more-1"
      },
      {
        "title": "Card Title 2",
        "description": "This is a description for card 2.",
        "image": "https://example.com/image2.jpg",
        "ctaLink": "https://example.com/learn-more-2"
      },
      {
        "title": "Card Title 3",
        "description": "This is a description for card 3.",
        "image": "https://example.com/image3.jpg",
        "ctaLink": "https://example.com/learn-more-3"
      }
    ]);
  }
  