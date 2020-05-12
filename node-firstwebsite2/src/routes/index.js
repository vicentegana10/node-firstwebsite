const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Primer sitio con JS y Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Página de Contacto' });
});

module.exports = router;
