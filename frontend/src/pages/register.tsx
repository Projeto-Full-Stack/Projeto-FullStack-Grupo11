import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function RegisterPage() {
    return (
        <>
            <NavBar/>

            <Footer/>
        </>
    )
}

export default RegisterPage