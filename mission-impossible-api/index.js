import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import gadgetRoutes from './src/routes/gadget.route.js'
import errorHandler from './src/middlewares/errorHandler.js';
import prisma from './src/config/db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/gadgets', gadgetRoutes);
app.use(errorHandler);

// Optional DB connection test
(async () => {
  try {
    await prisma.$connect();
    console.log('✅ Connected to DB');
  } catch (err) {
    console.error('❌ DB Connection Error:', err.message);
    process.exit(1);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
