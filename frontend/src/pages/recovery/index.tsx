import Input from "@/components/Inputs/input";
import Button from "@/components/button";
import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";
import { Text } from "@/components/typography/text.component";
import { RecoveryContext } from "@/context/recovery.context";
import { RecoveryInterface, recoverySchema } from "@/schemas/recovery.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Recovery() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoveryInterface>({
    resolver: zodResolver(recoverySchema),
  });

  const { sendRecoveryEmail } = RecoveryContext();

  return (
    <div className="flex flex-col min-h-screen bg-colors_color_white_fixed lg:bg-grey-6">
      <NavBar />
      <main className="flex flex-1 items-center">
        <form
          onSubmit={handleSubmit(sendRecoveryEmail)}
          className="flex flex-col px-11 py-6 mt-[50px] rounded bg-colors_color_white_fixed w-screen gap-8
                lg:max-w-[512px]
                lg:mx-auto
                "
        >
          <Heading type="h5" weight={500}>
            Recuperação de senha
          </Heading>
          <Text type="b1" weight={600}>
            Digite seu email para fazer o envio do email para recuperar a senha.
          </Text>
          <Input
            input_name="email"
            input_type="email"
            label="Email"
            extra_classes="flex flex-col w-full"
            register={register("email")}
          >
            Digite seu email...
          </Input>
          {errors.email && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.email.message}
            </p>
          )}
          <Button type="bg-brand" extra_classes="self-end">
            Enviar
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
