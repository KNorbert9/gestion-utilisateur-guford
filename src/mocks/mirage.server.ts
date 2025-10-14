// src/mirage.server.ts
import { createServer, Model, Factory, Response } from 'miragejs';
import {ModelDefinition} from "miragejs/-types";
import {UserModel} from "../models/user.model";

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,


    // Définition des modèles
    models: {
      user: Model.extend<Partial<UserModel>>({}) as ModelDefinition<UserModel>,
    },

    // Définition d'une factory pour générer des données factices
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
      }),
    },

    // Seeds : insérer des données initiales dans la "BDD" Mirage
    seeds(server) {
      server.createList('user', 10);
    },

    // Définition des routes à intercepter
    routes() {

      this.namespace = 'mi-api';

      // GET /api/users retourne tous les utilisateurs
      this.get('/users', (schema) => {
        return schema.all('user');
      });

      // POST /api/users permet de créer un utilisateur
      this.post('/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.create('user', attrs);
      });

      // Laisser passer (ne pas intercepter) les autres requêtes
      // Ici, on autorise toutes les requêtes qui ne commencent pas par "/api"
      this.passthrough((request) => {
        // Si l'URL de la requête ne commence pas par le namespace simulé (/api), on laisse passer
        return !request.url.includes('/mi-api');
      });
    },
  });
}
