import { AnnouncementContext } from "@/context/announcement.context";
import { Heading } from "./typography/heading.component";

interface IPropsSchema {
  data?: string;
}

const Next = ({ data }: IPropsSchema) => {
  const { changePage, totalAnn, actualPage } = AnnouncementContext();

  const nextTxt = "Seguinte >";
  const prevTxt = "< Anterior";

  return (
    <span className="mt-12 w-full flex flex-wrap justify-center gap-6 items-center px-[30%]">
      <Heading type="h6" weight={500} extra_classes="text-grey-3 ">
        {`${actualPage} de ${totalAnn}`}
      </Heading>
      {actualPage > 1 && (
        <button
          className=" font-bold font-lexend text-6 text-brand-2 "
          onClick={() => {
            console.log(data), changePage(data, String(actualPage), 2);
          }}
        >
          {prevTxt}
        </button>
      )}
      {actualPage < totalAnn && (
        <button
          className=" font-bold font-lexend text-6 text-brand-2 "
          onClick={() => {
            console.log(data), changePage(data, String(actualPage), 1);
          }}
        >
          {nextTxt}
        </button>
      )}
    </span>
  );
};

export default Next;
