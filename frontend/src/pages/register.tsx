import Input from "@/components/Inputs/input";
import NavBar from "@/components/navbar";
import { Text } from "@/components/typography/text.components";
import { Heading } from "@/components/typography/heading.component";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import RadioGroup from "@/components/Inputs/radioGroup";

const inter = Inter({ subsets: ["latin"] });

function RegisterPage() {
    return(

        <main className={`bg-grey-7`}>
            <NavBar/>
        <div className={`flex justify-center items-center h-[90vh]`}>
                <form action="" className={`bg-grey-10 flex flex-col gap-4 items-start py-22 px-24 w-[412px] min-h-min `}>
                    <Heading weight={500} type="h5">{"Cadastro"}</Heading>
                <div>
                        <Text weight={500} type="b2">{"Informações Pessoais"}</Text>
                    <Input 
                        input_name="name" 
                        input_type="text"
                        label="Nome"
                    >{"Ex: Samuel Leão"}</Input>
                    <Input 
                        input_name="email" 
                        input_type="email"
                        label="Email"
                    >{"Ex: samuel@kenzie.com.br"}</Input>
                    <Input 
                        input_name="cpf" 
                        input_type="text"
                        label="CPF"
                    >{"000.000.000-00"}</Input>
                    <Input 
                        input_name="phone" 
                        input_type="tel"
                        label="Celular"
                    >{"(DDD) 90000-0000"}</Input>
                    <Input 
                        input_name="birthDate" 
                        input_type="date"
                        label="Data de nascimento"
                    >{"00/00/00"}</Input>
                    <Input 
                        input_name="description" 
                        input_type="textArea"
                        label="Descrição"
                    >{"Digitar descrição"}</Input>
                </div>
                <div>
                        <Text weight={500} type="b2">{"Informações de Endereço"}</Text>
                    <Input 
                        input_name="cep" 
                        input_type="text"
                        label="CEP"
                    >{"00000-000"}</Input>
                    <span className="flex">
                            <label htmlFor="state">
                                <Text weight={500} type="b2">Estado</Text>
                            <select id="state" name="estado">
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
                            input_name="city" 
                            input_type="text"
                            label="Cidade"
                        >{"Digite sua Cidade"}</Input>
                    </span>
                    <Input 
                        input_name="street" 
                        input_type="text"
                        label="Rua"
                    >{"Digite sua Rua"}</Input>
                    <span>
                            <Input 
                            input_name="number" 
                            input_type="text"
                            label="Número"
                        >{"Digitar Número"}</Input>
                        <Input 
                            input_name="complement" 
                            input_type="text"
                            label="Complemento"
                        >{"Ex: apart 307"}</Input>
                    </span>
                        <div>
                          <RadioGroup
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
                        </div>
                        <Input 
                            input_name="password" 
                            input_type="password"
                            label="Senha"
                            extra_classes="mt-[30px]"
                        >{"Digitar Senha"}</Input>
                        <Input 
                            input_name="confirm_password" 
                            input_type="password"
                            label="Confirmar Senha"
                        >{"Digitar Senha"}</Input>
                    </div>
                </form>
            </div> 
            <Footer/>
        </main>
    )
}

export default RegisterPage