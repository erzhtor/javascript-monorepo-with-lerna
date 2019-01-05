# javascript-monorepo-with-lerna
Javascript monorepository template.


## Get Started
Follow instructions to clone and run project

#### Prerequisites
- Node.js: ^8
- [Lerna](https://github.com/lerna/lerna): installed globally. `npm i lerna -g`

### Clone repository
`git clone https://github.com/erzhtor/javascript-monorepo-with-lerna`

### Install dependencies using lerna
`lerna bootstrap`

### Run project
- **API backend**
`npm start --prefix apps/api`
- **frontend**
`npm start --prefix apps/frontend`
