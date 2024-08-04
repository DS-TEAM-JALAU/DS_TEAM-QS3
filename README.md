# DS_TEAM-QS3
Contém todos os códigos feitos para a cadeira de engenharia de qualidade de software 2 da Jala University. Vale mencionar que todos os códigos estão devidamente separados em suas branches, onde cada branch faz referencia a atividade e também a tarefa que ela tem referência.

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

## Tags

### Tags de importancia
- @high
- @medium
- @low

## Funcionalidades
As principais funcionalidades desse framework, são as seguintes:
- **Geração de logs**: Utiliza do da ferramenta Pino para gerar loggings durante a execução.
- **Utilização de variáveis de ambiente**: Gerenciador de variáveis de ambiente que permitem a utilização eficiente da mesma. 
- **Execução de testes automatizados**: Execução de testes automatizados com o Jest.
- **Gerenciador de requisições**: Gerencia as requisições feitas com a ferramenta Axios a nossa API.
- **Formatação de código**: Usamos o Biome para fazer analise do código e correções no código.

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

## Autores

Hadja Costa - https://github.com/HadjaLorena

Ivanildo Iure - https://github.com/Iure-Lima

Willian Cavalcanti - https://github.com/Williancc1557

Roger Rocha - https://github.com/RogerARocha

Thomas Henry Trindade - https://github.com/ThomasHenry011
