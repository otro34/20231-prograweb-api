import Curso from '../models/curso.js'
import Docente from '../models/docente.js'

const findAll = async () => {
    try {
        const result = await Curso.findAll({include: Docente});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (curso) => {
    try {

        const newCurso = await Curso.create(curso);

        return newCurso;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Curso.findOne({
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

const update = async (curso) => {
    try {
        const foundCurso =  await Curso.findOne({
            where: {
                id: curso.id
            }
        })

        foundCurso.set(curso)

        foundCurso.save()

        return foundCurso;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Curso.destroy({
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


const CursosRepository = { findAll, create, findOne,update, remove };

export default CursosRepository; 
