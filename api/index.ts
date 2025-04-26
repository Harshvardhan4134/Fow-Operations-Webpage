import express from 'express';
import { createServer } from 'http';

const app = express();

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

const server = createServer(app);

export default function handler(req, res) {
    res.status(200).json({ status: 'ok' });
}