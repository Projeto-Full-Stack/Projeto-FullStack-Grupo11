import { Heading } from "./typography/heading.component";

const Next = () => {
  return (
    <span className="mt-40 w-full flex flex-col items-center">
      <Heading type="h6" weight={500} extra_classes="text-grey-3 ">
        1 de 2
      </Heading>
      <button className=" font-bold font-lexend text-6 text-brand-2">
        Seguinte &gt;
      </button>
    </span>
  );
};

export default Next;
