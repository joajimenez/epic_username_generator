const englishAdjectives = [
  'Epic',
  'Based',
  'Sno',
  'Quiet',
  'Adorable',
  'Adventurous',
  'Attractive',
  'Beautiful',
  'Better',
  'Blue',
  'Brave',
  'Brainy',
  'Bright',
  'Calm',
  'Clever',
  'Colorful',
  'Combative',
  'Courageous',
  'Curious',
  'Cute',
  'Delightful',
  'Determined',
  'Replit',
  'Deez',
  'Step',
];

const englishNames = [
  'Joe',
  'Bird',
  'Apple',
  'Gun',
  'Gum',
  'Gamer',
  'Amogus',
  'Mama',
  'Nuts',
  'Deez',
  'Banana',
  'Replit',
  'Enjoyer',
  'Sister',
  'Kami',
  'Discord',
  'Moderator',
  'Pill',
  'Dog',
  'Cat',
  'Covid',
];

const spanishAdjectives = [
  'Epico',
  'Basado',
  'Tranquilo',
  'Adorable',
  'Aventurero',
  'Atractivo',
  'Hermoso',
  'Mejor',
  'Azul',
  'Valiente',
  'Inteligente',
  'Brillante',
  'Calmado',
  'Inteligente',
  'Colorido',
  'Combativo',
  'Valiente',
  'Curioso',
  'Lindo',
  'Encantador',
  'Decidido',
];

const spanishNames = [
  'Triangulo',
  'Pájaro',
  'Manzano',
  'Taladro',
  'Chicle',
  'Gamer',
  'Papá',
  'Vinagre',
  'Platano',
  'Disfrutador',
  'Hermano',
  'Dios',
  'Velero',
  'Moderador',
  'Yogurt',
  'Perro',
  'Gato',
  'Covid',
];

const englishButton = document.getElementById('english_button');
const spanishButton = document.getElementById('spanish_button');
const usernameDisplay = document.getElementById('username_display');

englishButton.addEventListener('click', () => {
  let name = englishNames[Math.floor(Math.random() * englishNames.length)];
  let adjective =
    englishAdjectives[Math.floor(Math.random() * englishAdjectives.length)];

  const usernameDisplay = document.getElementById('username_display');

  usernameDisplay.innerText = `${adjective}${name.toLocaleLowerCase()}`;
});

spanishButton.addEventListener('click', () => {
  let name = spanishNames[Math.floor(Math.random() * spanishNames.length)];
  let adjective =
    spanishAdjectives[Math.floor(Math.random() * spanishAdjectives.length)];

  let usernameDisplay = document.getElementById('username_display');

  usernameDisplay.innerText = `${name}${adjective.toLocaleLowerCase()}`;
});
