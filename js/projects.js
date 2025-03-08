document.addEventListener("DOMContentLoaded", () => {
  const projetos = [
    {
      nome: "ReconhecimentoFerramentas",
      link: "https://github.com/LYuri26/ReconhecimentoFerramentas",
      descricao: "Sistema de reconhecimento de ferramentas com ESP32-CAM.",
      tecnologias: "C, ESP32-CAM",
      atualizado: "Sep 1, 2024",
    },
    {
      nome: "SistemadeGestao",
      link: "https://github.com/LYuri26/SistemadeGestao",
      descricao: "Sistema de gestão desenvolvido em PHP.",
      tecnologias: "PHP",
      atualizado: "Aug 30, 2024",
    },
    {
      nome: "ForcaTISENAI",
      link: "https://github.com/LYuri26/ForcaTISENAI",
      descricao: "Jogo da Forca em JavaScript.",
      tecnologias: "JavaScript",
      atualizado: "Aug 27, 2024",
    },
    {
      nome: "CompressorWeb",
      link: "https://github.com/LYuri26/CompressorWeb",
      descricao: "Ferramenta de compressão web desenvolvida em C++.",
      tecnologias: "C++",
      atualizado: "Aug 22, 2024",
    },
    {
      nome: "FazendaAutomatizada",
      link: "https://github.com/LYuri26/FazendaAutomatizada",
      descricao: "Sistema para automatização de fazenda em C++.",
      tecnologias: "C++",
      atualizado: "Aug 21, 2024",
    },
    {
      nome: "ReconhecimentoFacialPython",
      link: "https://github.com/LYuri26/ReconhecimentoFacialPython",
      descricao: "Sistema de reconhecimento facial em Python.",
      tecnologias: "Python",
      atualizado: "Aug 21, 2024",
    },
    {
      nome: "QuizBiblioteca2024",
      link: "https://github.com/LYuri26/QuizBiblioteca2024",
      descricao: "Quiz interativo da Semana da Biblioteca em HTML.",
      tecnologias: "HTML",
      atualizado: "Jul 4, 2024",
    },
    {
      nome: "outdooravisos",
      link: "https://github.com/LYuri26/outdooravisos",
      descricao: "Sistema de avisos externos em JavaScript.",
      tecnologias: "JavaScript",
      atualizado: "Jun 25, 2024",
    },
    {
      nome: "sorteionomes",
      link: "https://github.com/LYuri26/sorteionomes",
      descricao: "Aplicativo para sorteio de nomes em CSS.",
      tecnologias: "CSS",
      atualizado: "Jun 24, 2024",
    },
    {
      nome: "sorteionumeros",
      link: "https://github.com/LYuri26/sorteionumeros",
      descricao: "Aplicativo para sorteio de números em CSS.",
      tecnologias: "CSS",
      atualizado: "Jun 24, 2024",
    },
    {
      nome: "Senai-Software",
      link: "https://github.com/LYuri26/Senai-Software",
      descricao: "Sistema de agendamento desenvolvido em PHP.",
      tecnologias: "PHP",
      atualizado: "Nov 30, 2023",
    },
    {
      nome: "FormularioDeSatisfacao",
      link: "https://github.com/LYuri26/FormularioDeSatisfacao",
      descricao: "Formulário de satisfação desenvolvido em PHP.",
      tecnologias: "PHP",
      atualizado: "Oct 21, 2023",
    },
    {
      nome: "palavras",
      link: "https://github.com/LYuri26/palavras",
      descricao: "Jogo de palavras em JavaScript.",
      tecnologias: "JavaScript",
      atualizado: "Jun 20, 2024",
    },
    {
      nome: "termo-biblioteca",
      link: "https://github.com/LYuri26/termo-biblioteca",
      descricao: "Jogo de termo para a biblioteca.",
      tecnologias: "JavaScript",
      atualizado: "Jun 18, 2024",
    },
    {
      nome: "halloween",
      link: "https://github.com/LYuri26/halloween",
      descricao: "Site temático de Halloween.",
      tecnologias: "HTML, CSS",
      atualizado: "Jun 15, 2024",
    },
    {
      nome: "Scrum-jogo-semana-da-biblioteca-2024",
      link: "https://github.com/LYuri26/Scrum-jogo-semana-da-biblioteca-2024",
      descricao: "Jogo de Scrum para a semana da biblioteca.",
      tecnologias: "JavaScript",
      atualizado: "Jun 10, 2024",
    },
    {
      nome: "site-projeto",
      link: "https://github.com/LYuri26/site-projeto",
      descricao: "Site de projeto em HTML e CSS.",
      tecnologias: "HTML, CSS",
      atualizado: "Jun 5, 2024",
    },
    {
      nome: "ProjetoVagasSenai",
      link: "https://github.com/LYuri26/ProjetoVagasSenai",
      descricao: "Sistema de gerenciamento de vagas para o Senai.",
      tecnologias: "PHP",
      atualizado: "Jun 1, 2024",
    },
  ];

  const projetosSection = document.getElementById("projetos");

  projetos.forEach((projeto) => {
    const projetoDiv = document.createElement("div");
    projetoDiv.className = "projeto";
    projetoDiv.innerHTML = `
            <h2><a href="${projeto.link}" target="_blank">${projeto.nome}</a></h2>
            <p>Descrição: ${projeto.descricao}</p>
            <p>Linguagens e Tecnologias: ${projeto.tecnologias}</p>
            <p>Atualizado: ${projeto.atualizado}</p>
        `;
    projetosSection.appendChild(projetoDiv);
  });
});
