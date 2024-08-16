import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Corporate", "Invidual", "Design", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "NFC tag 216.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Metal.", "So strong. So light. So Executive."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      // "Metal Card Max has the",
      // "longest optical zoom in",
      // "iPhone ever. Far out.",
      "Data retention: 10 years.",
      "Endurance: 100,000 cycles.",
      "Password Protection: Yes."
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Metal Card in Gold Titanium",
    color: ["#FFD700", "#ffe7b9", "#6f6c64"],
    type: "small",
  },
  {
    id: 2,
    title: "Metal Card in Silver Titanium",
    color: ["#C0C0C0", "#6395ff", "#21242e"],
    type: "large",
  },
  {
    id: 3,
    title: "Metal Card in Rose Titanium",
    color: ["#B76E79", "#ffffff", "#C9C8C2"],
    type: "exLarge",
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
  { label: '6.8"', value: "exLarge" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];