import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Text } from "@/components/typography/text.component";
import { Heading } from "@/components/typography/heading.component";
import NavBar from "@/components/navbar";
import Button from "@/components/button";
import Profile from "@/components/profile";
import { AnnouncementContext } from "@/context/announcement.context";
import { useEffect } from "react";
import { Footer } from "@/components/footer";
import ListComments from "@/components/listComments";
import { commentContext } from "@/context/comments.context";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommentInterface, commentSchema } from "@/schemas/comment.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginContext } from "@/context/login.context";
import Link from "next/link";
import { ImageCard } from "@/components/annImageCard";
import { ImageList } from "@/components/annImageList";

const inter = Inter({ subsets: ["latin"] });

export default function Announcements() {
  const router = useRouter();
  const { announcementData, getAnnouncement, announcementUserData } =
    AnnouncementContext();
  const { commentRequest, getAllAnnoucementComments, listComments } =
    commentContext();
  const { userInfo } = LoginContext();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CommentInterface>({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (router.query.id) {
      getAnnouncement(router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    if (router.query.id) {
      getAllAnnoucementComments(router.query.id);
    }
  }, [router.query.id]);

  const onSubmit: SubmitHandler<CommentInterface> = (data) => {
    if (userInfo) {
      commentRequest(data, announcementData!.id);
    }
  };

  const buyCar = () => {
    if (userInfo) {
      let phoneNumber = announcementUserData.phone;
      const regex = /[()-]/g
      phoneNumber = phoneNumber.replace(regex, "");
      const url = `https://wa.me/55${phoneNumber}`;

      window.location.href = url;
    }
  };

  if (!announcementData) {
    return (
      <div className="flex flex-col bg-grey-6 min-h-screen">
        <NavBar />
        <main className="flex flex-col flex-1 items-center justify-center gap-4">
          <Heading type="h1" weight={700}>
            Ooops!
          </Heading>
          <Text type="b1" weight={600}>
            Anúncio não encontrado.
          </Text>
          <Button type="bg-brand" click_event={() => router.push("/")}>
            Voltar
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={"body"}>
      <NavBar />
      <main className="p-11 flex flex-col items-center">
        <div className="flex flex-col w-full gap-4 justify-between max-w-[2300px] lg:w-full lg:mb-0 lg:flex-row">
          <section
            className={`flex flex-col items-center py-3 gap-4 lg:py-[0px] lg:w-[60%] `}
          >
            <article className={`flex flex-col w-full gap-4 lg:w-full`}>
              <div className="h-[355px] bg-colors_color_white_fixed flex justify-center rounded">
                <img
                  className="object-scale-down"
                  src={announcementData.coverImage}
                  alt={announcementData.model}
                  onError={({currentTarget}) => {
                    currentTarget.onerror = null
                    currentTarget.src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  }}
                />
              </div>
              <div
                className={`flex flex-col pl-7 py-7 pr-5 bg-colors_color_white_fixed rounded gap-6 lg:w-full`}
              >
                <Heading
                  type="h6"
                  weight={600}
                  extra_classes="text-grey_0 pt-4"
                >
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
                {userInfo && (
                  <Button
                    type="bg-brand"
                    click_event={buyCar}
                    extra_classes="w-fit"
                  >
                    Comprar
                  </Button>
                )}
              </div>
            </article>
            <article
              className={`flex flex-col gap-4 bg-colors_color_white_fixed rounded w-full`}
            >
              <div
                className={`align-middle p-11 rounded flex flex-col h-fit gap-4 items-start lg:h-[200px]`}
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
            className={`lg:align-middle   rounded flex flex-col   items-center gap-4 lg:w-[40%]`}
          >
            <article className="flex flex-col gap-8 w-full bg-colors_color_white_fixed p-11 rounded  ">
              <Heading type="h6" weight={600} extra_classes="text-grey_0">
                Fotos
              </Heading>
              <ImageList list_length={announcementData.image.length}>
                {announcementData.image.length ?
                  announcementData.image.map((photo: any) => {
                    return <ImageCard image={photo.imageUrl} />;
                }):
                <Text type="b2" weight={500}>Não possui fotos</Text>
                }
              </ImageList>
            </article>

            <article
              className={`align-middle px-7 items-center rounded flex flex-col gap-7 mb-[16px] w-full  justify-between text-center h-[400px] p-11 bg-colors_color_white_fixed `}
            >
              <Profile type="big" name={`${announcementUserData.name}`} />

              <Text type="b1" weight={400}>
                {`${announcementUserData.description}`}
              </Text>
              <Button
                type="bg-black"
                click_event={() =>
                  router.push(`/profile/${announcementUserData.id}`)
                }
              >
                Ver todos os anúncios
              </Button>
            </article>
          </aside>
        </div>
        <div className="flex flex-col mt-4 gap-4 justify-between mb-4 max-w-[2300px] lg:p-0 lg:w-full lg:mt-8">
          <section className="bg-colors_color_white_fixed px-11 py-9 flex flex-col justify-center gap-[42px]  rounded lg:w-[60%] ">
            <div className="flex flex-col gap-7">
              <Heading type="h6" weight={600}>
                Comentários
              </Heading>
              <ListComments comments={listComments} />
            </div>
          </section>
              {userInfo! && (
                <section className="bg-colors_color_white_fixed px-11 py-9 mt-[16px] flex flex-col h-fit  rounded lg:w-[60%] ">
                  <div className="flex flex-col gap-6">
                    <Profile
                      type="small"
                      name={userInfo.name}
                      extra_classes="flex items-center gap-3"
                    />
                  

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                      {...register("comment")}
                      placeholder="Digite seu comentário aqui..."
                      className="w-full border-grey-grey_4 border rounded px-4 py-3 h-[128px] resize-none"
                    />
                    <Button type="bg-brand">Comentar</Button>
                  </form>
                  <section className="flex gap-2 items-center flex-wrap">
                    <div className="flex gap-2 items-center">
                      <span className="bg-grey-6 px-4 py-1 text-[12px] text-grey-3 rounded">
                        Gostei Muito!
                      </span>
                      <span className="bg-grey-6 px-4 py-1 text-[12px] text-grey-3 rounded">
                        Incrível
                      </span>
                    </div>
                    <span className="bg-grey-6 px-4 py-1 text-[12px] text-grey-3 rounded">
                      Recomendária para meus amigos
                    </span>
                  </section>
                  </div>
                </section>
              )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
