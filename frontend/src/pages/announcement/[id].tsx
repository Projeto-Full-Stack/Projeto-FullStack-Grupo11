import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Text } from "@/components/typography/text.component";
import { Heading } from "@/components/typography/heading.component";
import NavBar from "@/components/navbar";
import Button from "@/components/button";
import Profile from "@/components/profile";
import { AnnouncementContext } from "@/context/announcement.context";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Announcements() {
  const router = useRouter();
  const { announcementData, getAnnouncement } = AnnouncementContext()

  useEffect(() => {
    if (router.query.id){
      getAnnouncement(router.query.id)
    }
  }, [router.query])

  return (
    <>
      <div className="z-[-1] h-screen absolute">
        <div className="bg-brand-1 h-[516px] w-screen absolute"></div>
        <div className="bg-colors_color_white_fixed h-screen"></div>
      </div>
      <NavBar />
      <main className="lg:grid lg:grid-cols-2 mx-[7%] lg:mt-[10px]">
        <section className={`flex flex-col items-center p-3 gap-9 lg:py-[0px]`}>
          <article className={`flex flex-col gap-4 lg:w-full`}>
            <div className="h-[355px] bg-colors_color_white_fixed flex justify-center rounded">
              <img
                className="object-scale-down"
                src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                alt="Cobalt"
              />
            </div>
            <div
              className={`flex flex-col pl-7 py-7 pr-5 bg-colors_color_white_fixed rounded gap-6 lg:w-full`}
            >
              <Heading type="h6" weight={600} extra_classes="text-grey_0 pt-4">
                {announcementData!.model}
              </Heading>
              <div className={`flex flex-col gap-4`}>
                <div className={`flex gap-3`}>
                  <Button type="specifications" extra_classes="mr-4">
                    {`${announcementData!.mileage} KM`}
                  </Button>
                  <Button type="specifications" extra_classes="mr-4">
                    {`${announcementData!.year}`}
                  </Button>
                </div>
                <Heading type="h7" weight={500}>
                 {`R$ ${Number(announcementData?.price).toFixed(2)}`}
                </Heading>
              </div>
              <button className="w-fit">Comprar</button>
            </div>
          </article>
          <article
            className={`flex flex-col gap-4 bg-colors_color_white_fixed rounded`}
          >
            <div
              className={`align-middle p-11 items-center rounded flex flex-col gap-4 items-start`}
            >
              <Heading type="h6" weight={600} extra_classes="text-grey_0">
                Descrição
              </Heading>
              <Text type="b1" weight={400}>
                {`${announcementData!.description}`}
              </Text>
            </div>
          </article>
        </section>

        <aside
          className={`align-middle p-11 items-center rounded flex flex-col items-start gap-[52px] bg-colors_color_white_fixed items-center p-3 gap-9`}
        >
          <article className="flex flex-col gap-8">
            <Heading type="h6" weight={600} extra_classes="text-grey_0">
              Fotos
            </Heading>
            <ul
              className={`grid grid-cols-3 grid-rows-2 gap-8 items-start w-full `}
            >
              <li className="w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] flex justify-center">
                <img
                  className="object-scale-down"
                  src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                  alt=""
                />
              </li>
              <li className="w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] flex justify-center">
                <img
                  className="object-scale-down"
                  src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                  alt=""
                />
              </li>
              <li className="w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] flex justify-center">
                <img
                  className="object-scale-down"
                  src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                  alt=""
                />
              </li>
              <li className="w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] flex justify-center">
                <img
                  className="object-scale-down"
                  src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                  alt=""
                />
              </li>
              <li className="w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] flex justify-center">
                <img
                  className="object-scale-down"
                  src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                  alt=""
                />
              </li>
              <li className="w-[90px] h-[90px] lg:w-[108px] lg:h-[108px] flex justify-center">
                <img
                  className="object-scale-down"
                  src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
                  alt=""
                />
              </li>
            </ul>
          </article>

          <article
            className={`align-middle px-7 items-center rounded flex flex-col gap-7 items-start w-full flex flex-col items-center text-center`}
          >
            <img
              className={`w-[104px] h-[104px] rounded-full`}
              src="https://media.istockphoto.com/id/1150931120/photo/3d-illustration-of-generic-compact-white-car-front-side-view.jpg?b=1&s=612x612&w=0&k=20&c=ToS3pNwkL99nBZvLw4nt4ZMjPRIGPZV5xzza4pPdnkc="
              alt="Profile Avatar"
            />
            <Heading type="h6" weight={600} extra_classes="text-grey_0">
              Marco Antônio
            </Heading>
            <Text type="b1" weight={400}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            <button>Ver todos os anuncios</button>
          </article>
        </aside>

        <section className="bg-colors_color_white_fixed px-7 py-9 flex flex-col gap-[42px]">
          <div className="flex flex-col gap-7">
            <Heading type="h6" weight={600}>
              Comentários
            </Heading>
            <ul className="flex flex-col gap-11">
              <li className={`flex flex-col gap-3`}>
                <div className={`flex items-center gap-2`}>
                  <Profile
                    type="small"
                    name="Usuário 1"
                    extra_classes="flex items-center gap-3"
                  />
                  <div className="flex gap-3 items-center">
                    <div className="w-1 h-1 bg-grey-grey_4 rounded-full"></div>
                    <small className="text-grey-grey_3 font-normal font-[14px]">
                      há 3 dias
                    </small>
                  </div>
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
                <div className={`flex items-center gap-2`}>
                  <Profile
                    type="small"
                    name="Usuário 2"
                    extra_classes="flex items-center gap-3"
                  />
                  <div className="flex gap-3 items-center">
                    <div className="w-1 h-1 bg-grey-grey_4 rounded-full"></div>
                    <small className="text-grey-grey_3 font-normal font-[14px]">
                      há 5 dias
                    </small>
                  </div>
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
                <div className={`flex items-center gap-2`}>
                  <Profile
                    type="small"
                    name="Usuário 3"
                    extra_classes="flex items-center gap-3"
                  />
                  <div className="flex gap-3 items-center">
                    <div className="w-1 h-1 bg-grey-grey_4 rounded-full"></div>
                    <small className="text-grey-grey_3 font-normal font-[14px]">
                      há 7 dias
                    </small>
                  </div>
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
          </div>
          <div className="flex flex-col gap-6">
            <Profile
              type="small"
              name="Usuário Logado"
              extra_classes="flex items-center gap-3"
            />
            <textarea
              placeholder="Digite seu comentário aqui..."
              className="w-full border-grey-grey_4 border rounded px-4 py-3 h-[128px] resize-none"
            />
            <Button type="bg-brand">Comentar</Button>
            <section className="flex gap-2 items-center flex-wrap">
              <small className="text-grey-grey_3 font-medium font-[14px] px-3 bg-grey-grey7 rounded-3xl">
                Gostei Muito!
              </small>
              <small className="text-grey-grey_3 font-medium font-[14px] px-3 bg-grey-grey7 rounded-3xl">
                Incrivél
              </small>
              <small className="text-grey-grey_3 font-medium font-[14px] px-3 bg-grey-grey7 rounded-3xl">
                Recomendaria para meus amigos!
              </small>
            </section>
          </div>
        </section>
      </main>
    </>

    // <main className={`body`}>
    //   <NavBar />
    //   <div className="flex justify-center">
    // <section
    //   className={` min-h-screen flex flex-col items-center p-3 gap-9`}
    // >
    //   <article className={`flex flex-col gap-4`}>
    //     <div className={`align-middle p-11 items-center rounded `}>
    //       <img
    //         src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //         alt="Cobalt"
    //       />
    //     </div>
    //     <div
    //       className={`align-middle p-11 items-center rounded flex flex-col items-start gap-2 `}
    //     >
    //       <Heading type="h6" weight={600} extra_classes="text-grey_0">
    //         Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
    //       </Heading>
    //       <div className={` flex flex-col gap-4 `}>
    //         <div className={` flex gap-4 `}>
    //           <p>2013</p>
    //           <p>0 KM</p>
    //         </div>
    //         <h3>R$ 00.000,00</h3>
    //       </div>
    //       <button>Comprar</button>
    //     </div>
    //   </article>

    //   <article className={`flex flex-col gap-4 `}>
    //     <div
    //       className={`align-middle p-11 items-center rounded flex flex-col gap-4 items-start`}
    //     >
    //       <Heading type="h6" weight={600} extra_classes="text-grey_0">
    //         Descrição
    //       </Heading>
    //       <Text type="b1" weight={400}>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the s standard dummy text ever
    //         since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book.
    //       </Text>
    //     </div>

    //         <ul className={`align-middle p-11 items-center rounded flex flex-col gap-8 items-start`}>
    //           <Heading type="h6" weight={600} extra_classes="text-grey_0">
    //             Comentários
    //           </Heading>
    //           <li className={`flex flex-col gap-3`}>
    //             <div className={`flex items-center gap-2`}>
    //               <img
    //                 className={`w-10 h-10 `}
    //                 src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
    //                 alt=""
    //               />
    //               <Heading
    //                 type="h8"
    //                 weight={500}
    //                 extra_classes="text-grey_0 pr-2"
    //               >
    //                 Júlia Lima
    //               </Heading>
    //               <Heading
    //                 type="h8"
    //                 weight={400}
    //                 extra_classes="text-grey-grey_3"
    //               >
    //                 há 3 dias
    //               </Heading>
    //             </div>
    //             <Text type="b1" weight={400}>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the s standard
    //               dummy text ever since the 1500s, when an unknown printer took
    //               a galley of type and scrambled it to make a type specimen
    //               book.
    //             </Text>
    //           </li>

    //           <li className={`flex flex-col gap-3`}>
    //             <div className={`flex items-center gap-3`}>
    //               <img
    //                 className={`w-10 h-10 `}
    //                 src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
    //                 alt=""
    //               />
    //               <Heading type="h8" weight={500} extra_classes="text-grey_0">
    //                 Marco Antônio
    //               </Heading>
    //               <Heading
    //                 type="h8"
    //                 weight={400}
    //                 extra_classes="text-grey-grey_3"
    //               >
    //                 há 7 dias
    //               </Heading>
    //             </div>
    //             <Text type="b1" weight={400}>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the s standard
    //               dummy text ever since the 1500s, when an unknown printer took
    //               a galley of type and scrambled it to make a type specimen
    //               book.
    //             </Text>
    //           </li>

    //           <li className={`flex flex-col gap-3`}>
    //             <div className={`flex items-center gap-3`}>
    //               <img
    //                 className={`w-10 h-10 `}
    //                 src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
    //                 alt=""
    //               />
    //               <Heading type="h8" weight={500} extra_classes="text-grey_0">
    //                 Camila Silva
    //               </Heading>
    //               <Heading
    //                 type="h8"
    //                 weight={400}
    //                 extra_classes="text-grey-grey_3"
    //               >
    //                 há 1 mês
    //               </Heading>
    //             </div>
    //             <Text type="b1" weight={400}>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the s standard
    //               dummy text ever since the 1500s, when an unknown printer took
    //               a galley of type and scrambled it to make a type specimen
    //               book.
    //             </Text>
    //           </li>
    //         </ul>

    //         <div
    //           className={`align-middle p-11 items-center rounded flex flex-col gap-4 items-start`}
    //         >
    //           <div className={`flex flex-col w-full items-start gap-3`}>
    //             <div className={`flex items-center gap-3`}>
    //               <img
    //                 className={`w-10 h-10 `}
    //                 src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
    //                 alt=""
    //               />
    //               <Heading type="h8" weight={500} extra_classes="text-grey_0">
    //                 Marco Antônio
    //               </Heading>
    //             </div>
    //             <div
    //               className={`flex flex-col items-end border-solid border-2 border-grey-grey_7 w-full rounded`}
    //             >
    //               <input
    //                 className={`p-8 w-full border-none`}
    //                 type="text"
    //                 placeholder="Digite aqui seu comentário..."
    //                 name=""
    //                 id=""
    //               />
    //               <button className={`p-8`}>Comentar</button>
    //             </div>
    //           </div>
    //           <div className={`flex w-full items-start gap-3`}>
    //             <Heading type="h8" weight={500} extra_classes="text-grey_0 bg">
    //               Gostei muito!
    //             </Heading>
    //             <Heading type="h8" weight={500} extra_classes="text-grey_0">
    //               Incrível
    //             </Heading>
    //             <Heading type="h8" weight={500} extra_classes="text-grey_0">
    //               Recomendarei para meus amigos!
    //             </Heading>
    //           </div>
    //         </div>
    //       </article>
    //     </section>

    // <aside className={` flex flex-col items-center p-3 gap-9`}>
    //   <article>
    //     <ul
    //       className={`align-middle p-11 items-center rounded flex flex-col gap-8 items-start w-full `}
    //     >
    //       <Heading type="h6" weight={600} extra_classes="text-grey_0">
    //         Fotos
    //       </Heading>
    //       <div className={` flex flex-wrap gap-8 w-20`}>
    //         <li className={``}>
    //           <img
    //             src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //             alt=""
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //             alt=""
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //             alt=""
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //             alt=""
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //             alt=""
    //           />
    //         </li>
    //         <li>
    //           <img
    //             src="https://th.bing.com/th/id/R.aaa109652f5d707566d1d9017836ffc4?rik=by8YpGF6DM%2bWAw&riu=http%3a%2f%2fcarroecarros.com.br%2fwp-content%2fuploads%2f2014%2f05%2fnovo-cobalt-2015-5.jpg&ehk=3kHXj623a20gmA1%2f552CpkNRX%2fDlqEdP4M4r%2b1PifJQ%3d&risl=&pid=ImgRaw&r=0"
    //             alt=""
    //           />
    //         </li>
    //       </div>
    //     </ul>
    //   </article>

    //   <article
    //     className={`align-middle p-11 items-center rounded flex flex-col gap-8 items-start w-full`}
    //   >
    //     <div className={`flex flex-col items-center gap-3`}>
    //       <img
    //         className={`w-10 h-10 `}
    //         src="https://img.elo7.com.br/product/zoom/3187C7F/adesivos-de-parede-adesivos-de-parede.jpg"
    //         alt=""
    //       />
    //       <Heading type="h8" weight={500} extra_classes="text-grey_0">
    //         Marco Antônio
    //       </Heading>
    //       <Text type="b1" weight={400}>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the s standard dummy text ever
    //         since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book.
    //       </Text>
    //       <button>Ver todos os anuncios</button>
    //     </div>
    //   </article>
    // </aside>
    //   </div>
    // </main>
  );
}
