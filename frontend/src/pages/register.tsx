import Input from "@/components/Inputs/input";
import NavBar from "@/components/navbar";
import { Text } from "@/components/typography/text.components";
import { Heading } from "@/components/typography/heading.component";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import RadioGroup from "@/components/Inputs/radioGroup";
import {  SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, validationRegisterSchema } from "@/schemas/register.schemas";

const inter = Inter({ subsets: ["latin"] });

function RegisterPage() {
    const { 
        handleSubmit, 
        register, 
        formState: { errors }
    } = useForm<validationRegisterSchema>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit: SubmitHandler<validationRegisterSchema> = (data) => console.log(data);
    
    return(

        <main className={`bg-grey-7 min-h-screen`}>
            <NavBar/>
        <div className={`flex justify-center items-center mt-[45px] mb-[94px]`}>
                <form onSubmit={handleSubmit(onSubmit)} action="" className={`bg-grey-10 rounded flex flex-col items-start p-12 w-[412px] min-h-min `}>
                    <Heading weight={500} type="h5" extra_classes="mb-[32px]">{"Cadastro"}</Heading>
                    <div>
                        <Text weight={500} type="b2" extra_classes="mb-[24px]">{"Informações Pessoais"}</Text>
                        <Input 
                            {...register("name",{
                                required:true,
                            })}
                            input_name="name" 
                            input_type="text"
                            label="Nome"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"Ex: Samuel Leão"}</Input>
                        {errors?.name?.type === "required" && <Text type="b2" weight={500} extra_classes="text-feedback-alert_1">O nome é obrigatório</Text>}
                        <Input 
                            {...register("email",{
                                required:true,
                            })}
                            input_name="email" 
                            input_type="email"
                            label="Email"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"Ex: samuel@kenzie.com.br"}</Input>
                        <Input
                            {...register("cpf",{
                                required:true,
                            })}
                            input_name="cpf" 
                            input_type="text"
                            label="CPF"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"000.000.000-00"}</Input>
                        <Input
                            {...register("phone",{
                                required:true,
                            })}
                            input_name="phone" 
                            input_type="tel"
                            label="Celular"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"(DDD) 90000-0000"}</Input>
                        <Input
                            {...register("birthDate",{
                                required:true,
                            })}
                            input_name="birthDate" 
                            input_type="date"
                            label="Data de nascimento"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"00/00/00"}</Input>
                        <Input
                        {...register("description",{
                            required:true,
                        })}
                        input_name="description" 
                        input_type="textArea"
                        label="Descrição"
                        extra_classes="w-[315px] h-[40px]"
                        >{"Digitar descrição"}</Input>
                    </div>
                    <div className="mt-[30px]">
                        <Text weight={500} type="b2" extra_classes="">{"Informações de Endereço"}</Text>
                        <Input
                            {...register("cep",{
                                required:true,
                            })}
                            input_name="cep" 
                            input_type="text"
                            label="CEP"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"00000-000"}</Input>
                        <span className="flex justify-between my-[10px]">
                            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <Text weight={500} type="b2">Estado</Text>
                                <select
                                    {...register("state",{
                                        required:true,
                                    })}
                                    id="state" 
                                    name="estado" 
                                    className="my-[5px] w-[152px] h-[40px] text-[14px] focus:outline-none focus:ring focus:ring-brand-1 text-grey-3 border-[1.5px] font-normal rounded border-grey-4 block">
                                    <option value="Selecione seu estado" selected disabled>Selecione seu estado</option>
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
                            <Input
                                {...register("city",{
                                    required:true,
                                })} 
                                    input_name="city" 
                                input_type="text"
                                label="Cidade"
                                extra_classes="my-[5px] w-[152px] text-[13px] h-[40px]"
                            >{"Digite sua Cidade"}</Input>
                        </span>
                        <Input
                            {...register("street",{
                                required:true,
                            })}
                            input_name="street" 
                            input_type="text"
                            label="Rua"
                            extra_classes="my-[5px] w-[315px] h-[40px]"
                        >{"Digite sua Rua"}</Input>
                        <span className="flex justify-between">
                            <Input 
                                {...register("number",{
                                    required:true,
                                })}
                                input_name="number" 
                                input_type="text"
                                label="Número"
                                extra_classes="my-[5px] w-[152px] h-[40px] text-[15px]"
                            >{"Digitar Número"}</Input>
                            <Input
                                {...register("complement",{
                                    required:true,
                                })} 
                                input_name="complement" 
                                input_type="text"
                                label="Complemento"
                                extra_classes="my-[5px] w-[152px] h-[40px]"
                            >{"Ex: apart 307"}</Input>
                        </span>
                        <RadioGroup
                            {...register("userType",{
                                required:true,
                            })}
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
                        />
                        <Input
                            {...register("password",{
                                required:true,
                            })} 
                            input_name="password" 
                            input_type="password"
                            label="Senha"
                            extra_classes="my-[10px] w-[315px] h-[40px] text-[15px]"
                        >{"Digitar Senha"}</Input>
                        <Input
                            {...register("confirmPassword",{
                                required:true,
                            })}
                            input_name="confirmPassword" 
                            input_type="password"
                            label="Confirmar Senha"
                            extra_classes="my-[10px] w-[315px] h-[40px] text-[15px]"
                        >{"Digitar Senha"}</Input>
                    </div>
                </form>
            </div> 
            <Footer/>
        </main>
    )
}

export default RegisterPage