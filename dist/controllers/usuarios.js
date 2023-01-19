import Usuario from "../models/usuario.js";
export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            where: { estado: '1' }
        });
        res.json({ usuarios });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ha ocurrido un error, intentelo más tarde.' });
    }
};
export const getUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario)
            return res.json({ msg: 'No existe un usuario con la id ' + id });
        res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ha ocurrido un error, intentelo más tarde.' });
    }
};
export const crearUsuario = async (req, res) => {
    try {
        const body = req.body;
        const existeEmail = await Usuario.findOne({
            where: { email: body.email }
        });
        if (existeEmail)
            return res.status(400).json({ msg: 'Ya existe un usuario con el email: ' + body.email });
        const usuario = await Usuario.create(body);
        res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ha ocurrido un error, intentelo más tarde.' });
    }
};
export const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario)
            return res.json({ msg: 'No existe un usuario con la id ' + id });
        const existeEmail = await Usuario.findOne({
            where: { email: body.email }
        });
        if (existeEmail)
            return res.status(400).json({ msg: 'Ya existe un usuario con el email: ' + body.email });
        const usuarioUpdated = await usuario.update(body);
        res.json({ usuarioUpdated });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ha ocurrido un error, intentelo más tarde.' });
    }
};
export const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario)
            return res.json({ msg: 'No existe un usuario con la id ' + id });
        // await usuario.destroy(); No se recomienda eliminar fisicamente, es mejor desactivarlos
        const usuarioUpdated = await usuario.update({ estado: true });
        res.json({ usuarioUpdated });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ha ocurrido un error, intentelo más tarde.' });
    }
};
//# sourceMappingURL=usuarios.js.map