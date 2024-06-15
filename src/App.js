import { useEffect, useState } from "react";

import { ContentTable } from "./components/ContentTable";
import TableHeader from "./components/TableHeader";
import Title from "./components/Title.js"
import SubTitle from "./components/SubTitle.js"
import { TableRow } from "./components/TableRow.js";

function App() {
  const[Motos, setMotos] = useState([])
  
  const URL = 'http://localhost:8080/moto';
  
  function GetMotos(){
    fetch(URL, {method: 'GET'})
    .then((response) => response.json())
    .then(json => {
      setMotos(json)
    })
  }

  function UpdateMoto(ID, Modelo, Marca, Ano) {
    setMotos(prevMotos => {
      prevMotos.map(Moto => {
        Moto.id === ID ? {'modelo': Modelo, 'marca': Marca, 'ano': Ano} : Moto
        }
      console.log(Moto)
      )}
    )
  }

  function DeleteMoto(ID) {
    setMotos(prevMotos => {
      prevMotos.map(Moto => {
      console.log(ID)
      Moto.id !== ID
      }
    )}
    )
  }

  // const addMoto = () => {
    
  // }

return (
  <div>
      <Title>avaliacao-integrada</Title>
      <SubTitle>CRUD para uma garagem de motos</SubTitle>

      <ContentTable
        Header={(<TableHeader/>)}
      Body={(
        <tbody>
            {Motos.map((Moto, Index) => 
              (<TableRow 
                key={Index}
                ID={Moto.id}
                Marca={Moto.marca}
                Modelo={Moto.modelo}
                Ano={Moto.ano}
                Update={UpdateMoto(Index, Moto.Modelo, Moto.Marca, Moto.ano)}
                Delete={DeleteMoto(Index)}
              />)
            )}
          </tbody>
        )}
      />
      <div style={{display: 'flex',flexDirection: 'row', gap: 30}}>
        <button onClick={GetMotos}>Gerar Tabela</button>
        <button >Novo Registro</button>
      </div>
    </div>
  )
}

export default App;
