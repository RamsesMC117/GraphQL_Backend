import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        hello: String
        getPersonas: [Persona]       # Obtener todas las personas
        getPersonaById(id: ID!): Persona # Obtener una persona por su ID
    }

    type Mutation {
        createPersona(
            nombre: String!,
            apellido: String!,
            email: String!,
            telefono: String,
            edad: Int,
            genero: String,
            fechaNacimiento: String
        ): Persona

        updatePersona(
            id: ID!,
            nombre: String,
            apellido: String,
            email: String,
            telefono: String,
            edad: Int,
            genero: String,
            fechaNacimiento: String
        ): Persona

        deletePersona(id: ID!): String
    }

    type Persona {
        _id: ID
        nombre: String
        apellido: String
        email: String
        telefono: String
        edad: Int
        genero: String
        fechaNacimiento: String
        createdAt: String
        updatedAt: String
    }
`;
