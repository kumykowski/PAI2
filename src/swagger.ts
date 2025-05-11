import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

/**
 * Loads the Swagger YAML file from the root directory
 */
const loadSwaggerYaml = (): any => {
  try {
    const filePath = path.resolve(process.cwd(), 'swagger.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch (error) {
    console.error('Error loading swagger.yaml:', error);
    return {};
  }
};

/**
 * Configures Swagger UI for the Express application
 */
export const setupSwagger = (app: Express): void => {
  // Load the Swagger YAML file
  const swaggerDocument = loadSwaggerYaml();

  // Configure Swagger UI
  const options = {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  // Serve Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
}; 