// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------
    // 1. Gerenciamento de Pontuação no Cabeçalho
    // ---------------------------------------------

    // Inicializa ou carrega a pontuação
    let points = localStorage.getItem('kidlingoPoints');
    if (!points) {
        points = 0; // Pontuação inicial padrão
        localStorage.setItem('kidlingoPoints', points);
    }
    
    // Atualiza o display de pontuação no cabeçalho
    const pointsBadge = document.querySelector('.points-badge');
    if (pointsBadge) {
        // Atualiza o texto que exibe a pontuação (ex: 125)
        pointsBadge.childNodes[0].nodeValue = points + ' '; 
    }

    // ---------------------------------------------
    // 2. Funcionalidade da Tela de Seleção (selecao.html)
    // ---------------------------------------------
    if (document.getElementById('select-language-screen')) {
        document.querySelectorAll('.card-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedLanguage = event.currentTarget.getAttribute('data-language');
                
                // Salva o idioma escolhido no localStorage
                localStorage.setItem('kidlingoLanguage', selectedLanguage);
                
                // Redireciona para a tela de lições simulada
                window.location.href = 'licoes.html';
            });
        });
    }


});

// ---------------------------------------------
// 3. Funcionalidade da Tela de Lições (licoes.html)
// ---------------------------------------------
if (document.getElementById("lessons-screen")) {
  const selectedLanguage = localStorage.getItem("kidlingoLanguage") || "Inglês";
  document.getElementById("lesson-title").textContent = `Lições de ${selectedLanguage}`;

  // Busca as lições do banco
  fetch(`http://localhost:3000/licoes/${selectedLanguage}`)
    .then(res => res.json())
    .then(licoes => {
      const container = document.getElementById("lesson-content");
      container.innerHTML = "";

      if (licoes.length === 0) {
        container.innerHTML = "<p>Nenhuma lição encontrada para este idioma.</p>";
        return;
      }

      licoes.forEach(licao => {
        container.innerHTML += `
          <div class="lesson-box">
            <h3>${licao.titulo}</h3>
            <p>${licao.conteudo}</p>
            <p><strong>Exemplo:</strong> ${licao.exemplo}</p>
            <img src="${licao.imagem}" alt="${licao.titulo}" style="width:100px;">
          </div>
        `;
      });
    })
    .catch(err => console.error("Erro ao carregar lições:", err));
}
