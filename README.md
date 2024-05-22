# Projeto puzzles para o ordem paranormal

Bem-vindo ao Projeto puzzles para o ordem paranormal! Este repositório contém três puzzles para serem usados em um cenário de RPG Os puzzles são projetados para desafiar os jogadores e oferecer uma experiência envolvente e interativa.

## Instalações necessarias

Necessario instalar o Python 3 para iniciar o projeto\
[Python3](https://www.python.org/ftp/python/3.12.3/python-3.12.3-amd64.exe)

Valide a versão do Python com o comando

```python3 --version```

Caso tenha dado tudo certo

Após ter instalado o Python iremos instalar o flask

```pip install flask```

Os puzzles\
[labirinto](https://github.com/RodCas11/Puzzles-RPG/tree/main/puzzles/labirinto)\
[tapete](https://github.com/RodCas11/Puzzles-RPG/tree/main/puzzles/tapete)\
utilizam o flask para iniciar o projeto.

Agora vamos acessar o diretorio do puzzle que desejamos executar

```cd <caminho do diretorio>/puzzles/tapete```

Uma vez dentro do diretorio iremos executar o comando do flask

```.\env\Scripts\activate```

E por fim

```flask run```

É só acessar o seguinte link para abrir o seu projeto de forma local

[Link](127.0.0.1:5000)

Se tudo deu certo este link vai ser referenciado no seu prompt tambem

Caso tenha dado errado seguir os comando abaixo:

```Set-ExecutionPolicy -Scope CurrentUser RemoteSigned```

```Get-ExecutionPolicy```

Se o retorno for RemoteSigned deu certo e é só executar novamente o 

```.\env\Scripts\activate```

```flask run```

---

O puzzle do relogio é só executar o index.html ele já está pronto

---

## Estrutura do Projeto

```plaintext
Puzzles-RPG/
├── labirinto/
│   ├──static/
│   |  ├── styles.css
│   |  └── script.js
│   ├──templates/
│   |  └── index.html
│   └──app.py
|
├── tapete/
│   └──static/
│   |  ├── styles.css
│   |  ├── script.js
│   |  ├── sounds/
│   |  |   ├── correct_answer.mp3
│   |  |   └── place_object.mp3
│   |  └── images/
│   |      ├── objeto1.png
│   |      ├── objeto2.png
│   |      ├── objeto3.png
|   |      ├── objeto4.png
|   |      ├── correct_combination.png
│   |      └── background.png
│   ├──templates/
│   |  └── index.html
│   └──app.py
|
├── relogio/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── images/
│       └── clock-face.png
│
└── README.md