import Layout from "../components/Layout";

export  default function Estatico(){
    return(
        <Layout titulo = "Conteudo Estatico">
            <div>{Math.random()}</div>
        </Layout>
    )
}