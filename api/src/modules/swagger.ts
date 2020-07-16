import swaggerJSDoc from 'swagger-jsdoc';

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Audio Waveform API',
      version: '1.0.0',
      description: 'API for Audio WAveform API app',
    },
  },
  // Path to the API docs
  apis: ['src/routers/**/*.ts'],
});

export default swaggerSpec;
