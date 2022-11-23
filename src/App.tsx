import Amount from "./Amount";
import Counter from "./Counter";
import Load from "./Loading";
import Toggle from "./Toggle";

const Euro = ({amount}:{amount: number}) => <p>Euro: {amount * 0.86}</p>
const Pound = ({amount}:{amount: number}) => <p>Pound: {amount * 0.76}</p>

function App() {

  return (
    <>
      <Toggle>
        {(greeting, toggle, on) => <div>{on && greeting}<button onClick={toggle}>{on ? 'OFF' : 'ON'}</button></div>}
      </Toggle>
      <Counter header={(num: number) => num}>
        {(number) => number}
      </Counter>
      <Amount>
        {amount => (
          <div>
            <Euro amount={amount} />
            <Pound amount={amount} />
          </div>
        )}
      </Amount>
      <Load>
        {({loading, error, data}) => {
          if (loading) return <span>Loading...</span>
          if (error) return <span>Error...</span>

          return <div>{data}</div>
        }}
      </Load>
    </>
  );
}

export default App;
