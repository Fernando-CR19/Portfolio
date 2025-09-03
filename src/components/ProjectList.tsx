import { ScrollView } from "react-native";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const projects = [
    {
      id: 1,
      title: "Sistema de Agendamento",
      description:
        "Eu desenvolvi este aplicativo Android durante a faculdade como um protótipo para uma clínica, com o objetivo de simplificar o processo de agendamento. Ele reduz a burocracia dos sistemas tradicionais e oferece funcionalidades adicionais, como: agendamento de consultas e exames, acesso ao histórico médico, visualização de resultados de exames, escolha entre planos (básico, membro e premium) e uma área dedicada para receitas e prescrições médicas digitalizadas.",
      image: require("../assets/saudeManiaApp.png"),
    },
    {
      id: 2,
      title: "Microserviço para envio de código de Autenticação",
      description:
        "Desenvolvi um microserviço para geração e envio de códigos OTP (One-Time Password) de 6 dígitos, seguindo o padrão de mercado e com suporte a TTL (Time To Live) para expiração automática. O envio é realizado via WhatsApp, utilizando WebSocket para comunicação em tempo real. Esse microserviço é genérico e desacoplado, podendo ser facilmente integrado a diferentes aplicações, como no caso do meu app Saúde Mania.",
      image: require("../assets/OTP.jpg"),
    },
    {
      id: 3,
      title: "AI Agent",
      description:
        "Desenvolvi um agent de IA utilizando LangChain e o protocolo MCP, eles estão equipado com um conjunto de ferramentas para treinamento de modelos de machine learning e realização de previsões a partir de uma base de dados pré-definida. O agent avalia os modelos treinados, identifica aquele com melhor desempenho e o retorna para ser utilizado em uma análise posterior, com novos dados que serão enviados pelo usuário.",
      image: require("../assets/AIAgent.jpg"),
    },
  ];

  return (
    <ScrollView>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </ScrollView>
  );
}
