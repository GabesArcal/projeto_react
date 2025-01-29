import "./Menu.css"

export default function Menu(){
    return (
      <main>
        {/* No react trocamos o 'class="menu"' por className="menu" */}
        <div className="menu"> 
            
            <h1 className="">Enviando para o Github</h1>

            <a href="#">Início</a>
            <a href="#">Produtos</a>
            <a href="#">Contato</a>
        </div>
  
      </main>
    );
}