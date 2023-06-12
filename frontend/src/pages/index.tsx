import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Text } from '@/components/typography/text.components';
import { Heading } from '@/components/typography/heading.component';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showFilter, setAside] = useState("hidden")

  function showAside (){
    showFilter != "hidden" ? setAside("hidden") : setAside("block")
  }

  return (
    <>
    <header className='flex justify-between bg-grey-grey_1'>
      <div>
        <h1 className='text-transparent'>Motors <span>shops</span></h1>
      </div>

      <button>show navigation</button>
    </header>
    <div className="bg-[url('https://quatrorodas.abril.com.br/wp-content/uploads/2020/12/chevrolet-2021-onix-premier-8389-e1607978189472.jpg?quality=70&strip=info')]
                    h-[500px]
                    bg-center
                    bg-cover
                    mb-[60px]
                    flex
                    flex-col
                    justify-center
                    text-center
        ">
          <Heading type='h1' weight={700} extra_classes='text-colors_color_white_fixed'>Motors Shop</Heading>
          <Heading type='h2' weight={600} extra_classes='text-colors_color_white_fixed'>A melhor plataforma de anúncios de carros do país</Heading>
    </div>

    <div className='lg:max-w-[1600px] lg:mx-auto'>
      <main className='flex lg:justify-between lg:px-7'>
        <aside className={`w-[95%] fixed h-screen bottom-0 bg-colors_color_white_fixed z-1 ${showFilter}
          lg:block
          lg:w-fit
          lg:static
          lg:flex
          lg:flex-col
          lg:gap-[39px]
        `}
        >
          <header className='flex justify-between lg:hidden'>
            <p>filter</p>
            <button onClick={showAside}>X</button>
          </header>
          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Marca</Heading>
              <ul>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>General Motors</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Fiat</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ford</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Honda</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Toyota</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Volswagen</Heading>
              </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Modelo</Heading>
            <ul>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Civic</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Corolla</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Cruze</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Fit</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Gol</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ka</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Onix</Heading>
              <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Pulse</Heading>
            </ul>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Cor</Heading>
              <ul>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Azul</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Branca</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Cinza</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Prata</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Preta</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Verde</Heading>
              </ul>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Ano</Heading>
              <ul>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ano 1</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ano 2</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ano 3</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ano 4</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Ano 5</Heading>
              </ul>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Combustivel</Heading>
              <ul>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Flex</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Hibrido</Heading>
                <Heading type='h6' weight={500} extra_classes='pl-[10px] text-grey-grey_3'>Eletrico</Heading>
              </ul>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Km</Heading>
            <section className='flex justify-between gap-8'>
              <input type="number" placeholder='Mínimo' className='w-full'/>
              <input type="number" placeholder='Máximo' className='w-full'/>
            </section>
          </div>

          <div className="flex flex-col gap-[20px]">
            <Heading type='h4' weight={600}>Preco</Heading>
            <section className='flex justify-between gap-8'>
              <input type="number" placeholder='Mínimo'className='w-full'/>
              <input type="number" placeholder='Máximo'className='w-full'/>
            </section>
          </div>

          <button>Filtrar</button>
        </aside>

        <section className='flex overflow-hidden h-fit'>
          <ul className='flex gap-3 overflow-x-scroll lg:flex-wrap lg:overflow-x-hidden lg:gap-10'>
            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <Heading type='h7' weight={600}>Car title</Heading>
              <Text type='b2' weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</Text>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <Heading type='h7' weight={500}>R$ 00.000,00</Heading>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <Heading type='h7' weight={600}>Car title</Heading>
              <Text type='b2' weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</Text>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <Heading type='h7' weight={500}>R$ 00.000,00</Heading>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <Heading type='h7' weight={600}>Car title</Heading>
              <Text type='b2' weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</Text>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <Heading type='h7' weight={500}>R$ 00.000,00</Heading>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <Heading type='h7' weight={600}>Car title</Heading>
              <Text type='b2' weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</Text>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <Heading type='h7' weight={500}>R$ 00.000,00</Heading>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <Heading type='h7' weight={600}>Car title</Heading>
              <Text type='b2' weight={400}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</Text>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <Heading type='h7' weight={500}>R$ 00.000,00</Heading>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
    
    <div className='flex justify-center items-center lg:hidden'>
      <button onClick={showAside} className=''>Show Filter</button>
    </div>
    </>
  )
}
