use positicekids;

----------------------Table musee----------------------

INSERT INTO `musee` (`id_musee`, `nom_musee`, `adresse`, `ville`, `code_postal`, `horaires`, `tarif_reduit`, `tarif_plein`) VALUES
(1, 'Musée Würth', 'ZI OUEST, Rue Georges Besse', 'Erstein', 67150, '10:00 - 18:00', 0, 0),
(2, 'MAMCS', '1 Place Hans-Jean-Arp', 'Strasbourg', 67000, '10:00 - 18:00', 6, 12),
(3, 'Musée Tomi Ungerer : centre d\'iluustrration européen', '2 Avenue de la Marseillaise', 'Strasbourg', 67000, '10:00 - 18:00', 6, 12),
(4, 'Musée des Beaux-Arts', '4 Place Guillaume Tell', 'Mulhouse', 68100, '11:00 - 18:00', 3, 10),
(5, 'Musée Unterlinden', '1 Rue des Unterlinden', 'Colmar', 68000, '11:00 - 19:00', 7, 14),
(6, 'Musée d\'Histoire Naturelle et d\'Ethnographie', '11 Rue Turenne', 'Colmar', 68000, '11:00 - 18:00', 5, 12),
(7, 'Musée de l\'œuvre Notre-Dame', '3 Place du Château', 'Strasbourg', 67000, '10:00 - 18:00', 8, 13),
(8, 'Écomusée d\'Alsace', 'Chemin du Grosswald', 'Ungersheim', 68190, '9:00 - 19:00', 5, 10);

----------------------Table theme----------------------

INSERT INTO `theme` (`id_theme`, `nom_theme`) VALUES
(1, 'Histoire de l\'art'),
(2, 'Histoire'),
(3, 'Sciences'),
(4, 'Patrimoine'),
(5, 'Loisir');

----------------------Table exposition----------------------

INSERT INTO `exposition` (`id_exposition`, `nom_exposition`, `date_debut`, `date_fin`, `tarif`, `tranche_age`, `id_musee`, `id_theme`) VALUES
(1, 'Christo et Jeanne-Claude', DATE('2020-07-22'), DATE('2021-10-20'), 0, NULL, 1, 1),
(2, 'L\'œil de Huysmans : Manet, Degas, Moreau', DATE('2020-10-02'), DATE('2021-01-17'), 0, NULL, 2, 1),
(3, 'Mon zoo à moi : Les animaux de Tomi', DATE('2020-12-03'), DATE('2021-08-21'), 18, '7/12 ans', 3, 5),
(4, 'La grande NANA : Niki de St Phalle', DATE('2021-01-14'), DATE('2021-03-20'), 18, '4/6 ans', 2, 1),
(5, 'Couleurs comtes', DATE('2020-10-05'), DATE('2021-02-15'), 0, '7/12 ans', 4, 5),
(6, 'Colmar au fil du temps', DATE('2020-05-10'), DATE('2020-12-12'), 0, '12/+ ans', 5, 2),
(7, 'Le grand hérisson d\'Alsace, mon ami', DATE('2020-05-03'), DATE('2021-01-19'), 6, '4/12 ans', 6, 3),
(8, 'L\'horloge astronomique, où est la trotteuse ?', DATE('2020-12-19'), DATE('2021-06-20'), 5, '4/6 ans', 7, 3),
(9, 'Astrologie - astronomie', DATE('2020-12-20'), DATE('2021-06-21'), 5, '7/12 ans', 7, 3),
(10, 'L\'Alsace sous colombage', DATE('2020-04-04'), DATE('2021-05-04'), 7, '7/12 ans', 8, 4);
