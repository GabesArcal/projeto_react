export default Produto;

function Produto( attr ) { //attribute
    return ( // Tudo dentro do return é HTML
        <main>
            <div className="border-solid border w-1/1 bg-zinc-50 p-5">

                <div className="text-center">
                    <img src="https://placehold.co/200"/>
                </div>

                <h2 className="text-lime-800"> {attr.nome} </h2> {/* Tudo que é escrito dentro do {} é javascript */}
                <p>{attr.estrela}</p>
                {/* Sempre que for fazer um modelo coloque o número maior "999,99", para que não dê erros futuramente */}
                <p>R$ {attr.preco}</p> {/* É preciso espeficar dentro de attr oque você alterar ex. {attr.preco} */}
                <button className="bg-blue-600 p-2 border-none text-white">{attr.botao}</button>
            </div>
        </main>
     );
}
