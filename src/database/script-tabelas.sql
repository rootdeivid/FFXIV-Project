create database ffxiv;
use ffxiv;
SELECT * FROM usuario;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(45),
    raca VARCHAR(10),
    email VARCHAR(50),
    senha VARCHAR(20),
    classe VARCHAR(45),
    dataCenter VARCHAR(30),
    fk_classe INT,
    CONSTRAINT fkClasseUsuario FOREIGN KEY (fk_classe) REFERENCES classes(id)
);

create table mural (
id INT PRIMARY KEY auto_increment,
titulo VARCHAR(50),
descricao VARCHAR(50),
dtPublicacao DATETIME,
fk_usuario INT,
CONSTRAINT fkPubliUsuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SELECT 
        raca as raca, 
        count(raca) as quantidade
                    FROM usuario
                    GROUP BY raca ORDER BY id DESC LIMIT 7;

INSERT INTO usuario(nome, raca, email, senha, classe, dataCenter) VALUES 
('Luis', 'Hyur', 'luis@email.com', 'senha1234', 'Mago', 'Norte America'),                    
('Luis Gomes', 'Miqote', 'luisparaiso@email.com', 'senha1234', 'Monge', 'Oceania'),                    
('Jose', 'Aura', 'jose@email.com', 'senha1234', 'Bardo', 'Norte America'),                    
('Matheus', 'Elezen', 'matheus@email.com', 'senha1234', 'Ladino', 'Norte America'),                    
('Deivid', 'Aura', 'deivid@email.com', 'senha1234', 'Samurai', 'Norte America'),                    
('Nathalia', 'Miqote', 'nath@email.com', 'senha1234', 'Mago', 'Norte America');

CREATE TABLE classes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    tipo VARCHAR(10),
    forca INT,
    destreza INT,
    vitalidade INT,
    inteligencia INT
) AUTO_INCREMENT = 100;

INSERT INTO classes (nome, tipo, forca, destreza, vitalidade, inteligencia) VALUES
('Paladino', 'Tank', 390, 390, 450, 200),
('Guerreiro', 'Tank', 400, 390, 450, 200),
('Cavaleiro Negro', 'Tank', 390, 390, 450, 250),
('Gunbreaker', 'Tank', 390, 400, 450, 200),
('Curandeiro Branco', 'Healer', 200, 390, 390, 390),
('Erudito', 'Healer', 200, 390, 390, 400),
('Astrologian', 'Healer', 200, 390, 390, 390),
('Sage', 'Healer', 200, 390, 390, 400),
('Monge', 'Melee', 400, 450, 390, 200),
('Dragoon', 'Melee', 450, 400, 390, 200),
('Ladino', 'Melee', 390, 450, 390, 200),
('Samurai', 'Melee', 450, 400, 390, 200),
('Reaper', 'Melee', 400, 450, 390, 200),
('Bardo', 'Ranged', 200, 450, 390, 200),
('Machinginist', 'Ranged', 200, 450, 390, 200),
('Dancer', 'Ranged', 200, 450, 390, 200),
('Mago', 'Magico', 200, 390, 390, 450),
('Invocador', 'Magico', 200, 390, 390, 450),
('Red Mage', 'Magico', 200, 390, 390, 450),
('Blue Mage', 'Magico', 200, 390, 390, 450);

UPDATE usuario SET fk_classe = 116 WHERE classe = 'Mago'; 
UPDATE usuario SET fk_classe = 108 WHERE classe = 'Monge'; 
UPDATE usuario SET fk_classe = 113 WHERE classe = 'Bardo'; 
UPDATE usuario SET fk_classe = 110 WHERE classe = 'Ninja'; 
UPDATE usuario SET fk_classe = 111 WHERE classe = 'Samurai'; 
UPDATE usuario SET fk_classe = 116 WHERE classe = 'Mago Negro'; 

SELECT u.nome, u.classe, c.id as fk_classe, c.nome as nome_classe
FROM usuario u
LEFT JOIN classes c ON u.fk_classe = c.id;

SELECT u.id, u.classe, u.fk_classe, c.nome FROM usuario u JOIN classes c ON u.fk_classe = c.id;

SELECT u.id, c.forca, c.destreza, c.vitalidade, c.inteligencia FROM classes c JOIN usuario u ON u.fk_classe = c.id 
WHERE c.nome = u.classe AND u.id = 6;
