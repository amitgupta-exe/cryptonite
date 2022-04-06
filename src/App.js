import "./styles/styles.css";
import { data } from './data';
import Card from './components/Card';

function App() {

  return (
    <main>
      <section className='header'>
        <h1 className="logo">CRYPTONITE</h1>
      </section>
      <section className="grid-container">{
        data.map((item) => {
          return <Card props={item} />
        })
      }
      </section>
    </main>
  );
}
export default App;
