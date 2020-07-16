import swaggerUi from 'swagger-ui-express';
import PromiseRouter from 'express-promise-router';

import swaggerDocument from 'modules/swagger';

const router = PromiseRouter();

// To display the documentation (UI)
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// For external tools to access the API schema / documentation
router.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocument);
});

export default router;
