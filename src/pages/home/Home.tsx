import ListaProdutos from "../../components/produto/listaprodutos/ListaProdutos";

function Home() {
  return (
    <>
      <div className="bg-[#FEF0E1] flex justify-center">
        <div className="container grid grid-cols-2">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-8xl font-bold text-black">Olá,</h2>
            <h2 className="text-[#D9291A] text-8xl font-bold">
              estamos abertos
            </h2>
            <p className="text-xl">O melhor serviço de entrega do país</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/5u147mkwr/1IohXOz%20-%20Imgur.png?updatedAt=1762817270208"
              alt="Imagem Página Home"
              className="w-3/3"
            />
          </div>
        </div>
      </div>
      <ListaProdutos showCreateButton={false} showTitle={false} />
    </>
  );
}

export default Home;
