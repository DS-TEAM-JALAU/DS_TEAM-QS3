# DS_TEAM-QS3
Essa é uma atividade extra que via fazer testes de e2e na API Rest da ferramenta do Trello fazendo todos os testes da criação dos boards até a criação de cards e listas.

## Como rodar o código

Primeiro é necessário fazer a instalação das dependências para rodar o projeto.
```bash
npm i
```

Para rodar o projeto, temos que utilizar do comando abaixo para fazer a execução dos testes.
```bash
npm test
```

### Como rodar o código com tag
Para rodar o projeto usando uma tag, temos que utilizar do comando abaixo para fazer a execução dos testes com as determinadas tags.
```bash
npm run test:param --pattern="@nomeDaTag"
```

Para rodar o projeto usando mais tags, temos que utilizar do comando abaixo para fazer a execução dos testes com as determinadas tags.
```bash
npm run test:param --pattern="(@nomeDaTag|@segundaTag)"
```

#### Tags

##### Tags de importancia
- @high
- @medium
- @low

##### Tags de tipo de teste
- @functional
- @performance
- @smoke
- @error
- @regression

## Visualizando o relatório de teste

### Ao rodar os testes
Depois de executar os testes, podemos ir dentro da pasta de "html-report" presente no código e abrimos o arquivo chamado "report.html". Ao abrir esse arquivo no navegador, teremos uma dashboard dos nossos testes feito no framework de teste.

### Pelo Artifacts
Indo na aba de Actions do GitHub e entrando no último workflow é possível achar no final da página o artefato que contem o relatório dos testes. Basta apenas baixar esse relatório, extrair o arquivo zip e executar o html que vai ser possível visualizar todo o relatório.


## Funcionalidades
As principais funcionalidades desse framework, são as seguintes:
- **Geração de logs**: Utiliza do da ferramenta Pino para gerar loggings durante a execução.
- **Utilização de variáveis de ambiente**: Gerenciador de variáveis de ambiente que permitem a utilização eficiente da mesma.
- **Execução de testes automatizados**: Execução de testes automatizados com o Jest.
- **Gerenciador de requisições**: Gerencia as requisições feitas com a ferramenta Axios a nossa API.
- **Formatação de código**: Usamos o Biome para fazer analise do código e correções no código.
- **Geração de relatório de testes**: Usando a biblioteca jest-html-reporters estamos fazendo a geração dos nosso relatórios de testes.

## Componentes
- **env**: Componente responsável pelo gerenciamento de variáveis de ambiente.
- **logger**: Componente responsável pela geração e criação dos log da execução do framework.
- **request manager**: Componente responsável pelo gerenciamento de requisições a nossa API.
- **test**: Componente com os códigos de testes automatizados.
- **biome**: Componente responsável por fazer correções e indicações no código-fonte.

## Dependências

https://www.npmjs.com/package/axios - Biblioteca para realizar requisições HTTP.

https://www.npmjs.com/package/jest - Framework de testes em JavaScript.

https://www.npmjs.com/package/pino - Biblioteca de logging de alta performance.

https://www.npmjs.com/package/dotenv - Biblioteca de gerenciamento de variáveis de ambiente.

https://www.npmjs.com/package/biome - Biblioteca para correção do código.

https://www.npmjs.com/package/jest-html-reporters - Biblioteca para geração dos relatórios de testes.

## Autores

Hadja Costa - https://github.com/HadjaLorena

Ivanildo Iure - https://github.com/Iure-Lima

Willian Cavalcanti - https://github.com/Williancc1557

Roger Rocha - https://github.com/RogerARocha

Thomas Henry Trindade - https://github.com/ThomasHenry011
