const QUESTIONS = [
  {
    id: "q1",
    text: "Whose painting was slavery in the Philippines during the spanish period clearly depicted",
    answers: [
      "Juan Luna",
      "Andre Bonifacio",
      "Artemio Ricarte",
      "Jose Rizal",
    ],
  },
  {
    id: "q2",
    text: "For which are the Filipinos thankful for Julian Felipe?",
    answers: [
      "the tune of the National Anthem",
      "the making of the National flag",
      "the lyrics of the National Anthem",
      "the draft of the malolos constitution",
    ],
  },
  {
    id: "q3",
    text: "The largest continent and has the longest coastline in the world",
    answers: [
      "Asia",
      "Australia",
      "Europe",
      "Arctic",
    ],
  },
  
];

// this will shuffle the questions
QUESTIONS.sort(() => Math.random() - 0.5);

export default QUESTIONS;
