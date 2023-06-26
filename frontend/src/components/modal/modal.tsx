import { ContextModal } from "@/context/modal.context";

export const Modal = () => {
  const { modalContent } = ContextModal();

  return (
    <>
      {modalContent && (
        <div
<<<<<<< HEAD
          className={`fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center justify-center lg:items-start lg:overflow-y-scroll`}
        >
          <div
            className="w-screen h-fit px-4 pb-5 bg-colors_color_white_fixed rounded-lg overflow-y-scroll max-h-fit max-w-[512px]
=======
          className={`fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center lg:justify-center lg:items-start lg:overflow-y-scroll`}
        >
          <div
            className="w-screen h-fit px-4 pb-5 bg-colors_color_white_fixed rounded-lg overflow-y-scroll max-h-[80%]
>>>>>>> 74202466dcdf3ed0daccade79d7e83adf9941b5a
                        lg:px-6
                        lg:pb-8
                        lg:max-h-none
                        lg:mt-[98px]
<<<<<<< HEAD
=======
                        m-4
>>>>>>> 74202466dcdf3ed0daccade79d7e83adf9941b5a
                        "
          >
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
};
