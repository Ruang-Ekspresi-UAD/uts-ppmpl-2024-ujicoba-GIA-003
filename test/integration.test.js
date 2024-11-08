// test/integration.test.js
const { expect } = require('chai');
const fs = require('fs').promises;
const path = require('path');

describe('Integration Tests for index.html', () => {
    let htmlContent;

    // "before" hook untuk membaca konten dari index.html
    before(async () => {
        // Menggunakan path.resolve untuk mendapatkan jalur absolut
        const filePath = path.resolve(__dirname, '../index.html');
        htmlContent = await fs.readFile(filePath, 'utf-8');
    });

    // Test untuk memastikan file HTML mengandung elemen yang diharapkan
    it('should have a navigation that links to sections', () => {
        expect(htmlContent).to.include('<nav>');
        expect(htmlContent).to.include('<a href="#sobre mim">Sobre mim</a>');
        expect(htmlContent).to.include('<a href="#hobbies">My Hobbies</a>');
        expect(htmlContent).to.include('<a href="#contact">Contact Me</a>');
    });

    it('should contain title "Document"', () => {
        expect(htmlContent).to.include('<title>Document</title>');
    });

    it('should contain an h1 with text "Bem vindos tonis mansos!"', () => {
        expect(htmlContent).to.include('<h1>Bem vindos tonis mansos!</h1>');
    });

    it('should contain an image with src "images/profile.jpg"', () => {
        expect(htmlContent).to.include('<img src="images/profile.jpg"');
    });

    it('should contain a "Sobre mim" section', () => {
        expect(htmlContent).to.include('<section id="sobre mim">');
    });

    it('should contain a "Hobbies" section', () => {
        expect(htmlContent).to.include('<section id="hobbies">');
    });

    it('should contain a "Contact Me" section with Discord link', () => {
        expect(htmlContent).to.include('<section id="contact">');
        expect(htmlContent).to.include('href="https://discord.gg/9p2k43WF"');
    });

    it('should contain a footer with copyright text', () => {
        expect(htmlContent).to.include('&copy; 2024 [Jorge Conde]. All rights reserved.');
    });
});
