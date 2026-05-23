const careers = {
  support: {
    title: "Suporte Técnico e Customer Experience",
    description: "Essa trilha combina resolução de problemas, atendimento ao usuário, comunicação clara e conhecimento técnico. É uma ótima porta de entrada para crescer em áreas como cloud, segurança, infraestrutura e automação.",
    steps: [
      "Estudar fundamentos de redes e sistemas operacionais",
      "Praticar atendimento por tickets, e-mail e chat",
      "Aprender Microsoft 365, Active Directory e ferramentas de suporte",
      "Criar projetos simples no GitHub para mostrar evolução"
    ]
  },
  cloud: {
    title: "Cloud Computing",
    description: "Essa trilha é indicada para quem gosta de infraestrutura, servidores, redes, serviços em nuvem e soluções escaláveis. Pode levar a carreiras como Cloud Support, Cloud Analyst e Cloud Engineer.",
    steps: [
      "Estudar conceitos de Azure e AWS",
      "Aprender sobre máquinas virtuais, storage, redes e IAM",
      "Fazer laboratórios práticos em cloud",
      "Buscar certificações fundamentais como AZ-900 ou AWS Cloud Practitioner"
    ]
  },
  data: {
    title: "Dados e Analytics",
    description: "Essa trilha é ideal para quem gosta de entender informações, analisar padrões e transformar dados em decisões. Pode levar a áreas como BI, análise de dados e engenharia de dados.",
    steps: [
      "Aprender Excel, SQL e Power BI",
      "Estudar lógica de dados e visualização",
      "Criar dashboards simples",
      "Praticar análise com bases públicas"
    ]
  },
  ai: {
    title: "Inteligência Artificial",
    description: "Essa trilha é voltada para quem quer criar soluções usando modelos de IA, automação inteligente, agentes, chatbots e engenharia de prompt.",
    steps: [
      "Estudar fundamentos de IA generativa",
      "Praticar engenharia de prompt",
      "Criar pequenos agentes ou chatbots",
      "Aprender sobre APIs de IA, Azure OpenAI ou OpenAI API"
    ]
  },
  security: {
    title: "Cibersegurança",
    description: "Essa trilha é indicada para quem gosta de investigação, proteção de dados, controle de acesso, riscos e defesa de ambientes digitais.",
    steps: [
      "Estudar fundamentos de redes e segurança",
      "Aprender IAM, MFA e controle de permissões",
      "Conhecer Microsoft Defender e logs de segurança",
      "Praticar análise de incidentes em laboratórios"
    ]
  },
  dev: {
    title: "Desenvolvimento de Software",
    description: "Essa trilha combina lógica, programação e criação de aplicações. É indicada para quem gosta de construir sites, sistemas, APIs e produtos digitais.",
    steps: [
      "Aprender HTML, CSS e JavaScript",
      "Estudar lógica de programação",
      "Criar projetos pequenos e publicar no GitHub",
      "Depois evoluir para frameworks e APIs"
    ]
  },
  devops: {
    title: "DevOps e Automação",
    description: "Essa trilha é indicada para quem gosta de automatizar processos, trabalhar com deploy, containers, integração contínua e infraestrutura como código.",
    steps: [
      "Estudar Git, GitHub e terminal",
      "Aprender Docker e fundamentos de Linux",
      "Criar automações simples",
      "Conhecer pipelines de CI/CD"
    ]
  }
};

const generateBtn = document.getElementById("generateBtn");
const interest = document.getElementById("interest");
const skill = document.getElementById("skill");
const result = document.getElementById("result");
const careerTitle = document.getElementById("careerTitle");
const careerDescription = document.getElementById("careerDescription");
const stepsList = document.getElementById("steps");

function chooseCareer() {
  let selectedCareer = interest.value;

  if (skill.value === "automation" && selectedCareer === "support") {
    selectedCareer = "devops";
  }

  if (skill.value === "analysis" && selectedCareer === "support") {
    selectedCareer = "security";
  }

  const career = careers[selectedCareer];

  careerTitle.textContent = career.title;
  careerDescription.textContent = career.description;

  stepsList.innerHTML = "";
  career.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    stepsList.appendChild(item);
  });

  result.classList.remove("hidden");
}

generateBtn.addEventListener("click", chooseCareer);
