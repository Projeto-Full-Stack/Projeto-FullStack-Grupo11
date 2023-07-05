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
import { useForm } from "react-hook-form";
import Next from "@/components/next";
import { Text } from "@/components/typography/text.component";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [showFilter, setAside] = useState("hidden");
  function showAside() {
    showFilter != "hidden" ? setAside("hidden") : setAside("block");
  }

  const {
    getAllAnnouncements,
    allAnnouncementData,
    totalAnn,
    pageData,
    filterFunction,
    changePage,
  } = AnnouncementContext();
  const { cars } = CarContext();

  useEffect(() => {
    getAllAnnouncements();
  }, []);

  const { register, handleSubmit, reset } = useForm({});

  const setFilterValues = () => {
    const filterValues = ["brand", "model", "color", "year", "fuel"];
    filterValues.map((value) => {
      reset();
    });
  };

  const createDivisorArr = (number: number) => {
    let divisorArr = [];
    for (let i = 0; i < number; i++) {
      divisorArr.push(`${i + 1}`);
    }
    return divisorArr;
  };
  const auxArr = createDivisorArr(totalAnn);

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
            className={`max-w-[95%] max-h-full fixed top-0 bg-colors_color_white_fixed z-10 p-[30px] flex flex-col gap-[42px] overflow-y-scroll ${showFilter}
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
            <form onInput={handleSubmit(filterFunction)}>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Marca
                </Heading>
                <div>
                  {Object.keys(cars).map((car) => {
                    return (
                      <div key={`${car}`} className={`flex flex-col`}>
                        <input
                          id={`${car}`}
                          className={`flex flex-col appearance-none`}
                          value={`${car}`}
                          type={`radio`}
                          {...register("brand")}
                        />
                        <label htmlFor={`${car}`}>
                          <Heading
                            type="h6"
                            weight={500}
                            extra_classes="pl-[10px] text-grey-3"
                          >
                            {`${car}`}
                          </Heading>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Modelo
                </Heading>
                <ul className={`flex flex-col max-h-[300px] overflow-y-scroll`}>
                  {carArr.map((car) => {
                    return (
                      <div key={`${car}`} className={`flex flex-col`}>
                        <input
                          id={`${car}`}
                          className={`flex flex-col appearance-none pointer`}
                          value={`${car}`}
                          type={`radio`}
                          {...register("model")}
                        />
                        <label htmlFor={`${car}`}>
                          <Heading
                            type="h6"
                            weight={500}
                            extra_classes="pl-[10px] text-grey-3"
                          >
                            {`${car}`}
                          </Heading>
                        </label>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Cor
                </Heading>
                <ul>
                  {carColors.map((color) => {
                    return (
                      <div key={`${color}`} className={`flex flex-col`}>
                        <input
                          id={`${color}`}
                          className={`flex flex-col appearance-none`}
                          value={`${color}`}
                          type={`radio`}
                          {...register("color")}
                        />
                        <label htmlFor={`${color}`}>
                          <Heading
                            type="h6"
                            weight={500}
                            extra_classes="pl-[10px] text-grey-3"
                          >
                            {`${color}`}
                          </Heading>
                        </label>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Ano
                </Heading>
                <ul>
                  {carYears.map((year) => {
                    return (
                      <div key={`${year}`} className={`flex flex-col`}>
                        <input
                          id={`${year}`}
                          className={`flex flex-col appearance-none`}
                          value={`${year}`}
                          type={`radio`}
                          {...register("year")}
                        />
                        <label htmlFor={`${year}`}>
                          <Heading
                            type="h6"
                            weight={500}
                            extra_classes="pl-[10px] text-grey-3"
                          >
                            {`${year}`}
                          </Heading>
                        </label>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Combustivel
                </Heading>
                <ul>
                  {carFuelType.map((fuel) => {
                    return (
                      <div key={`${fuel}`} className={`flex flex-col`}>
                        <input
                          id={`${fuel}`}
                          className={`flex flex-col appearance-none`}
                          value={`${fuel}`}
                          type={`radio`}
                          {...register("fuel")}
                        />
                        <label htmlFor={`${fuel}`}>
                          <Heading
                            type="h6"
                            weight={500}
                            extra_classes="pl-[10px] text-grey-3"
                          >
                            {`${fuel}`}
                          </Heading>
                        </label>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Km
                </Heading>
                <section
                  className="flex justify-between gap-8"
                  onChange={handleSubmit(filterFunction)}
                >
                  <input
                    type="number"
                    placeholder="Mínima"
                    className="w-full bg-grey-5 rounded p-2"
                    {...register("minMileage")}
                  />
                  <input
                    type="number"
                    placeholder="Máxima"
                    className="w-full bg-grey-5 rounded p-2"
                    {...register("maxMileage")}
                  />
                </section>
              </div>
              <div className="flex flex-col gap-[20px] mb-4">
                <Heading type="h4" weight={600}>
                  Preco
                </Heading>
                <section
                  className="flex justify-between gap-8"
                  onChange={handleSubmit(filterFunction)}
                >
                  <input
                    type="number"
                    placeholder="Mínimo"
                    className="w-full bg-grey-5 rounded p-2"
                    {...register("minPrice")}
                  />
                  <input
                    type="number"
                    placeholder="Máximo"
                    className="w-full bg-grey-5 rounded p-2"
                    {...register("maxPrice")}
                  />
                </section>
              </div>
            </form>
            <div className="flex flex-col gap-[20px] mb-4">
              <button
                onClick={(e) => {
                  setFilterValues();
                  filterFunction(e);
                }}
                className={`w-full bg-brand-1 text-colors_color_white_fixed py-3 px-2 rounded mt-6`}
              >
                Limpar filtros
              </button>
            </div>

            <div className="lg:hidden flex justify-center">
              <Button type="bg-brand" click_event={showAside}>
                Ver anúncios
              </Button>
            </div>
          </aside>
          <section className="flex overflow-hidden h-fit pl-2 lg:pl-0 w-full">
            <ul className="flex gap-6 overflow-x-scroll lg:flex-wrap lg:overflow-x-hidden lg:gap-10">
              {allAnnouncementData.length ? (
                allAnnouncementData.map((ann) => {
                  return <Card car={ann} key={ann.id} />;
                })
              ) : (
                <Text type="b1" weight={600}>
                  Ainda não existe nenhum anúncio
                </Text>
              )}
            </ul>
          </section>
        </main>
        <section
          className={`flex justify-center align-center text-decoration-line: underline gap-2`}
        >
          {allAnnouncementData.length > 0 && <Next data={pageData} />}
        </section>
      </div>
      <div className="flex justify-center items-center lg:hidden mt-[30px]">
        <Button click_event={showAside} type="bg-brand">
          Filtros
        </Button>
      </div>
      <Footer />
    </div>
  );
}
