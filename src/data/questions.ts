const QUESTIONS = [
  {
    id: "q1",
    text: "Whose painting was slavery in the Philippines during the spanish period clearly depicted",
    answers: ["Juan Luna", "Andre Bonifacio", "Artemio Ricarte", "Jose Rizal"],
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
    answers: ["Asia", "Australia", "Europe", "Arctic"],
  },
  {
    id: "q4",
    text: "How many levels were added to basic education because of the K-12 reforms?",
    answers: ["3 levels", "1 levels", "2 levels", "4 levels"],
  },
  {
    id: "q5",
    text: "What is the highest career stage in PPST?",
    answers: [
      "Distinguished",
      "Proficient",
      "Highly Proficient",
      "Most Proficient",
    ],
  },
  {
    id: "q6",
    text: "Teacher Victor made sure that the classroom was conducive for learning specifically the chairs that the students will sit on throughout the day. In this situation, he was concerned with this domain in the PPST",
    answers: [
      "Learning Environment",
      "Content Knowledge and Pedagogy",
      "Curriculum and Planning",
      "Personal Growth and Professional Engagement",
    ],
  },
  {
    id: "q7",
    text: "Which of the following expressions displays an attitude of mediocrity among teachers?",
    answers: [
      "“Talagang ganyan lang”",
      "“Kakayanin natin”",
      "Pagbutihin natin",
      "“Walang urungan”",
    ],
  },
  {
    id: "q8",
    text: "When drug addiction happens to an individual, Freud explained that the_______?",
    answers: [
      "Id exerts too much power over the ego",
      "Ego overcomes id",
      "The superego blinds the ego",
      "Id and superego balance each other",
    ],
  },
  {
    id: "q9",
    text: "In Erikson&#39;s psychosocial theory, if a child is able to feel the love of his or her parents or caregivers in the infancy period, he or she will acquire the virtue of ______?",
    answers: ["Hope", "Care", "Wisdom", "Fidelity"],
  },
  {
    id: "q10",
    text: "Joy allows her classmates to copy her homework so that they will think she is kind and will like her to be their friend. In what Kohlberg&#39;s Development Theory does Joy shows? A. Punishment and Obedience",
    answers: [
      "Social Approval",
      "Punishment and Obedience",
      "Mutual Benefit",
      "Law and Order",
    ],
  },
  {
    id: "q11",
    text: "Which form of violence occurs when someone uses a part of their body or an object to control a person&#39;s action?",
    answers: [
      "Physical Violence",
      "Psychological Violence",
      "Cultural Violence",
      "Emotional Violence",
    ],
  },
  {
    id: "q12",
    text: "In order to make Roman education truly utilitarian, how should the day-to-day lesson be taught?",
    answers: [
      "Related and linked to the events happening in the everyday life",
      "Thought in the student&#39;s native dialect",
      "Thought interestingly through the play-way method",
      "Practice at home under the guidance of their respective parents",
    ],
  },
  {
    id: "q13",
    text: "Teacher A demonstrated the technique of how to group students according to their needs and interests and how to use self-paced instructional materials. Which philosophy is manifested in this activity?",
    answers: [
      "Progressivism",
      "Essentialism",
      "Realism",
      "Social Reconstructionism",
    ],
  },
  {
    id: "q14",
    text: "Which is not an example of a school partnership?",
    answers: [
      "School used as the venue for anti-government demonstrators",
      "Classroom used by community organizations for meetings",
      "School used as a polling place during the election",
      "School used as an evacuation center",
    ],
  },
  {
    id: "q15",
    text: "Virtue as one component in the teaching of Rizal as a course focuses on the teaching of good and beauty consistent with the good and beauty in God. What philosophy supports this?",
    answers: [
      "Idealism",
      "Existentialism",
      "Progressivism",
      "Social Reconstructionism",
    ],
  },
  {
    id: "q16",
    text: "This implies a lack of patriotism or lack of appreciation and love of the Philippines rather than foreign things.",
    answers: [
      "Colonial Mentality",
      "Extreme Personalism",
      "Lack of Discipline",
      "Kanya-Kanya Syndrome",
    ],
  },
  {
    id: "q17",
    text: "Which is an application of the conflict theory?",
    answers: [
      "Schools must make learners understand that in life there will always be the powerful and the powerless",
      "Schools must do their part to socialize children or else children will turn out to be delicate citizens",
      "School must teach students to accept their status in life for there is nothing that they can do about it.",
      "School must teach students to speak with clear symbols",
    ],
  },
  {
    id: "q18",
    text: "In her leadership in the community, a professional teacher shows no sign of ethnocentrism. What does this mean?",
    answers: [
      "Does not belittle other people&#39;s culture",
      "Does not mind other people&#39;s culture",
      "Is ashamed of her own culture",
      "Looks at her culture as superior to others&#39; culture",
    ],
  },
  {
    id: "q19",
    text: "What is the essence of servant leadership?",
    answers: [
      "Leading is serving",
      "Leading is changing",
      "Leading is making sure your subordinates feel your power over them",
      "Leading is ensuring that yourself is the first",
    ],
  },
  {
    id: "q20",
    text: "Which legal basis guides the hiring of a new teacher in the public schools?",
    answers: [
      "Magna Carta for public school teachers",
      "Localization law",
      "Professionalization law",
      "Magna Carta for women",
    ],
  },
  {
    id: "q21",
    text: "Teacher Annika tutors her students who have difficulty coping with math after class hours. Is her act ethical?",
    answers: [
      "Yes, provided she does not require a fee from parents",
      "Yes, provided she receives just compensation",
      "No. She should be free after her official time",
      "No. That is unfair to other students",
    ],
  },
  {
    id: "q22",
    text: "Teacher Rochelle affirms that being a teacher is a task entrusted by this world. Does she therefore believe that teaching is a ________?",
    answers: ["Mission", "Profession", "Bread and butter", "Vocation."],
  },
];

// this will shuffle the questions
QUESTIONS.sort(() => Math.random() - 0.5);

export default QUESTIONS;
