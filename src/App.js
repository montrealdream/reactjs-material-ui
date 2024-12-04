import './App.css';
import { FormRegister } from './components/Form/FormRegister';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';

function App() {
  return (
    <>
      <Header />
      <FormRegister />
      <ProductList />
    </>
  );
}

export default App;
