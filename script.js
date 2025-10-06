// Selecting HTML and CSS
const sportsCards = document.querySelectorAll('.card');
const teams = ["cobra-card", "panthers-card", "horses-card", "eagles-card", "flames-card", "wolves-card"];
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
let currentCardIndex = 0;
const backgroundColor = ["linear-gradient(180deg, #ef6916, #770101)",
"linear-gradient(180deg, #5A2180, #CE2013)",
"linear-gradient(180deg, #F34801, #000000)",
"linear-gradient(180deg, #0B6744, #fff)",
"linear-gradient(180deg, #5F0102, #FFF19B)",
"linear-gradient(180deg, #b3cbe3, #0162C4)"
];
