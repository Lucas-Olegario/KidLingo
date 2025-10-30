CREATE DATABASE kidlingo;
USE kidlingo;

CREATE TABLE licoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idioma VARCHAR(50),
  titulo VARCHAR(100),
  conteudo TEXT,
  exemplo TEXT,
  imagem VARCHAR(255)
);

INSERT INTO licoes (idioma, titulo, conteudo, exemplo, imagem)
VALUES
('Inglês', 'Saudações', 'Aprenda a dizer olá e se apresentar.', 'Hello! My name is...', 'img/hello.png'),
('Espanhol', 'Cores Básicas', 'Aprenda as cores em espanhol.', 'Rojo = Vermelho', 'img/cores.png');
