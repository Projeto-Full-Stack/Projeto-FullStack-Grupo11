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
      <div className="z-[-1] h-screen absolute">
        <div className="bg-brand-1 h-[516px] w-screen absolute"></div>
      </div>
      <NavBar />
      <main className="lg:grid lg:grid-cols-2 mx-[3%] lg:mt-[10px]">
        <section
          className={`flex flex-col items-center py-3 gap-9 lg:py-[0px]`}
        >
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
              <Button type="bg-brand" extra_classes="w-fit">
                Comprar
              </Button>
            </div>
          </article>
          <article
            className={`flex flex-col gap-4 bg-colors_color_white_fixed rounded w-full`}
          >
            <div
              className={`align-middle p-11 rounded flex flex-col gap-4 items-start`}
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
          className={` flex flex-col items-center p-11 gap-9 bg-colors_color_white_fixed `}
        >
          <article className="flex flex-col gap-8 w-full">
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
            </ul>
          </article>

          <article
            className={`align-middle px-7 items-center rounded flex flex-col gap-7 items-start w-full flex flex-col items-center text-center h-fit`}
          >
            <Heading type="h6" weight={600} extra_classes="text-grey_0">
              {`${announcementUserData.name}`}
            </Heading>
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

        <section className="bg-colors_color_white_fixed px-11 py-9 flex flex-col gap-[42px]">
          <div className="flex flex-col gap-7">
            <Heading type="h6" weight={600}>
              Comentários
            </Heading>
            <ListComments comments={listComments} />
          </div>
          <div className="flex flex-col gap-6">
            {userInfo! && (
              <Profile
                type="small"
                name={userInfo.name}
                extra_classes="flex items-center gap-3"
              />
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register("comment")}
                placeholder="Digite seu comentário aqui..."
                className="w-full border-grey-grey_4 border rounded px-4 py-3 h-[128px] resize-none"
              />
              <Button type="bg-brand">Comentar</Button>
            </form>
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
      <Footer />
    </div>
  );
}
