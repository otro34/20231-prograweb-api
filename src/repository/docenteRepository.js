import Docente from '../models/docente.js'

const findAll = async () => {
    try {

        const result = await Docente.findAll();
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
        const founddocente =  await Docente.update({
            where: {
                id: curso.id
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
