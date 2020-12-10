const express = require('express');
const museeRoutes = require('./routes/museee');
const themeRoutes = require('./routes/theme');
const expositionRoutes = require('./routes/exposition');

const app = express();

// Va rendre les informations exploitables
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // A changer avec les variables d'environnement
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes de l'application
app.use('/api/musee', museeRoutes);
app.use('/api/exposition', expositionRoutes);
app.use('/api/theme', themeRoutes);

module.exports = app;
