DROP DATABASE IF EXISTS positicekids;
CREATE DATABASE IF NOT EXISTS positicekids;
USE positicekids;

CREATE USER IF NOT EXISTS 'rootSQL'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON positicekids . * TO 'rootSQL'@'%';

----------------------Table musee----------------------

CREATE TABLE `musee` (
    `id_musee` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `nom` varchar(150) DEFAULT NULL,
    `adresse` varchar(150) DEFAULT NULL,
    `ville` varchar(60) DEFAULT NULL,
    `code_postal` int(5) DEFAULT NULL,
    `horaires` varchar(13) DEFAULT NULL,
    `tarif_reduit` float DEFAULT NULL,
    `tarif_plein` float DEFAULT NULL,
    PRIMARY KEY (`id_musee`)
)
Engine = INNODB;

----------------------Table theme----------------------

CREATE TABLE `theme` (
    `id_theme` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `nom` varchar(50) DEFAULT NULL,
    PRIMARY KEY (`id_theme`)
)
Engine = INNODB;

----------------------Table exposition----------------------

CREATE TABLE `exposition` (
    `id_exposition` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `nom` varchar(100) DEFAULT NULL,
    `date_debut` DATE DEFAULT NULL,
    `date_fin` DATE DEFAULT NULL,
    `tarif` float DEFAULT NULL,
    `tranche_age` varchar(9) DEFAULT NULL,
    `id_musee` bigint(20) unsigned DEFAULT NULL,
    `id_theme` bigint(20) unsigned DEFAULT NULL,
    PRIMARY KEY (`id_exposition`),
    CONSTRAINT `fk_exposition_musee`
        FOREIGN KEY (`id_musee`)
        REFERENCES `musee` (`id_musee`),
    CONSTRAINT `fk_exposition_theme`
        FOREIGN KEY (`id_theme`)
        REFERENCES `theme` (`id_theme`)
)
Engine = INNODB;
