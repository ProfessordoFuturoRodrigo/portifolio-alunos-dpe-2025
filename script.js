/* script.js — versão limpa e corrigida
   - Lê dados de dados_grupos.txt ou dados_individuais.txt (dependendo da página)
   - Constrói estrutura consistente: array de turmas [{turma, teams:[{name, projects:[{title,url,students[]}]}]}]
   - Renderiza navegação, lista de projetos, busca, filtro, modal, tooltips das logos e botão toggle
   - Atenção: para testes locais use um servidor HTTP (ex.: python -m http.server)
*/

(() => {
  'use strict';

  /* ---------- elementos do DOM ---------- */
  const classNav = document.getElementById('classNav');
  const teamsContainer = document.getElementById('teamsContainer');
  const turmaSelect = document.getElementById('turmaSelect');
  const searchInput = document.getElementById('searchInput');
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  const logoItems = document.querySelectorAll('.logo-item');
  const logoDesc = document.getElementById('logoDesc');

  const toggleProjects = document.getElementById('toggleProjects');

  /* ---------- qual arquivo de dados usar ---------- */
  const dataFile = window.location.pathname.includes('alunos.html')
    ? 'dados_individuais.txt'
    : 'dados_grupos.txt';

  /* ---------- utilitários ---------- */
  function safeSplit(line, sep = '|') {
    // evita split quando linha vazia
    return line.split(sep).map(s => s.trim());
  }

  function normalizeUrl(url) {
    if (!url || url === '#' || url.toLowerCase() === 'null') return '';
    return url;
  }

  function parseStudentsField(field) {
    if (!field) return [];
    // se campo for "PROJETO ABANDONADO!" manter literal
    if (field.trim().toUpperCase().includes('PROJETO')) return [field.trim()];
    return field.split(',').map(s => s.trim()).filter(Boolean);
  }

  /* ---------- carregar e converter dados do .txt ---------- */
  async function carregarDados() {
    try {
      const res = await fetch(dataFile, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const txt = await res.text();
      const linhas = txt.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);

      // converter para estrutura: [{turma, teams:[{name, projects:[{title,url,students[]}]}]}]
      const mapaTurmas = new Map();

      linhas.forEach((linha, idx) => {
        // Ignorar linhas comentadas (# ou //)
        if (linha.startsWith('#') || linha.startsWith('//')) return;

        const parts = safeSplit(linha, '|');
        if (parts.length < 4) {
          console.warn(`Linha ${idx + 1} ignorada (formato inválido):`, linha);
          return;
        }

        // Alguns arquivos (dados_individuais.txt) podem ter apenas 4 campos (sem lista de alunos)
        const turma = parts[0] || 'Sem Turma';
        const team = parts[1] || 'Sem Time';
        const title = parts[2] || 'Sem Título';
        const url = normalizeUrl(parts[3] || '');
        const alunosField = parts[4] || ''; // pode estar vazio

        const students = parseStudentsField(alunosField);

        if (!mapaTurmas.has(turma)) mapaTurmas.set(turma, new Map());
        const mapaTimes = mapaTurmas.get(turma);
        if (!mapaTimes.has(team)) mapaTimes.set(team, []);
        mapaTimes.get(team).push({ title, url, students });
      });

      // transformar para array
      const classesData = Array.from(mapaTurmas.entries()).map(([turma, mapaTimes]) => {
        return {
          turma,
          teams: Array.from(mapaTimes.entries()).map(([name, projects]) => ({ name, projects }))
        };
      });

      return classesData;
    } catch (err) {
      console.error('Erro ao carregar dados do arquivo:', err);
      throw err;
    }
  }

  /* ---------- renderização ---------- */
  function renderClassNav(classesData) {
    if (!classNav) return;
    classNav.innerHTML = '';
    classesData.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.textContent = c.turma;
      btn.type = 'button';
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        renderTeams([classesData[i]]);
        setActiveBtn(btn);
        turmaSelect.value = i;
      });
      classNav.appendChild(btn);
    });
  }

  function populateTurmaSelect(classesData) {
    if (!turmaSelect) return;
    turmaSelect.innerHTML = '<option value="">Todas as turmas</option>';
    classesData.forEach((c, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = c.turma;
      turmaSelect.appendChild(opt);
    });
  }

  function setActiveBtn(btn) {
    if (!classNav) return;
    Array.from(classNav.children).forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  }

  function renderTeams(list) {
    if (!teamsContainer) return;
    teamsContainer.innerHTML = '';
    if (!list || list.length === 0) {
      teamsContainer.innerHTML = '<p class="card">Nenhuma turma encontrada.</p>';
      return;
    }

    list.forEach(t => {
      const title = document.createElement('div');
      title.className = 'card';
      title.innerHTML = `<h2>Turma: ${escapeHtml(t.turma)}</h2>`;
      teamsContainer.appendChild(title);

      t.teams.forEach(team => {
        const teamDiv = document.createElement('article');
        teamDiv.className = 'team';
        teamDiv.innerHTML = `<h3>${escapeHtml(team.name)}</h3>`;

        const ul = document.createElement('ul');
        ul.className = 'project-list';

        team.projects.forEach(p => {
          const li = document.createElement('li');
          li.className = 'project';

          const safeUrl = p.url ? p.url : '';
          const linkText = safeUrl
            ? `<a href="${escapeAttr(safeUrl)}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a>`
            : `<span>${escapeHtml(p.title)} <em>(Em desenvolvimento)</em></span>`;

          const authors = (p.students && p.students.length) ? p.students.join(', ') : 'Sem autores informados';
          li.innerHTML = `${linkText}<div class="meta">Autores: ${escapeHtml(authors)}</div>`;

          li.addEventListener('click', () => showProjectModal(p, team.name, t.turma));
          ul.appendChild(li);
        });

        teamDiv.appendChild(ul);
        teamsContainer.appendChild(teamDiv);
      });
    });
  }

  function showProjectModal(project, teamName, turma) {
    if (!modalBody || !modal) return;
    const authors = (project.students && project.students.length) ? project.students.join(', ') : 'Sem autores informados';
    modalBody.innerHTML = `<h3>${escapeHtml(project.title)}</h3>
      <p><strong>Turma:</strong> ${escapeHtml(turma)} — <strong>Time:</strong> ${escapeHtml(teamName)}</p>
      <p><strong>Autores:</strong> ${escapeHtml(authors)}</p>
      <p><strong>Link:</strong> ${project.url ? `<a href="${escapeAttr(project.url)}" target="_blank" rel="noopener">Abrir projeto</a>` : 'Em desenvolvimento'}</p>`;
    modal.classList.remove('hidden');
  }

  /* ---------- busca e filtro ---------- */
  function attachSearchAndFilter(classesData) {
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) { renderTeams(classesDataFilteredBySelect(classesData)); return; }
        const results = [];

        classesData.forEach(c => {
          const teams = [];
          c.teams.forEach(team => {
            const projects = team.projects.filter(p => {
              const title = (p.title || '').toLowerCase();
              const students = (p.students || []).join(' ').toLowerCase();
              const teamName = (team.name || '').toLowerCase();
              return title.includes(q) || students.includes(q) || teamName.includes(q);
            });
            if (projects.length) teams.push({ name: team.name, projects });
          });
          if (teams.length) results.push({ turma: c.turma, teams });
        });

        renderTeams(results);
      });
    }

    if (turmaSelect) {
      turmaSelect.addEventListener('change', () => {
        const v = turmaSelect.value;
        if (v === '') {
          renderTeams(classesData);
          Array.from(classNav.children).forEach(b => b.classList.remove('active'));
          return;
        }
        const idx = Number(v);
        if (!Number.isNaN(idx) && classesData[idx]) {
          renderTeams([classesData[idx]]);
          const btn = Array.from(classNav.children).find(b => b.dataset.index === String(idx));
          if (btn) setActiveBtn(btn);
        }
      });
    }

    function classesDataFilteredBySelect(data) {
      const v = turmaSelect ? turmaSelect.value : '';
      return v === '' ? data : [data[Number(v)]];
    }
  }

  /* ---------- logo tooltips ---------- */
  function attachLogoHover() {
    if (!logoItems || !logoDesc) return;
    logoItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const txt = item.dataset.desc || '';
        logoDesc.textContent = txt;
        logoDesc.classList.add('show');
      });
      item.addEventListener('mouseleave', () => {
        logoDesc.classList.remove('show');
      });
    });
  }

  /* ---------- modal close handlers ---------- */
  function attachModalHandlers() {
    if (!closeModal || !modal) return;
    closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
  }

  /* ---------- toggle entre páginas ---------- */
  function attachToggleButton() {
    if (!toggleProjects) return;
    toggleProjects.addEventListener('click', () => {
      const currentPage = window.location.pathname;
      if (currentPage.includes('alunos.html')) {
        window.location.href = 'index.html';
      } else {
        window.location.href = 'alunos.html';
      }
    });
  }

  /* ---------- escape helpers - evitar injeção simples ---------- */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function escapeAttr(str) {
    if (!str) return '';
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------- inicialização principal ---------- */
  async function start() {
    try {
      const classesData = await carregarDados();
      if (!classesData || classesData.length === 0) {
        teamsContainer.innerHTML = '<p class="card">Nenhum projeto encontrado no arquivo de dados.</p>';
        return;
      }

      // renderizar
      renderClassNav(classesData);
      populateTurmaSelect(classesData);
      renderTeams(classesData); // todas as turmas
      attachSearchAndFilter(classesData);
      attachLogoHover();
      attachModalHandlers();
      attachToggleButton();
    } catch (err) {
      // Exibir mensagem amigável para o professor
      teamsContainer.innerHTML = `<p class="card">Não foi possível carregar os projetos. Verifique se o arquivo <code>${dataFile}</code> existe, está na mesma pasta e está sendo servido por HTTP (não via file://). Erro: ${escapeHtml(String(err.message || err))}</p>`;
    }
  }

  /* ---------- iniciar após DOM pronto ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

})();
