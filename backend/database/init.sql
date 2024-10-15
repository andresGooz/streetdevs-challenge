-- Crear esquema si no existe
CREATE DATABASE IF NOT EXISTS nodejs;

-- Seleccionar la base de datos
USE nodejs;

-- Crear la tabla 'post' si no existe
CREATE TABLE IF NOT EXISTS post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);
