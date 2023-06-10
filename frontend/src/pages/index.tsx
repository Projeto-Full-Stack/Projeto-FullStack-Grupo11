import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showFilter, setAside] = useState("hidden")

  function showAside (){
    showFilter != "hidden" ? setAside("hidden") : setAside("block")
  }


  return (
    <>
    <header className='flex justify-between'>
      <div>
        <h1 className='bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent'>Motors <span>shops</span></h1>
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
          <h1>
            Title
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, laboriosam?</p>
    </div>

    <div className='lg:max-w-[1600px] lg:mx-auto'>
      <main className='flex lg:justify-between lg:px-7'>
        <aside className={`w-[95%] fixed h-screen bottom-0 bg-white z-1 ${showFilter}
          lg:block
          lg:w-fit
          lg:static
        `}
        >
          <header className='flex justify-between lg:hidden'>
            <p>filter</p>
            <button onClick={showAside}>X</button>
          </header>
          <div>
            <h3>Marca</h3>
              <ul>
                <li>General Motors</li>
                <li>Fiat</li>
                <li>Ford</li>
                <li>Honda</li>
                <li>Toyota</li>
                <li>Volswagen</li>
              </ul>
          </div>
          <div>
            <h3>Modelo</h3>
            <ul>
              <li>Civic</li>
              <li>Corolla</li>
              <li>Cruze</li>
              <li>Fit</li>
              <li>Gol</li>
              <li>Ka</li>
              <li>Onix</li>
              <li>Pulse</li>
            </ul>
          </div>

          <div>
            <h3>Cor</h3>
              <ul>
                <li>Azul</li>
                <li>Branca</li>
                <li>Cinza</li>
                <li>Prata</li>
                <li>Preta</li>
                <li>Verde</li>
              </ul>
          </div>

          <div>
            <h3>Ano</h3>
              <ul>
                <li>Ano 1</li>
                <li>Ano 2</li>
                <li>Ano 3</li>
                <li>Ano 4</li>
                <li>Ano 5</li>
              </ul>
          </div>

          <div>
            <h3>Combustivel</h3>
              <ul>
                <li>Flex</li>
                <li>Hibrido</li>
                <li>Eletrico</li>
              </ul>
          </div>

          <div>
            <h3>Km</h3>
            <section className='flex justify-between gap-8'>
              <input type="number" placeholder='Mínimo' className='w-full'/>
              <input type="number" placeholder='Máximo' className='w-full'/>
            </section>
          </div>

          <div>
            <h3>Preco</h3>
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
              <h2>Car title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</p>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <p>R$ 00.000,00</p>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <h2>Car title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</p>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <p>R$ 00.000,00</p>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <h2>Car title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</p>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <p>R$ 00.000,00</p>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <h2>Car title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</p>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <p>R$ 00.000,00</p>
              </div>
            </li>

            <li className='flex flex-col min-w-[312px] max-w-[312px] gap-4 h-fit'>
              <img src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg" alt="car-photo" 
              className='w-fit'
              />
              <h2>Car title</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloribus molestiae commodi consequuntur sint deleniti vitae neque corrupti ipsa ab?</p>

              <div className='flex items-center gap-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" className='w-8 h-8 rounded-full'/>
                <h3>username</h3>
              </div>

              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <span className='px-2 py-1'>KM - 0</span>
                  <span className='px-2 py-1'>Year</span>
                </div>
                <p>R$ 00.000,00</p>
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
