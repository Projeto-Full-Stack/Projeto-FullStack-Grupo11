import Input from "@/components/Inputs/input";
import NavBar from "@/components/navbar";
import { Text } from "@/components/typography/text.component";
import { Heading } from "@/components/typography/heading.component";
import { Footer } from "@/components/footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterInterface } from "@/schemas/register.schemas";
import { registerContext } from "@/context/register.context";
import { useEffect, useState } from "react";
import Button from "@/components/button";

function RegisterPage() {
  const [selected, setSelected] = useState(true);

  const handleSelected = (value: string) => {
    if (value === "default") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterInterface>({
    resolver: zodResolver(registerSchema),
  });

  const { registerRequest, registerError, setRegisterError } =
    registerContext();

  useEffect(() => {
    return setRegisterError("");
  }, []);

  return (
    <main className={`bg-grey-7 min-h-screen`}> 
      <NavBar />
      <div className={`flex justify-center items-center mt-[45px] mb-[94px]`}>
        <form
          onSubmit={handleSubmit(registerRequest)}
          className={`bg-grey-10 rounded flex flex-col items-start p-12 w-[412px] min-h-min `}
        >
          <Heading weight={500} type="h5" extra_classes="mb-[32px]">
            {"Cadastro"}
          </Heading>
          {registerError && (
            <Text
              type="b2"
              weight={500}
              extra_classes="text-feedback-alert_1 mb-4"
            >
              {registerError}
            </Text>
          )}
          <div>
            <Text weight={500} type="b2" extra_classes="mb-[24px]">
              {"Informações Pessoais"}
            </Text>
            <Input
              register={register("name")}
              input_name="name"
              input_type="text"
              label="Nome *"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"Ex: Samuel Leão"}
            </Input>
            {errors.name && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.name.message}
              </p>
            )}
            <Input
              register={register("email")}
              input_name="email"
              input_type="email"
              label="Email *"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"Ex: samuel@kenzie.com.br"}
            </Input>
            {errors.email && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.email.message}
              </p>
            )}

            <Input
              register={register("phone")}
              input_name="phone"
              input_type="tel"
              label="Celular *"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"(DD)9XXXX-YYYY"}
            </Input>
            {errors.phone && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.phone.message}
              </p>
            )}
            <Input
              register={register("birthDate")}
              input_name="birthDate"
              input_type="date"
              label="Data de nascimento *"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"00/00/00"}
            </Input>
            {errors.birthDate && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.birthDate.message}
              </p>
            )}
            <Input
              register={register("description")}
              input_name="description"
              input_type="textArea"
              label="Descrição *"
              extra_classes="w-[315px]"
            >
              {"Digitar descrição"}
            </Input>
            {errors.description && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.description.message}
              </p>
            )}

            <Input
              register={register("password")}
              input_name="password"
              input_type="password"
              label="Senha *"
              extra_classes="my-[10px] w-[315px] h-[40px] text-[15px]"
            >
              {"Digitar Senha"}
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
              extra_classes="my-[10px] w-[315px] h-[40px] text-[15px]"
            >
              {"Digitar Senha"}
            </Input>
            {errors.confirmPassword && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.confirmPassword.message}
              </p>
            )}
            <Input
              register={register("cpf")}
              input_name="cpf"
              input_type="text"
              label="CPF *"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"000.000.000-00"}
            </Input>
            {errors.cpf && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.cpf.message}
              </p>
            )}
            <input
              type="radio"
              id="teste1"
              {...register("isVendor")}
              value="comprador"
              checked
            />
            <label htmlFor="teste1">Comprador</label>
            <input
              type="radio"
              id="teste2"
              {...register("isVendor")}
              value="vendedor"
            />
            <label htmlFor="teste2">Vendedor</label>
          </div>

          <div className="mt-[30px]">
            <Text weight={500} type="b2" extra_classes="">
              {"Informações de Endereço"}
            </Text>
            <Input
              register={register("cep")}
              input_name="cep"
              input_type="text"
              label="CEP"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"00000-000"}
            </Input>
            {errors.cep && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.cep.message}
              </p>
            )}
            <span className="flex gap-[10px] w-[315px] my-[10px]">
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  <Text weight={500} type="b2">
                    Estado
                  </Text>

                  <select
                    {...register("state")}
                    onChange={(e) => handleSelected(e.target.value)}
                    required={true}
                    id="state"
                    name="state"
                    className="my-[5px] w-[152px] h-[40px] text-[14px] focus:outline-none focus:ring focus:ring-brand-1 text-grey-3 border-[1.5px] font-normal rounded border-grey-4 block"
                  >
                    <option value="default">Selecione seu estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </label>
                {selected && (
                  <p className={`flex py-2 text-feedback-alert_1`}>
                    {"Selecione um estado"}
                  </p>
                )}
              </div>
              <div>
                <Input
                  register={register("city")}
                  input_name="city"
                  input_type="text"
                  label="Cidade"
                  extra_classes="my-[5px] w-[152px] text-[13px] h-[40px]"
                >
                  {"Digite sua Cidade"}
                </Input>
                {errors.city && (
                  <p className={`flex py-2 text-feedback-alert_1`}>
                    {errors.city.message}
                  </p>
                )}
              </div>
            </span>
            <Input
              register={register("street")}
              input_name="street"
              input_type="text"
              label="Rua"
              extra_classes="my-[5px] w-[315px] h-[40px]"
            >
              {"Digite sua Rua"}
            </Input>
            {errors.street && (
              <p className={`flex py-2 text-feedback-alert_1`}>
                {errors.street.message}
              </p>
            )}
            <span className="flex gap-[10px] w-[315px]">
              <div>
                <Input
                  register={register("number")}
                  input_name="number"
                  input_type="text"
                  label="Número *"
                  extra_classes="my-[5px] w-[152px] h-[40px] text-[15px]"
                >
                  {"Digitar Número"}
                </Input>
                {errors.number && (
                  <p className={`flex py-2 text-feedback-alert_1`}>
                    {errors.number.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  register={register("complement")}
                  input_name="complement"
                  input_type="text"
                  label="Complemento"
                  extra_classes="my-[5px] w-[152px] h-[40px]"
                >
                  {"Ex: apart 307"}
                </Input>
                {errors.complement && (
                  <p className={`flex py-2 text-feedback-alert_1`}>
                    {errors.complement.message}
                  </p>
                )}
              </div>
            </span>
            {/* <RadioGroup
                            {...register("isVendor")}
                            onChange={(option) => console.log(option)}
                            labelText="Tipo de Conta"
                            options={[
                                <div className="flex justify-around">
                                <span>Anunciante</span>
                                </div>,
                                <div className="flex justify-around">
                                <span>Comprador</span>
                            </div>
                          ]}
                        /> */}
          </div>
          <Button type={`bg-brand`} extra_classes={`py-3 mt-3 px-[7.77rem]`}>
            Cadastrar
          </Button>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default RegisterPage;
