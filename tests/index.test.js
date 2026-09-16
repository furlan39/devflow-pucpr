const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');

test('index.html deve existir', () => {
  assert.ok(html.length > 0);
});

test('index.html deve possuir DOCTYPE HTML', () => {
  assert.match(html, /<!DOCTYPE html>/i);
});

test('index.html deve possuir a tag html', () => {
  assert.match(html, /<html/i);
  assert.match(html, /<\/html>/i);
});

test('index.html deve possuir título', () => {
  assert.match(html, /<title>.*<\/title>/i);
});

test('index.html deve possuir seção de conteúdo', () => {
  assert.match(html, /<body/i);
  assert.match(html, /<\/body>/i);
});