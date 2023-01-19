import { crearUsuario, getUsuario, getUsuarios, actualizarUsuario, deleteUsuario } from './../controllers/usuarios.js';
import { Router } from 'express';
const router = Router();
router.get('/', [], getUsuarios);
router.get('/:id', [], getUsuario);
router.post('/', crearUsuario);
router.put('/:id', [], actualizarUsuario);
router.delete('/:id', [], deleteUsuario);
export default router;
//# sourceMappingURL=usuarios.js.map