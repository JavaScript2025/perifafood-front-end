import ListaProdutos from "../../components/produto/listaprodutos/ListaProdutos";

function Home() {
  return (
    <>
      <div className="bg-[#FFFFFF] flex justify-center">
        <div
          className="
            rounded-xl container 
            grid grid-cols-1 md:grid-cols-2 
            bg-[#F2F2F2] 
            items-center
          "
        >
          {/* Texto */}
          <div className="flex flex-col gap-5 items-center justify-center text-center md:text-left px-6 py-10">
            <h2 className="text-6xl md:text-8xl font-bold text-black">Olá,</h2>
            <h2 className="text-[#F27E63] text-5xl md:text-7xl font-bold">
              estamos abertos
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              O melhor serviço de delivery do país
            </p>
          </div>

          {/* Imagem */}
          <div className="flex justify-center md:block hidden md:flex">
            <img
              src="https://ik.imagekit.io/5u147mkwr/1IohXOz%20-%20Imgur.png?updatedAt=1762817270208"
              alt="Imagem Página Home"
              className="w-3/4 max-w-md"
            />
          </div>
        </div>
      </div>

      <ListaProdutos showCreateButton={false} showTitle={false} />
    </>
  );
}

export default Home;
