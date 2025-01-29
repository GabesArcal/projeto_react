import Menu from './components/Menu';
import Produto from './components/Produto';

export default function Home() {
  return (
    <main>

      <Menu/>

      <h1>Enviando para o Github</h1>
      <p>Ativiade em andamento...</p>
      <p>Teste nova versão</p>

      <h2>Produtix</h2>

      <div className='flex justify-around'>

          <Produto nome="Capuccino com canela" estrela="⭐⭐⭐⭐⭐" preco="29,99" botao="Encomendar"/> {/* Estamos passando uma variavel nesse componente */}
          <Produto nome="Pingado" estrela="⭐⭐⭐⭐" preco="30,50" botao="Comprar"/>
          <Produto nome="Café coado" estrela="⭐⭐⭐" preco="18,50" botao="Encomendar"/> {/* Tudo que for colocado aqui dentro ele guardará dentro de "attr" que é o nome da váriavel*/}
          <Produto nome="Café preto" estrela="⭐⭐⭐" preco="13,50" botao="Comprar"/>

      </div>

    </main>
  );
}
