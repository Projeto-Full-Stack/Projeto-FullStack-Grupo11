import Input from "@/components/input";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function RegisterPage() {
    return(
        <>
            <NavBar/>
            <main>
                <form action="">
                    <Heading weight={500} type="h5">{"Cadastro"}</Heading>
                    <div>

                    </div>
                    <div>

                    </div>
                </form>
            </main>
        </>
    )
}

export default RegisterPage