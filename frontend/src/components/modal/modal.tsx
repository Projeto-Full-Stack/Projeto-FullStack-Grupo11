import { ContextModal } from "@/context/modal.context";

export const Modal = () => {
  const { modalContent } = ContextModal();

  return (
    <>
      {modalContent && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center lg:justify-center lg:items-start lg:overflow-y-scroll`}
        >
          <div
            className="w-screen h-fit px-4 pb-5 bg-colors_color_white_fixed rounded-lg overflow-y-scroll max-h-[80%] max-w-[520px] m-auto
                        lg:px-6
                        lg:pb-8
                        lg:min-w-[520px]
                        lg:w-fit
                        lg:max-h-none
                        lg:max-w-[80%]
                        lg:mt-[98px]
                        m-4
                        "
          >
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};
