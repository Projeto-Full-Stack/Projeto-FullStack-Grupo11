import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Heading } from "@/components/typography/heading.component";
import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import Button from "@/components/button";
import Card from "@/components/card";
import { AnnouncementContext } from "@/context/announcement.context";
import { CarContext } from "@/context/cars.context";
import { carArr, carColors, carYears, carFuelType } from "@/data/filter.data";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [showFilter, setAside] = useState("hidden");
  function showAside() {
    showFilter != "hidden" ? setAside("hidden") : setAside("block");
  }

  const {
    getAllAnnouncements,
    allAnnouncementData,
    setAllAnnouncementData,
    filterFunction,
  } = AnnouncementContext();
  const { cars } = CarContext();

  useEffect(() => {
    getAllAnnouncements();
  }, [setAllAnnouncementData]);

  return (
    <div className="flex flex-col">
      <NavBar />
      <div
        className="bg-[url('https://quatrorodas.abril.com.br/wp-content/uploads/2020/12/chevrolet-2021-onix-premier-8389-e1607978189472.jpg?quality=70&strip=info')]
                    h-[500px]
                    bg-center
                    bg-cover
                    mb-[60px]
                    flex
                    flex-col
                    justify-center
                    text-center
        "
      >
        <Heading
          type="h1"
          weight={700}
          extra_classes="text-colors_color_white_fixed"
        >
          Motors Shop
        </Heading>
        <Heading
          type="h2"
          weight={600}
          extra_classes="text-colors_color_white_fixed"
        >
          A melhor plataforma de anúncios de carros do país
        </Heading>
      </div>
      <div className="w-full">
        <main className="flex lg:justify-between lg:px-7">
          <aside
            className={`max-w-[95%] fixed bottom-0 bg-colors_color_white_fixed z-1 p-[30px] flex flex-col gap-[42px] overflow-y-scroll ${showFilter}
          lg:block
          lg:w-fit
          lg:static
          lg:flex
          lg:flex-col
          lg:gap-[39px]
          lg:overflow-visible
        `}
          >
            <header className="flex justify-between lg:hidden">
              <Heading type="h7" weight={500}>
                Filtro
              </Heading>
              <button
                className="text-[12px]text-grey-grey_4"
                onClick={showAside}
              >
                X
              </button>
            </header>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Marca
              </Heading>
              <ul>
                {Object.keys(cars).map((car) => {
                  return (
                    <button
                      key={`${car}`}
                      className={`flex flex-col`}
                      onClick={() => filterFunction(car, "brand")}
                    >
                      <Heading
                        type="h6"
                        weight={500}
                        extra_classes="pl-[10px] text-grey-3"
                      >
                        {`${car}`}
                      </Heading>
                    </button>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Modelo
              </Heading>
              <ul className={`flex flex-col max-h-[300px] overflow-y-scroll`}>
                {carArr.map((car) => {
                  return (
                    <button
                      onClick={() => filterFunction(car, "model")}
                      className={`flex flex-col`}
                      key={`${car}`}
                    >
                      <Heading
                        type="h6"
                        weight={500}
                        extra_classes="pl-[10px] text-grey-3"
                      >
                        {`${car}`}
                      </Heading>
                    </button>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Cor
              </Heading>
              <ul>
                {carColors.map((color) => {
                  return (
                    <button
                      onClick={() => filterFunction(color, "color")}
                      className={`flex flex-col`}
                      key={`${color}`}
                    >
                      <Heading
                        type="h6"
                        weight={500}
                        extra_classes="pl-[10px] text-grey-3"
                      >
                        {`${color}`}
                      </Heading>
                    </button>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Ano
              </Heading>
              <ul>
                {carYears.map((year) => {
                  return (
                    <button
                      onClick={() => filterFunction(year, "year")}
                      className={`flex flex-col`}
                      key={`${year}`}
                    >
                      <Heading
                        type="h6"
                        weight={500}
                        extra_classes="pl-[10px] text-grey-3"
                      >
                        {`${year}`}
                      </Heading>
                    </button>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Combustivel
              </Heading>
              <ul>
                {carFuelType.map((fuel) => {
                  return (
                    <button
                      onClick={() => filterFunction(fuel, "fuel")}
                      className={`flex flex-col`}
                      key={`${fuel}`}
                    >
                      <Heading
                        type="h6"
                        weight={500}
                        extra_classes="pl-[10px] text-grey-3"
                      >
                        {`${fuel}`}
                      </Heading>
                    </button>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Km
              </Heading>
              <section className="flex justify-between gap-8">
                <input
                  type="number"
                  placeholder="Mínima"
                  className="w-full bg-grey-5 rounded p-2"
                />
                <input
                  type="number"
                  placeholder="Máxima"
                  className="w-full bg-grey-5 rounded p-2"
                />
              </section>
            </div>
            <div className="flex flex-col gap-[20px]">
              <Heading type="h4" weight={600}>
                Preco
              </Heading>
              <section className="flex justify-between gap-8">
                <input
                  type="number"
                  placeholder="Mínimo"
                  className="w-full bg-grey-5 rounded p-2"
                />
                <input
                  type="number"
                  placeholder="Máximo"
                  className="w-full bg-grey-5 rounded p-2"
                />
              </section>
            </div>
            <div className="lg:hidden flex justify-center">
              <Button type="bg-brand">Ver anúncios</Button>
            </div>
          </aside>
          <section className="flex overflow-hidden h-fit w-fit pl-2 lg:pl-0">
            <ul className="flex gap-3 overflow-x-scroll lg:flex-wrap lg:overflow-x-hidden lg:gap-10"></ul>
          </section>
          <div
            className={`flex flex-wrap justify-start gap-10 p-4 w-[90%] h-max`}
          >
            {allAnnouncementData.map((ann) => {
              return <Card car={ann} key={ann.id} />;
            })}
          </div>
        </main>
      </div>
      <div className="flex justify-center items-center lg:hidden mt-[30px]">
        <Button click_event={showAside} type="bg-brand">
          Show Filter
        </Button>
      </div>
      <Footer />
    </div>
  );
}
