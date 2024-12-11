import Personas from '../models/Personas.js';

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getPersonas: async () => {
            const personas = await Personas.find();
            return personas.map(persona => ({
                ...persona.toObject(),
                fechaNacimiento: new Date(persona.fechaNacimiento).toISOString().split('T')[0], // yyyy-mm-dd
            }));
        },        
        getPersonaById: async (_, { id }) => {
            return await Personas.findById(id); // Busca una persona por ID
        },
    },
    Mutation: {
        createPersona: async (_, { nombre, apellido, email, telefono, edad, genero, fechaNacimiento }) => {
            const persona = new Personas({
                nombre,
                apellido,
                email,
                telefono,
                edad,
                genero,
                fechaNacimiento,
            });
            return await persona.save(); // Guarda en la base de datos
        },
        updatePersona: async (_, { id, nombre, apellido, email, telefono, edad, genero, fechaNacimiento }) => {
            const personaActualizada = await Personas.findByIdAndUpdate(
                id,
                { nombre, apellido, email, telefono, edad, genero, fechaNacimiento },
                { new: true } // Retorna el documento actualizado
            );
            if (!personaActualizada) {
                throw new Error('Persona no encontrada');
            }
            return personaActualizada;
        },
        deletePersona: async (_, { id }) => {
            const personaEliminada = await Personas.findByIdAndDelete(id);
            if (!personaEliminada) {
                throw new Error('Persona no encontrada');
            }
            return `Persona con ID ${id} eliminada exitosamente.`;
        },
    },
};
