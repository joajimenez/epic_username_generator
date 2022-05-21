const wordDictionary = {
  englishAdjectives: [
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
  ],

  englishNames: [
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
  ],

  spanishAdjectives: [
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
  ],

  spanishNames: [
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
  ],
};

const buttons = document.querySelectorAll('button[id^=but]');

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let name;
    let adjective;
    let buttonId = event.target.id;

    if (buttonId === 'button_english') {
      name =
        wordDictionary.englishNames[
          Math.floor(Math.random() * wordDictionary.englishNames.length)
        ];

      adjective =
        wordDictionary.englishAdjectives[
          Math.floor(Math.random() * wordDictionary.englishAdjectives.length)
        ];
    } else if (buttonId === 'button_spanish') {
      name =
        wordDictionary.spanishNames[
          Math.floor(Math.random() * wordDictionary.spanishNames.length)
        ];

      adjective =
        wordDictionary.spanishAdjectives[
          Math.floor(Math.random() * wordDictionary.spanishAdjectives.length)
        ];
    }

    const usernameDisplay = document.getElementById('username_display');
    usernameDisplay.innerText = `${adjective}${name.toLocaleLowerCase()}`;
  });
});
