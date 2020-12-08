DROP DATABASE IF EXISTS positicekids;
CREATE DATABASE IF NOT EXISTS positicekids;
USE positicekids;

CREATE USER IF NOT EXISTS 'rootSQL'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON positicekids . * TO 'rootSQL'@'%';

CREATE TABLE `musee` (`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `nom` varchar(50) DEFAULT NULL,
    `adresse` varchar(100) DEFAULT NULL,
    `ville` varchar(20) DEFAULT NULL,
    `code_postal` int(5) DEFAULT NULL,
    `horaires` varchar(11) DEFAULT NULL,
    `tarif_reduit` float DEFAULT NULL,
    `tarif_plein` float DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id` (`id`));


CREATE TABLE `theme` (`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `nom` varchar(50) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id` (`id`));


CREATE TABLE `exposition` (`id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `nom` varchar(100) DEFAULT NULL,
    `date_debut` datetime DEFAULT NULL,
    `date_fin` datetime DEFAULT NULL,
    `tarif` float DEFAULT NULL,
    `tranche_age` varchar(7) DEFAULT NULL,
    `musee_id` bigint(20) unsigned DEFAULT NULL,
    `theme_id` bigint(20) unsigned DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `id` (`id`),
    KEY `lieu_id` (`musee_id`),
    KEY `theme_id` (`theme_id`),
    CONSTRAINT `fk_exposition_musee`
        FOREIGN KEY (`musee_id`)
        REFERENCES `musee` (`id`),
    CONSTRAINT `fk_exposition_theme`
        FOREIGN KEY (`theme_id`)
        REFERENCES `theme` (`id`));
