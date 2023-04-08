const variants = [
    'Сьесть ПИЦЦКУ',
    'Сьесть Ролов.. мм',
    'Погладить Роки',
    'Поспать',
    'Написать Олегу гадость',
    'Позвонить родителям',
    'Написать Олегу что то хорошее',
    'Затупить в телегу',
    'Затупить в Инсту',
    'Дуолинго?',
    'Полежать на диване'
  ];
  
  const button = document.getElementById('generate-button');
  const resultDiv = document.getElementById('result');
  
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * variants.length);
    resultDiv.innerText = variants[randomIndex];
  });
  