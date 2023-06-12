import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { Text } from '@/components/typography/text.component';
import { Heading } from '@/components/typography/heading.component';

const inter = Inter({ subsets: ['latin'] });

export default function Announcements() {
  const router = useRouter();
  return (
    <main className={`body`}>
      <header className=" bg-colors_color_white_fixed flex justify-between p-3 mb-8 items-center ">
        <div>
          <h1 className="bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
            Motors <span>shops</span>
          </h1>
        </div>
        <div className={`flex items-center gap-3`}>
          <img
            className={`w-10 h-10 `}
            src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
            alt=""
          />
          <Heading type="h8" weight={500} extra_classes="text-grey_0">
            Marco Antônio
          </Heading>
        </div>
      </header>

      <div className="flex justify-center">
        <section
          className={` min-h-screen flex flex-col items-center p-3 gap-9`}
        >
          <article className={`flex flex-col gap-4`}>
            <div className={` announcement-box `}>
              <img
                src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                alt="Cobalt"
              />
            </div>
            <div
              className={` announcement-box flex flex-col items-start gap-2 `}
            >
              <Heading type="h6" weight={600} extra_classes="text-grey_0">
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
              </Heading>
              <div className={` flex flex-col gap-4 `}>
                <div className={` flex gap-4 `}>
                  <p>2013</p>
                  <p>0 KM</p>
                </div>
                <h3>R$ 00.000,00</h3>
              </div>
              <button>Comprar</button>
            </div>
          </article>

          <article className={`flex flex-col gap-4 `}>
            <div
              className={` announcement-box flex flex-col gap-4 items-start`}
            >
              <Heading type="h6" weight={600} extra_classes="text-grey_0">
                Descrição
              </Heading>
              <Text type="b1" weight={400}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Text>
            </div>

            <ul className={` announcement-box flex flex-col gap-8 items-start`}>
              <Heading type="h6" weight={600} extra_classes="text-grey_0">
                Comentários
              </Heading>
              <li className={`flex flex-col gap-3`}>
                <div className={`flex items-center gap-2`}>
                  <img
                    className={`w-10 h-10 `}
                    src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
                    alt=""
                  />
                  <Heading
                    type="h8"
                    weight={500}
                    extra_classes="text-grey_0 pr-2"
                  >
                    Júlia Lima
                  </Heading>
                  <Heading
                    type="h8"
                    weight={400}
                    extra_classes="text-grey-grey_3"
                  >
                    há 3 dias
                  </Heading>
                </div>
                <Text type="b1" weight={400}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the s standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </Text>
              </li>

              <li className={`flex flex-col gap-3`}>
                <div className={`flex items-center gap-3`}>
                  <img
                    className={`w-10 h-10 `}
                    src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
                    alt=""
                  />
                  <Heading type="h8" weight={500} extra_classes="text-grey_0">
                    Marco Antônio
                  </Heading>
                  <Heading
                    type="h8"
                    weight={400}
                    extra_classes="text-grey-grey_3"
                  >
                    há 7 dias
                  </Heading>
                </div>
                <Text type="b1" weight={400}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the s standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </Text>
              </li>

              <li className={`flex flex-col gap-3`}>
                <div className={`flex items-center gap-3`}>
                  <img
                    className={`w-10 h-10 `}
                    src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
                    alt=""
                  />
                  <Heading type="h8" weight={500} extra_classes="text-grey_0">
                    Camila Silva
                  </Heading>
                  <Heading
                    type="h8"
                    weight={400}
                    extra_classes="text-grey-grey_3"
                  >
                    há 1 mês
                  </Heading>
                </div>
                <Text type="b1" weight={400}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the s standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </Text>
              </li>
            </ul>

            <div
              className={` announcement-box flex flex-col gap-4 items-start`}
            >
              <div className={`flex flex-col w-full items-start gap-3`}>
                <div className={`flex items-center gap-3`}>
                  <img
                    className={`w-10 h-10 `}
                    src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
                    alt=""
                  />
                  <Heading type="h8" weight={500} extra_classes="text-grey_0">
                    Marco Antônio
                  </Heading>
                </div>
                <div
                  className={`flex flex-col items-end border-solid border-2 border-grey-grey_7 w-full rounded`}
                >
                  <input
                    className={`p-8 w-full border-none`}
                    type="text"
                    placeholder="Digite aqui seu comentário..."
                    name=""
                    id=""
                  />
                  <button className={`p-8`}>Comentar</button>
                </div>
              </div>
              <div className={`flex w-full items-start gap-3`}>
                <Heading type="h8" weight={500} extra_classes="text-grey_0 bg">
                  Gostei muito!
                </Heading>
                <Heading type="h8" weight={500} extra_classes="text-grey_0">
                  Incrível
                </Heading>
                <Heading type="h8" weight={500} extra_classes="text-grey_0">
                  Recomendarei para meus amigos!
                </Heading>
              </div>
            </div>
          </article>
        </section>

        <aside className={` flex flex-col items-center p-3 gap-9`}>
          <article>
            <ul
              className={` announcement-box flex flex-col gap-8 items-start w-full `}
            >
              <Heading type="h6" weight={600} extra_classes="text-grey_0">
                Fotos
              </Heading>
              <div className={` flex flex-wrap gap-8 w-20`}>
                <li className={``}>
                  <img
                    src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </li>
              </div>
            </ul>
          </article>

          <article
            className={` announcement-box flex flex-col gap-8 items-start w-full`}
          >
            <div className={`flex flex-col items-center gap-3`}>
              <img
                className={`w-10 h-10 `}
                src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
                alt=""
              />
              <Heading type="h8" weight={500} extra_classes="text-grey_0">
                Marco Antônio
              </Heading>
              <Text type="b1" weight={400}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the s standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Text>
              <button>Ver todos os anuncios</button>
            </div>
          </article>
        </aside>
      </div>
    </main>
  );
}
