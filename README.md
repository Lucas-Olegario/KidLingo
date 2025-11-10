# 📚 KidLingo - Plataforma de Aprendizado de Idiomas Infantil

## 🌟 Visão Geral do Projeto

[cite_start]**KidLingo** é uma **plataforma de aprendizado de idiomas gratuita e interativa** [cite: 9, 14] [cite_start]projetada especificamente para o público infantil [cite: 1, 14][cite_start], simulando um ambiente de ensino completo[cite: 24, 25]. [cite_start]O projeto aborda a falta de ferramentas educativas de qualidade e acessíveis para crianças [cite: 4, 9][cite_start], focando na **acessibilidade, ludicidade e monitoramento**[cite: 12].

### 🎯 Objetivos

1. [cite_start]Tornar o aprendizado de idiomas mais **acessível, divertido e supervisionado** [cite: 19] para crianças.
2. [cite_start]Despertar a curiosidade e promover a **autonomia** das crianças [cite: 20] [cite_start]através de uma interface vibrante, mascotes e **gamificação**[cite: 20].
3. [cite_start]Permitir que **pais e professores** acompanhem o progresso do aprendizado da criança[cite: 9, 16].
4. [cite_start]Demonstrar a simulação de um sistema de aprendizado online real usando exclusivamente o **desenvolvimento client-side** (HTML, CSS e JavaScript)[cite: 17, 25].

### ✨ Funcionalidades Principais

* [cite_start]**Lições Interativas:** Acesso a lições com **imagens, áudios e quizzes**[cite: 15].
* [cite_start]**Gamificação:** Sistema de **pontuações e recompensas simbólicas** [cite: 15] com base no desempenho.
* [cite_start]**Seleção de Idiomas:** A criança pode escolher o idioma que deseja aprender[cite: 15].
* [cite_start]**Painel de Acompanhamento (Supervisores):** Visualização de **progresso, tempo de estudo total e conquistas** [cite: 16] para pais e professores.

## 🛠️ Tecnologias Utilizadas

[cite_start]Este projeto é uma simulação de um sistema de aprendizado online e foi construído com o objetivo de representar o comportamento de um sistema real utilizando apenas o lado do cliente[cite: 17]. Os arquivos de código indicam o uso das seguintes tecnologias:

* [cite_start]**HTML, CSS e JavaScript:** Utilizados para implementar toda a simulação sem a necessidade de backend ou banco de dados[cite: 17].
* **Node.js/Express:** Utilizado nos arquivos `server.js` e `db.js` para simular um ambiente de servidor e persistência.
* **SQL:** Utilizado no script `KidLingo-BD.sql` para simular a estrutura de um banco de dados relacional.

## 📂 Estrutura de Arquivos

| Arquivo | Descrição |

| `index.html` | Página inicial/login da plataforma. |
| `selecao.html` | Tela onde a criança seleciona o idioma a ser aprendido. |
| `licoes.html` | Página principal de visualização e execução das lições e quizzes. |
| `perfil.html` | Tela de perfil do usuário/criança. |
| `painel-acompanhamento.html` | [cite_start]**Painel para pais e professores** visualizarem o progresso e conquistas[cite: 16]. |
| `script.js` | Lógica principal do lado do cliente, controle de estado, quizzes e gamificação. |
| `server.js` | Simulação de servidor usando Node.js/Express. |
| `db.js` | Módulo usado por `server.js` para simular a lógica de banco de dados e persistência. |
| `KidLingo-BD.sql` | Script SQL que define a estrutura de tabelas da simulação de banco de dados. |
