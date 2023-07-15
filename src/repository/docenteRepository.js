import Docente from '../models/docente.js'
import Curso from '../models/curso.js';

const findAll = async () => {
    try {

        const result = await Docente.findAll({include: Curso});
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (docente) => {
    try {

        const newdocente = await Docente.create(docente);

        return newdocente;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Docente.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (docente) => {
    try {
        const founddocente =  await Docente.findOne({
            where: {
                id: docente.id
            }
        })

        founddocente.set(docente)

        founddocente.save()

        return founddocente;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Docente.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const DocentesRepository = { findAll, create, findOne,update, remove };

export default DocentesRepository; 
