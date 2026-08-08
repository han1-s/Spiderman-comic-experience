# 🕷️ Superior Spider-Man — Comic Experience

Uma experiência web interativa, responsiva e imersiva inspirada no universo do **Homem-Aranha Superior**. O projeto recria a estética visual de quadrinhos com efeitos de profundidade, movimento de câmera dinâmico e iluminação neon em tempo real.

---

## 🎨 Demonstração Visual & Estética

O layout foi planejado para passar a sensação de estar folheando uma HQ clássica com um toque moderno e tecnológico:

- **Estilo HQ Clássico:** Painéis de quadrinhos dispostos em ângulos alternados, com bordas marcadas e sombra em bloco.
- **Fundo P&B Tradicional:** Colagem de quadrinhos em preto e branco com desfoque (*blur*) suave para destacar os elementos em primeiro plano.
- **Glow Neon & Animação:** Aura vermelha animada e flutuação contínua no personagem do Homem-Aranha Superior.

---

## ✨ Funcionalidades

* **Controle de Câmera Parallax (Mouse Control):** A perspectiva da tela se move suavemente de acordo com a posição do ponteiro do mouse, criando uma sensação 3D de profundidade entre as camadas.
* **Reflexo Dinâmico (Shine Effect):** Ao passar o mouse (*hover*) sobre qualquer painel de HQ, um efeito de corte de luz atravessa a imagem.
* **Balão de Fala Interativo:** Exibição de um balão de fala clássico no estilo gibi ao interagir com o personagem principal.
* **Animações Fluidas:** Utilização de interpolação matemática (*lerp*) e `requestAnimationFrame` no JavaScript para garantir alta performance sem travamentos.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3:** Animações (`@keyframes`), variáveis de transformação (`translate3d`), filtros visuais e estilização de layout.
- **JavaScript (ES6+):** Manipulação do DOM, cálculo de profundidade e controle de física da câmera.

---

## 📁 Estrutura de Pastas

```text
Spiderman-comic-experience/
│
├── assets/
│   └── images/
│       ├── hq-01.jpg ... hq-08.jpg   # Imagens das páginas de gibi
│       ├── images.jpg                 # Fundo de colagem em P&B
│       ├── new-york.jpg               # Imagem complementar de fundo
│       └── spiderman.png              # PNG transparente do Aranha Superior
│
├── css/
│   ├── style.css                      # Estilos principais e animações
│   └── responsive.css                 # Regras para telas menores
│
├── js/
│   └── script.js                      # Lógica do Parallax e interatividade
│
└── index.html                         # Estrutura principal da página
