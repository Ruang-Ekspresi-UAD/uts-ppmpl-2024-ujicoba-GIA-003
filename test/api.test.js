const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../index.js'); // Pastikan path ini sesuai dengan file utama Express Anda

describe('API Section Tests', () => {
    let newId = 'NewId';
    let updatedId = 'UpdateId';

    // Pengujian POST untuk membuat `section` baru
    it('POST /section - Membuat section baru', (done) => {
        request(app)
            .post('/section')
            .send({ id: newId, content: 'Ini konten baru' })
            .expect(201)
            .end((err, res) => {
                expect(res.body).to.have.property('message', 'Section created');
                done(err);
            });
    });

    // Pengujian GET untuk mengambil `section` berdasarkan ID
    it('GET /section/:id - Mengambil section berdasarkan ID', (done) => {
        request(app)
            .get(`/section/${newId}`)
            .expect(200)
            .end((err, res) => {
                expect(res.body.section).to.equal('Ini konten baru');
                done(err);
            });
    });

    // Pengujian PUT untuk memperbarui ID `section`
    it('PUT /section - Memperbarui ID section', (done) => {
        request(app)
            .put('/section')
            .send({ oldId: newId, newId: updatedId })
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.property('message', 'Section ID updated');
                done(err);
            });
    });

    // Pengujian DELETE untuk menghapus `section` berdasarkan ID
    it('DELETE /section/:id - Menghapus section berdasarkan ID', (done) => {
        request(app)
            .delete(`/section/${updatedId}`)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.property('message', 'Section deleted');
                done(err);
            });
    });
});
