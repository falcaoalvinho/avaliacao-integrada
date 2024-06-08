import { ContentTable } from "./components/ContentTable";
import TableHeader from "./components/TableHeader";
import Title from "./components/Title.js"
import SubTitle from "./components/SubTitle.js"

function App() {
  return (
    <div>
      <Title>avaliacao-integrada</Title>
      <SubTitle>CRUD para uma garagem de motos</SubTitle>

      <ContentTable
        Children={(  
          <TableHeader/>
        )}
      />
        {/* <tbody>

        </tbody> */}
    </div>
  );
}

export default App;


// Objeto Moto = {modelo, marca, ano}

// /* Margem para Títilo do projeto (tag 'h1") */
// h1 {
//   margin: 0px 0px 30px 0px ;
// }

// /* Definição do estilo da borda para a tabela */
// table, th, td {
//   border-style: solid;
//   border-width: 1px;
//   border-color: var(--CinzaClaro2);
//   border-collapse:collapse;
// }

// /* Sombra de caixa para Tabela e Botões do Projeto*/
// table, button{
//   box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 30px;
// }

// /* Estilização das fontes dentro do cabeçalho e corpo da tabela (tags 'th' e 'td') */
// th, td {
//   padding: 15px;

//   font-weight: 500;
//   font-size: 20px;
//   color: var(--Branco);
// }

// /* Mudança de cor para blocos do cabeçalho */
// th {
//   background-color: var(--Preto);
// }
