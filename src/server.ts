import app from './app';
import config from './app/config';


const startServer = async () => {
  try {
 
    app.listen(config.port || 3000, () => {
      console.log(`Server running on port: ${config.port || 3000}`);
    });
  } catch (error) {
  
    console.error('Error starting server:', error);
  }
};

startServer();
