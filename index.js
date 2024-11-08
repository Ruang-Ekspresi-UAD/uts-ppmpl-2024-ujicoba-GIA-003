const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let sections = {};

// Endpoint POST untuk membuat `section` baru
app.post('/section', (req, res) => {
    const { id, content } = req.body;
    if (!id || !content) {
        return res.status(400).json({ message: 'Invalid request' });
    }
    sections[id] = content;
    res.status(201).json({ message: 'Section created' });
});

// Endpoint GET untuk mengambil `section` berdasarkan ID
app.get('/section/:id', (req, res) => {
    const { id } = req.params;
    if (sections[id]) {
        res.status(200).json({ section: sections[id] });
    } else {
        res.status(404).json({ message: 'Section not found' });
    }
});

// Endpoint PUT untuk memperbarui ID `section`
app.put('/section', (req, res) => {
    const { oldId, newId } = req.body;
    if (sections[oldId]) {
        sections[newId] = sections[oldId];
        delete sections[oldId];
        res.status(200).json({ message: 'Section ID updated' });
    } else {
        res.status(404).json({ message: 'Section not found' });
    }
});

// Endpoint DELETE untuk menghapus `section` berdasarkan ID
app.delete('/section/:id', (req, res) => {
    const { id } = req.params;
    if (sections[id]) {
        delete sections[id];
        res.status(200).json({ message: 'Section deleted' });
    } else {
        res.status(404).json({ message: 'Section not found' });
    }
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app; // Ekspor `app` untuk digunakan dalam pengujian
