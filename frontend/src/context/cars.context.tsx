import carsApi from "@/services/cars.api.service";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface ICarProvider {
  cars: {};
  carsByBrand: {};
  setCars: React.Dispatch<React.SetStateAction<{}>>;
  setCarsByBrand: React.Dispatch<React.SetStateAction<{}>>;
  getCarsByBrand: (brand: string) => void;
}

const carContext = createContext<ICarProvider>({} as ICarProvider);

export const CarProvider = ({ children }: Props) => {
  const [cars, setCars] = useState<{}>({});
  const [carsByBrand, setCarsByBrand] = useState<{}>({});

  useEffect(() => {
    const getCarBrand = async () => {
      try {
        const getBrand = await carsApi.get("/Cars");

        setCars(getBrand.data)
      } catch (error) {
        console.error(error);
      }
    };
    getCarBrand();
  }, []);

  const getCarsByBrand = async (brand: string) => {
    const getCars = await carsApi.get(`/Cars?brand=${brand}`);
    setCarsByBrand(getCars.data);
  };

  return (
    <carContext.Provider
      value={{ cars, carsByBrand, setCarsByBrand, setCars, getCarsByBrand }}
    >
      {children}
    </carContext.Provider>
  );
};

export const CarContext = () => useContext(carContext);
