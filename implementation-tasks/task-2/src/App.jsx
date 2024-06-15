import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/Card';

function App() {
  const cards = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="container mt-5">
      <h1 className='text-center'>CARDS LAYOUT</h1>
      <div className="row">
        {cards.map((cardNumber) => (
          <div key={cardNumber} className="col-md-4 mb-4">
            <CardComponent number={cardNumber} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
