import { Router } from 'express'
import { createTask, deleteTask, editTask, renderTaskEdit, renderTasks, taskToggleDone } from '../controllers/task.controller';

const router = Router()

router.get("/", renderTasks)

router.post('/tasks/add', createTask)

router.get("/about", (req, res) => {
    res.render('about')
})
router.get("/edit", (req, res) => {
    res.render('edit')
})
router.get("/tasks/:id/edit", renderTaskEdit)

//cuando visite id edita y recibe los datos
router.post('/tasks/:id/edit', editTask)

//eliminar
router.get('/tasks/:id/delete', deleteTask)

//toogledone
router.get('/tasks/:id/toggleDone', taskToggleDone)

export default router;