import express from 'express';
import userRoutes from './routes/userRoutes';
import bikeRoutes from './routes/bikeRoutes'; 
import { setupSwagger } from './swagger';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/bikes', bikeRoutes); 

// Setup Swagger UI
setupSwagger(app);

app.get('/', (req, res) => {
  res.send('API działa');
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
  console.log(`Swagger UI dostępny na http://localhost:${port}/api-docs`);
});
