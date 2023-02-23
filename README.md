# Api-rest-node.js

## Tools

fastify - Fats and low overhead web framework, for Node.js

```
npm install fastify

```

Knex - 

```
 npm install knex sqlite3

 npm run knex -- migrate:make create-documents

 npm run knex -- migrate:latest

 npm run knex -- migrate:rollback

 npm run knex -- migrate:make add-session-id-to-transactions

```
Env - 

```
npm i dotenv

```
zod - 

```
npm i zod
```

## Rule.

 RF
- [ ] The user must be able to create a new transaction.
- [ ] The user must be able to get his account summary.
- [ ] The user must be able to list all transactions that have already taken place.
- [ ] The user must be able to view a single transaction.

RN 

- [ ] The transaction can be of the credit type that will add to the total amount, or debit will subtract; 
- [ ] It must be possible to identify the user among the requests;
- [ ] The user can only view transactions which he created;

