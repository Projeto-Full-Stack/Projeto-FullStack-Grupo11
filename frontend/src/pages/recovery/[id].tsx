import { useRouter } from "next/router"


export default function (){
    const router = useRouter()

    return (
        <p>Recovery page - id {router.query.id}</p>
    )
}