-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database ffxiv;

use ffxiv;

create table usuario (
id INT PRIMARY KEY auto_increment, 
nome VARCHAR(45),
apelido VARCHAR(45),
raca VARCHAR(10),
email VARCHAR(50),
senha VARCHAR(20),
classe VARCHAR(10),
dataCenter VARCHAR(30),
fkPersonagens INT,
CONSTRAINT fkPersonagensUsuario FOREIGN KEY (fkPersonagens) 
REFERENCES usuario(id));

create table classes (
id INT PRIMARY KEY auto_increment, 
nome VARCHAR(20),
tipo VARCHAR(10))auto_increment=100;

create table mural (
id INT PRIMARY KEY auto_increment,
titulo VARCHAR(50),
publicacao VARCHAR(500),
descricao VARCHAR(50),
dtPublicacao DATETIME
);