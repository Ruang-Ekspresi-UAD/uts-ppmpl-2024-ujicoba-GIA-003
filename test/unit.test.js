// test.js
const { expect } = require('chai');
const fs = require('fs/promises');

describe('HTML Structure in index.html', () => {
  let htmlContent;

  before(async () => {
    htmlContent = await fs.readFile('index.html', 'utf-8');
  });

  it('should contain title "Document"', () => {
    expect(htmlContent).to.include('<title>Document</title>');
  });

  it('should contain a nav element with links', () => {
    expect(htmlContent).to.include('<nav>');
    expect(htmlContent).to.include('<a href="#sobre mim">Sobre mim</a>');
    expect(htmlContent).to.include('<a href="#hobbies">My Hobbies</a>');
    expect(htmlContent).to.include('<a href="#contact">Contact Me</a>');
  });

  it('should contain an h1 with text "Bem vindos tonis mansos!"', () => {
    expect(htmlContent).to.include('<h1>Bem vindos tonis mansos!</h1>');
  });

  it('should contain an image with src "images/profile.jpg"', () => {
    expect(htmlContent).to.include('<img src="images/profile.jpg"');
    expect(htmlContent).to.include('alt="Profile Picture"');
    expect(htmlContent).to.include('width="200"');
  });

  it('should contain a "Sobre mim" section', () => {
    expect(htmlContent).to.include('<section id="sobre mim">');
    expect(htmlContent).to.include('<h2>Sobre mim</h2>');
    expect(htmlContent).to.include('<p>Primeira vez a usar HTML');
  });

  it('should contain a "Hobbies" section', () => {
    expect(htmlContent).to.include('<section id="hobbies">');
    expect(htmlContent).to.include('<h2>Passatempos</h2>');
    expect(htmlContent).to.include('<li>Cozinhar gandas cenas</li>');
    expect(htmlContent).to.include('<li>Correr</li>');
    expect(htmlContent).to.include('<li>Jogar pc 24/7</li>');
  });

  it('should contain a "Contact Me" section with Discord link', () => {
    expect(htmlContent).to.include('<section id="contact">');
    expect(htmlContent).to.include('<h2>Contact Me</h2>');
    expect(htmlContent).to.include('<a href="https://discord.gg/9p2k43WF"');
  });

  it('should contain a footer with copyright text', () => {
    expect(htmlContent).to.include('&copy; 2024 [Jorge Conde]. All rights reserved.');
});

});
