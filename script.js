/* script.js - lógica para gerar a navegação e listar times/projetos
   Editar o array `classesData` para adicionar/alterar turmas, times e projetos.
*/

const classesData = [
  {
    turma: '1º A',
    teams: [
      { name: 'Time Alpha', projects: [
        { title: 'Site Institucional - Escola', url: 'https://example.com/aluno1', students: ['Ana Silva','Bruno'] },
        { title: 'Jogo da Velha (JS)', url: '', students: ['Carlos'] }
      ]},
      { name: 'Time Beta', projects: [
        { title: 'Portfólio Pessoal', url: 'https://example.com/aluno2', students: ['Daniela','Eduardo'] }
      ] }
    ]
  },
    {
    turma: '1º B',
    teams: [
      { name: 'Time Alpha', projects: [
        { title: 'Site Institucional - Escola', url: 'https://example.com/aluno1', students: ['Ana Silva','Bruno'] },
        { title: 'Jogo da Velha (JS)', url: '', students: ['Carlos'] }
      ]},
      { name: 'Time Beta', projects: [
        { title: 'Portfólio Pessoal', url: 'https://example.com/aluno2', students: ['Daniela','Eduardo'] }
      ] }
    ]
  },
    {
    turma: '1º C',
    teams: [
      { name: 'Time Alpha', projects: [
        { title: 'Site Institucional - Escola', url: 'https://example.com/aluno1', students: ['Ana Silva','Bruno'] },
        { title: 'Jogo da Velha (JS)', url: '', students: ['Carlos'] }
      ]},
      { name: 'Time Beta', projects: [
        { title: 'Portfólio Pessoal', url: 'https://example.com/aluno2', students: ['Daniela','Eduardo'] }
      ] }
    ]
  },
    {
    turma: '2º A',
    teams: [
      { name: 'Time Alpha', projects: [
        { title: 'Site Institucional - Escola', url: 'https://example.com/aluno1', students: ['Ana Silva','Bruno'] },
        { title: 'Jogo da Velha (JS)', url: '', students: ['Carlos'] }
      ]},
      { name: 'Time Beta', projects: [
        { title: 'Portfólio Pessoal', url: 'https://example.com/aluno2', students: ['Daniela','Eduardo'] }
      ] }
    ]
  },
  {
    turma: '2º B',
    teams: [
      { name: 'Time CTF', projects: [
        { title: 'Mini-CTF (apresentação)', url: '', students: ['Fábio','Gustavo'] }
      ] }
    ]
  },
    {
    turma: '2º C',
    teams: [
      { name: 'Time Alpha', projects: [
        { title: 'Site Institucional - Escola', url: 'https://example.com/aluno1', students: ['Ana Silva','Bruno'] },
        { title: 'Jogo da Velha (JS)', url: '', students: ['Carlos'] }
      ]},
      { name: 'Time Beta', projects: [
        { title: 'Portfólio Pessoal', url: 'https://example.com/aluno2', students: ['Daniela','Eduardo'] }
      ] }
    ]
  },
    {
    turma: '3º A',
    teams: [
      { name: 'Clube de Assinatura de Café Artesanal', projects: [
        { title: 'Envio mensal de cafés especiais', url: 'https://example.com/aluno1', students: ['Carlos Eduardo','João Vitor','Luiz Gustavo','Pablo Pyetro','Samuel'] },
      ]},
      { name: 'Aplicativo de Nutrição Personalizada', projects: [
        { title: 'Planos alimentares baseados no perfil do usuário', url: 'https://example.com/aluno2', students: ['Anny Gabrielly','Carlos Alexandre','Felipe Gabriel','Kaio Miguel','Maria Eduarda','Pedro Matheus','Yasmim Victória'] }
      ] }
      ,
      { name: 'Escola de Programação para Jovens', projects: [
        { title: 'Ensino de lógica de programação e desenvolvimento', url: 'https://example.com/aluno3', students: ['Cauã Fernando','Daniel','Jhonathan','Kayky','Marcela Kaillane'] }
      ] }
    ]
  },
  {
    turma: '3º B',
    teams: [
      { name: 'Desenvolvedora de Games', projects: [
        { title: 'Jogos para mobile, PC e consoles', url: 'https://example.com/jardim', students: ['Carlos Júnior','Felype','Gabriel','Jamilly Vitória','Jean Matheus','Maria Luara','Marjory','Sthefane'] }
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