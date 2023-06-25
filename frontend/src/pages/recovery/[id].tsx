import Input from "@/components/Inputs/input";
import Button from "@/components/button";
import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";
import { Text } from "@/components/typography/text.component";
import { RecoveryContext } from "@/context/recovery.context";
import { ResetPassInterface, resetPassSchema } from "@/schemas/recovery.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Reset() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassInterface>({
    resolver: zodResolver(resetPassSchema),
  });

  const { resetPassword } = RecoveryContext();

  return (
    <div className="flex flex-col min-h-screen bg-colors_color_white_fixed lg:bg-grey-6">
      <NavBar />
      <main className="flex flex-1 items-center">
        <form
          onSubmit={handleSubmit((data) =>
            resetPassword(router.query.id, data)
          )}
          className="flex flex-col px-11 py-6 mt-[50px] rounded bg-colors_color_white_fixed w-screen gap-8
                lg:max-w-[512px]
                lg:mx-auto
                "
        >
          <Heading type="h5" weight={500}>
            Recuperação de senha
          </Heading>
          <Text type="b1" weight={600}>
            Digite uma nova senha para sua conta.
          </Text>
          <Input
            input_name="password"
            input_type="password"
            label="Senha *"
            extra_classes="flex flex-col w-full"
            register={register("password")}
          >
            Digite a senha...
          </Input>
          {errors.password && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.password.message}
            </p>
          )}
          <Input
            register={register("confirmPassword")}
            input_name="confirmPassword"
            input_type="password"
            label="Confirmar Senha *"
            extra_classes="flex flex-col w-full"
          >
            {"Digitar Senha"}
          </Input>
          {errors.confirmPassword && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.confirmPassword.message}
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
