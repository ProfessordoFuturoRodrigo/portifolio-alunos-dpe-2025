/* script.js - lógica para gerar a navegação e listar times/projetos
   Editar o array `classesData` para adicionar/alterar turmas, times e projetos.
*/

const classesData = [
  {
    turma: '1º A',
    teams: [
      { name: 'Livraria Digital', projects: [
        { title: 'Venda de e-books e audiolivros', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Paula','Dhovana','Larissa','Pedro Lucas','Talya'] },
      ]},
      { name: 'Agência de Turismo para PCDs', projects: [
        { title: 'Roteiros acessíveis para pessoas com deficiência', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Cristina','Diêniffer','Helena','Henry','Kayon','Maria Vitória','Thiesa','Victor Ricardo'] }
      ]},
       { name: 'Startup de Economia Circular', projects: [
        { title: 'Reaproveitamento e reciclagem de materiais', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['PROJETO ABANDONADO!'] }
      ] },
       { name: 'Plataforma de Aulas para Surdos e Mudos', projects: [
        { title: 'Educação em Libras', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Emilly Vitória','Heithor','Isabella','Kaique Antôny'] }
      ] },
       { name: 'Empresa de Desenvolvimento de Software', projects: [
        { title: 'Aplicativos web e mobile', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Alexandre','Anny Luiza','Fhaitton','Hevellyn','Lucas Antônio','Luiz Felipe','Matheus'] }
      ] },
       { name: 'E-commerce de Produtos Veganos', projects: [
        { title: 'Alimentação, cosméticos e roupas sem origem animal', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Alencar','Dyêmisson','Estefany'] }
      ] }
    ]
  },
    {
    turma: '1º B',
    teams: [
      { name: 'Site para Ensino de Robótica Educacional', projects: [
        { title: 'Cursos e kits para escolas e estudante', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Karolyna','Evelyn Karolline','Lara','Renan'] }
      ] },
      { name: 'Academia para Pessoas com Deficiência', projects: [
        { title: 'Treinamento adaptado e acessibilidade', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Anna Luiza','Anny Gabrielle','Maria Rita','Nycole','Sofia'] }
      ] },
      { name: 'Aplicativo de Rotinas Saudáveis', projects: [
        { title: 'Exercícios, dieta e hidratação', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['David Wesley','Lucas Felipe','Lucas Gabryel','Wallace'] }
      ] },
      { name: 'Projeto de Alfabetização para Adultos', projects: [
        { title: 'Aulas online para ensino básico', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Luiza','Anny Stefanny','Marcela','Maria Paula','Tauane','Thaylla'] }
      ] },
      { name: 'Startup de Inteligência Artificial', projects: [
        { title: 'Serviços de automação e IA', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Cloves','Felipe','Keven','Rafael','Yusseff Nattan'] }
      ] },
      { name: 'Espaço de Coworking Tecnológico', projects: [
        { title: 'Localização de vagas para startups', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Bárbara','Thania','Warley'] }
      ] },
      { name: 'Loja de Roupas Sustentáveis', projects: [
        { title: 'Moda ecológica e materiais recicláveis', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['PROJETO ABANDONADO!'] }
      ] }
    ]
  },
    {
    turma: '1º C',
    teams: [
      { name: 'Consultoria em Cibersegurança', projects: [
        { title: 'proteção de dados e segurança digital', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Fernando','Luiz Felipe','Vinícius'] }
      ]},
      { name: 'Centro de Reforço Escolar Online', projects: [
        { title: 'apoio em matemática, português e ciências', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Arthur','Erick','Geraldo','Gustavo','Lukas Gabriel','Murilo Max'] }
      ]},
      { name: 'Plataforma de Psicólogos Online', projects: [
        { title: 'atendimento psicológico remoto', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Anna Beatriz','Fillipe Gabriel','Kayky','Thamili'] }
      ]},
      { name: 'Loja de Componentes Eletrônicos', projects: [
        { title: 'venda de placas, sensores e microcontroladores', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Lucas José','Natália','Pedro Henrique'] }
      ]},
      { name: 'Loja de Equipamentos para Fotografia', projects: [
        { title: 'câmeras, acessórios e iluminação', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Amanda'] }
      ]},
      { name: 'Portal de Notícias Comunitárias', projects: [
        { title: 'informações locais e jornalismo independente', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Fellipe','Lucas Lubachevski','Mauricio','Vyctor Augusto','Vytor'] }
      ]},
      { name: 'Loja de Brinquedos Educativos', projects: [
        { title: 'para desenvolvimento infantil', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['João Vitor','Yana'] }
      ]}
    ]
  },
    {
    turma: '2º A',
    teams: [
      { name: 'Empresa de Soluções em IoT (Internet das Coisas)', projects: [
        { title: 'Automação residencial e industrial', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Elcio','Fernanda','Italo Ryan','Marcos','Ysabella'] }
      ]},
      { name: 'Pet Shop Online', projects: [
        { title: 'Produtos e serviços para animais de estimação', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Heitor','Kauã','Marcos Rangel','Sidney'] }
      ]},
      { name: 'Plataforma de Cursos Online', projects: [
        { title: 'EAD para cursos técnicos e profissionalizantes', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Danillo Cristian','Eduardo','José Rodolpho','Kayo Gabryel'] }
      ]},
      { name: 'Biblioteca Digital Comunitária', projects: [
        { title: 'Acesso a livros gratuitos e acessíveis', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Clara','Davi','Izadora','Kawane','Nicolly'] }
      ]},
      { name: 'Clínica de Fisioterapia e Reabilitação', projects: [
        { title: 'Atendimento especializado para idosos e atletas', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Luísa','Daniel','Geovanna Vitória','Tawany'] }
      ]}
    ]
  },
  {
    turma: '2º B',
    teams: [
      { name: 'Plataforma de Bolsas de Estudo', projects: [
        { title: 'Conexão de estudantes com oportunidades acadêmicas', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Danilo','Erycka','Gustavo','Laila Mireli'] }
      ]},
      { name: 'Papelaria Criativa', projects: [
        { title: 'Materiais escolares e personalizados', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Ana Clara','Carlos Eduardo','Luys Felype','Maria Eduarda','Wagner'] }
      ]},
      { name: 'Centro de Terapia Holística', projects: [
        { title: 'Meditação, yoga e acupuntura', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Eduardo Góes','Fernando Felype'] }
      ]},
      { name: 'Agência de Marketing Digital', projects: [
        { title: 'Criação de campanhas, SEO e redes sociais', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Igo','Silver','Tony'] }
      ]},
      { name: 'Escola de Música Inclusiva', projects: [
        { title: 'Ensino de música para pessoas com deficiência', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Elóah','Emilly','Rayanny'] }
      ]}
    ]
  },
    {
    turma: '2º C',
    teams: [
      { name: 'Centro de Estética e Cuidados Pessoais', projects: [
        { title: 'Serviços de beleza e bem-estar', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Carlos Victor','Kaue Henrique','Osmar','Wilkner Felipe'] }
      ]},
      { name: 'Consultoria em Blockchain e Criptomoedas', projects: [
        { title: 'Segurança e investimento em criptografia', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Daniel','Luiz','Pedro Henrique','Reminton','','','',''] }
      ]},
      { name: 'Loja de Cosméticos Naturais', projects: [
        { title: 'Produtos orgânicos e ecológicos', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Gabriela','Kayky','Maria Eduarda','Pabline','Roberta Heloar','Ruan Gabriel'] }
      ]},
      { name: 'Escola de Idiomas para Baixa Renda', projects: [
        { title: 'Aulas gratuitas ou a preços acessíveis', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Divino','Izabelly Maria','Wryel Kaio'] }
      ]},
      { name: 'Mercado de Produtos Orgânicos', projects: [
        { title: 'Hortifrúti e produtos naturais', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Cibele','Jhully Emilly','Sthefany'] }
      ]}
    ]
  },
    {
    turma: '3º A',
    teams: [
      { name: 'Clube de Assinatura de Café Artesanal', projects: [
        { title: 'Envio mensal de cafés especiais', url: 'https://joaoolv25.github.io/Assinatura-de-caf-s-artesanais/', students: ['Carlos Eduardo','João Vitor','Luiz Gustavo','Pablo Pyetro','Samuel'] },
      ]},
      { name: 'Aplicativo de Nutrição Personalizada', projects: [
        { title: 'Planos alimentares baseados no perfil do usuário', url: 'https://annyluz1-2026.github.io/nutrimuscle/', students: ['Anny Gabrielly','Carlos Alexandre','Felipe Gabriel','Kaio Miguel','Maria Eduarda','Pedro Matheus','Yasmim Victória'] }
      ] }
      ,
      { name: 'Escola de Programação para Jovens', projects: [
        { title: 'Ensino de lógica de programação e desenvolvimento', url: 'https://professordofuturorodrigo.github.io/em_constru-o/', students: ['Cauã Fernando','Daniel','Jhonathan','Kayky','Marcela Kaillane'] }
      ] }
    ]
  },
  {
    turma: '3º B',
    teams: [
      { name: 'Desenvolvedora de Games', projects: [
        { title: 'Jogos para mobile, PC e consoles', url: 'https://sthefanebrito.github.io/Projeto-kitty-/', students: ['Carlos Júnior','Felype','Gabriel','Jamilly Vitória','Jean Matheus','Maria Luara','Marjory','Sthefane'] }
      ] }
      ,
      { name: 'Portal de Ensino de Educação Financeira ', projects: [
        { title: 'Conteúdo sobre investimentos e gestão financeira', url: 'https://theus450.github.io/Projeto-EvoCoin/', students: ['Daniel','Hericky','Matheus','Paulo Ricardo','Rayssa Thayná','Yasmim'] }
      ] }
    ]
  }
];

// Elementos
const classNav = document.getElementById('classNav');
const teamsContainer = document.getElementById('teamsContainer');
const turmaSelect = document.getElementById('turmaSelect');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Inicializar navegação e select de turmas
function init() {
  classesData.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.textContent = c.turma;
    btn.dataset.index = i;
    btn.addEventListener('click', () => { selectTurma(i); setActiveBtn(btn); });
    classNav.appendChild(btn);

    const opt = document.createElement('option');
    opt.value = i; opt.textContent = c.turma;
    turmaSelect.appendChild(opt);
  });

  // mostrar todas as turmas por padrão
  renderTeams(classesData);
}

function setActiveBtn(btn){
  Array.from(classNav.children).forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function selectTurma(index){
  renderTeams([classesData[index]]);
  turmaSelect.value = index;
}

function renderTeams(list) {
  teamsContainer.innerHTML = '';
  if (!list || list.length === 0){ teamsContainer.innerHTML = '<p class="card">Nenhuma turma encontrada.</p>'; return; }

  // para cada turma, montar um bloco com seus times
  list.forEach(t => {
    const title = document.createElement('div');
    title.className = 'card';
    title.innerHTML = `<h2>Turma: ${t.turma}</h2>`;
    teamsContainer.appendChild(title);

    t.teams.forEach(team => {
      const teamDiv = document.createElement('article');
      teamDiv.className = 'team';
      teamDiv.innerHTML = `<h3>${team.name}</h3>`;

      const ul = document.createElement('ul');
      ul.className = 'project-list';
      team.projects.forEach(p => {
        const li = document.createElement('li');
        li.className = 'project';
        const linkText = p.url ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>` : `<span>${p.title} <em>(Em desenvolvimento)</em></span>`;
        li.innerHTML = `${linkText}<div class="meta">Autores: ${p.students.join(', ')}</div>`;
        // mostrar detalhes em modal ao clicar em qualquer lugar do projeto
        li.addEventListener('click', () => showProjectModal(p, team.name, t.turma));
        ul.appendChild(li);
      });

      teamDiv.appendChild(ul);
      teamsContainer.appendChild(teamDiv);
    });
  });
}

function showProjectModal(project, teamName, turma){
  modalBody.innerHTML = `<h3>${project.title}</h3>
    <p><strong>Turma:</strong> ${turma} — <strong>Time:</strong> ${teamName}</p>
    <p><strong>Autores:</strong> ${project.students.join(', ')}</p>
    <p><strong>Link:</strong> ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener">Abrir projeto</a>` : 'Em desenvolvimento'}</p>`;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', ()=> modal.classList.add('hidden'));
modal.addEventListener('click', (e)=>{ if (e.target === modal) modal.classList.add('hidden'); });

// Busca simples
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { renderTeams(classesDataFilteredBySelect()); return; }
  const results = [];
  classesData.forEach(c => {
    const teams = [];
    c.teams.forEach(team => {
      const projects = team.projects.filter(p => {
        return p.title.toLowerCase().includes(q) || p.students.join(' ').toLowerCase().includes(q) || team.name.toLowerCase().includes(q);
      });
      if (projects.length) teams.push({ name: team.name, projects });
    });
    if (teams.length) results.push({ turma: c.turma, teams });
  });
  renderTeams(results);
});

// Filtrar por select
turmaSelect.addEventListener('change', ()=>{
  const v = turmaSelect.value;
  if (v === '') { renderTeams(classesData); Array.from(classNav.children).forEach(b=>b.classList.remove('active')); return; }
  renderTeams([classesData[v]]);
  // marcar botão correspondente
  const btn = Array.from(classNav.children).find(b=>b.dataset.index===String(v));
  if (btn) setActiveBtn(btn);
});

function classesDataFilteredBySelect(){
  const v = turmaSelect.value;
  return v === '' ? classesData : [classesData[v]];
}

// inicializar
init();

/*
Como personalizar:
- Edite o array `classesData` acima para incluir todas as turmas (1º A ... 3º B) e os times.
- Para cada projeto, preencha a URL quando o aluno publicar o site (p. ex. GitHub Pages, Netlify, Vercel ou pasta no servidor da escola).
- A página principal (index.html) já contém a apresentação do professor e as instruções.

Sugestões de publicação dos projetos dos alunos:
- GitHub Pages (cada aluno cria um repositório com página pública)
- Netlify / Vercel - deploys gratuitos de sites estáticos
- Pastas públicas no servidor da escola: https://escola.edu.br/projetos/aluno

Organização de arquivos:
- Coloque index.html, styles.css e script.js na mesma pasta (por exemplo `portfolio/`) e abra `index.html` no navegador.

*/








