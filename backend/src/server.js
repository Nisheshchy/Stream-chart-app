import express from 'express'
import "dotenv/config"

import authRoutes from './routes/auth.route.js'



const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


app.use("/api/auth", authRoutes);