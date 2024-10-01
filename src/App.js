import './App.css';
import LogoHead from './components/A_Mainlogo/Logohead';
import Subnav from './components/B Subnav/Subnav';
import Bodyitems from './components/C body/Bodyitems';
import Packeditems from './components/D Packeditem/Packeditem';
import { useState } from 'react';

function App() {
  const [ itemList , setItemList] = useState([])
  return (
    <div>
      <LogoHead/>
      {/* <Subnav  setitemList={setItemList} /> */}
      <Bodyitems itemList={itemList} setItemList={setItemList} />
      <Packeditems itemList={itemList} />
    </div>
  );
}

export default App;
