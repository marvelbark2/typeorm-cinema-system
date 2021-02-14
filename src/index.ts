import app from './app';
import 'reflect-metadata';
const PORT = 3000;
app.listen(PORT, () => {
  console.info('Express server listening on http://localhost:3000');
});