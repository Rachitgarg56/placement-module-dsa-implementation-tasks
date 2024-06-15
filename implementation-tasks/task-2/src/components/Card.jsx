import { useState } from 'react';
import { Card } from 'react-bootstrap';

function CardComponent({ number }) {

  const [color,setColor] = useState('green');

  function handleClick() {
    setColor((prev) => {
      if (prev === 'green') setColor('red');
      else setColor('green');
    });
  }

  return (
    <Card className="h-100" style={{background: color, color:'white'}} onClick={handleClick}>
      <Card.Body>
        <Card.Title>Card {number}</Card.Title>
        <Card.Text>
          This is card number {number}. You can put any content you like here.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
