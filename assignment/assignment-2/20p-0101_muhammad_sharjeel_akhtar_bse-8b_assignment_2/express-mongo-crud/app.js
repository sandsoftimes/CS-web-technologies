const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Your MongoDB URI
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('your_database_name'); // Replace 'your_database_name' with your actual database name
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
}

async function setupDatabase() {
    // Invoke the function to connect to the database
    const db = await connectToDatabase();

    app.post('/products', async (req, res) => {
        try {
            const product = req.body;
            const result = await db.collection('products').insertOne(product);
            res.json(result.ops[0]);
        } catch (err) {
            console.error('Error creating product:', err);
            res.status(500).json({ error: 'Failed to create product' });
        }
    });

    app.get('/products', async (req, res) => {
        try {
            const products = await db.collection('products').find({}).toArray();
            res.json(products);
        } catch (err) {
            console.error('Error fetching products:', err);
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    });

    app.put('/products/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const updatedProduct = req.body;
            const result = await db.collection('products').updateOne({ _id: id }, { $set: updatedProduct });
            res.json({ message: 'Product updated successfully' });
        } catch (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ error: 'Failed to update product' });
        }
    });

    app.delete('/products/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const result = await db.collection('products').deleteOne({ _id: id });
            res.json({ message: 'Product deleted successfully' });
        } catch (err) {
            console.error('Error deleting product:', err);
            res.status(500).json({ error: 'Failed to delete product' });
        }
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

setupDatabase();
