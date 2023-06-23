import { Heading } from "./typography/heading.component";
import { Text } from "./typography/text.component";

export function Footer() {
  return (
    <footer
      className="bg-[#000] py-[58px] bottom-0 w-full flex flex-col items-center gap-[60px] mt-[60px]
            lg:px-[60px]
            lg:flex-row
            lg:justify-between
        "
    >
      <Heading
        type="h4"
        weight={600}
        extra_classes="text-colors_color_white_fixed"
      >
        Motors shop
      </Heading>
      <Text
        type="b2"
        weight={400}
        extra_classes="text-colors_color_white_fixed"
      >
        © 2023 - Todos os direitos reservados.
      </Text>
      <button
        onClick={() => scroll(0, 0)}
        className="text-colors_color_white_fixed border border-grey-1 rounded bg-grey-1 w-[53px] h-[53px] text-center text-[30px]"
      >
        ^
      </button>
    </footer>
  );
}
