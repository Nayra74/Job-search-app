import express from 'express'
import { dbconnection } from './Databases/dbconnection.js '
import userRouter from './src/modules/user/user.routes.js';
import companyRouter from './src/modules/company/company.routes.js';
import jobRouter from './src/modules/jobs/jobs.routes.js';
const app = express()
const port = 4001
dbconnection();
app.use(express.json())
app.use(userRouter)
app.use(companyRouter)
app.use(jobRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))