import express from 'express';
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';

const app = express();

const server = app.listen(8080, () => {
    console.log('Server is running on port 8080');
    });



app.use(express.static('public'));

app.use(express.json());

app.use('/users', usersRouter);

app.use('/products', productsRouter);