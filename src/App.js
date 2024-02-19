import './App.css';
import AddTransaction from './Component/AddTransaction';
import Balance from './Component/Balance';
import Header from './Component/Header';
import IncomeExpenses from './Component/IncomeExpenses';
import TransactionList from './Component/TransactionList';
import GlobalState from './Context/GlobalState';

function App() {
  return (
    <GlobalState>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalState>
  );
}

export default App;
