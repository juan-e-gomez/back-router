import { Router } from 'express';

const router = Router();

const products = [];

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:uid', (req, res) => {
    let uid = req.params.uid;
    let product = products.find(p => p.uid === uid);
    if(!product) return res.status(404).send({status:'error', message:'Product not found'});
    res.send(product);

})

router.post('/', (req, res) => {
    if(!product.name) return res.status(400).send({status:'error', message:'Product name is required'});
    if(!product.price) return res.status(400).send({status:'error', message:'Product price is required'});
    if(!product.description) return res.status(400).send({status:'error', message:'Product description is required'});
    let uid = products.length + 1;
    let product = {
        id: uid,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    products.push(product);
    res.send(product);
})


router.put('/:uid', (req, res) => {
    let uid = req.params.uid;
    let product = products.find(p => p.uid === uid);
    if(!product) return res.status(404).send({status:'error', message:'Product not found'});
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    res.send(product);
})

router.delete('/:uid', (req, res) => {
    let uid = req.params.uid;
    let product = products.find(p => p.uid === uid);
    if(!product) return res.status(404).send({status:'error', message:'Product not found'});
    let index = products.indexOf(product);
    products.splice(index,1);
    res.send(product);
})



export default router;