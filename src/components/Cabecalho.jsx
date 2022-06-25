import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Cabecalho(props){
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}