import Card from "@/components/Card";
export default function Projects(){
    return(
<main className="h-screen w-screen  bg-amber-950 flex items-center flex-col gap-4">
    <h1>Meus projetos</h1>

    <Card src="/mambo.jpg"
     title="site de contrato Forja BJ"
     description="É um site teste que eu e um colega fizemos para 
     buscar vagas de emprego de forma prática e rápida."
     url="https://github.com/BAlexander-1/site-de-contrato-Forja-B-J" 
     />
    <Card src="/mambo.jpg"
    title="Pesquisa"
    description="É um site com uma pesquisa do meu curso." 
    url="https://github.com/BAlexander-1/PesquisaTecnologia-Tarde"
    />
    <Card src="/mambo.jpg"
    title="Exercicios"
    description="são exercicios feitos em sala de aula"
    url="https://github.com/BAlexander-1/exer-forja-C-01"
    />
</main>
    );
}