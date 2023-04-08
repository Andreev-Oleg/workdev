import React, { useState } from 'react';

function RandomText() {
  const [text, setText] = useState('');

  const texts = ['Сьесть пиццу', 'Сьесть ролы', 'Погладить Роки', 'Поспать', 'Потупить в Insagram', 'Попить чайку', 'Полежать на диване', 'Написать Олегу', 'Позвонить родителям', 'Поплакать'];

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setText(texts[randomIndex]);
  }

  return (
    <div style={{ backgroundImage: 'url(background.jpg)', backgroundSize: 'cover', height: '100vh' }}>
      <h2>Вокруг Олеси</h2>
      <button onClick={handleClick}>Чем заняться?</button>
      <p>{text}</p>
    </div>
  );
}

export default RandomText;