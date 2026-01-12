import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

/**
 * CREATE Todo
 * POST /todos
 */
router.post("/", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "title is required" });
        }

        const todo = await prisma.todo.create({
            data: { title },
        });

        res.status(201).json(todo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create todo" });
    }
});

/**
 * READ Todos
 * GET /todos
 */
router.get("/", async (req, res) => {
    try {
        const todos = await prisma.todo.findMany({
            orderBy: { createdAt: "desc" },
        });

        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch todos" });
    }
});

/**
 * UPDATE Todo
 * PATCH /todos/:id
 */
router.patch("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, completed } = req.body;

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: {
                ...(title !== undefined && { title }),
                ...(completed !== undefined && { completed }),
            },
        });

        res.json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update todo" });
    }
});

/**
 * DELETE Todo
 * DELETE /todos/:id
 */
router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid todo id" });
    }

    try {
        const deleted = await prisma.todo.delete({
            where: { id },
        });

        console.log("DELETED:", deleted);
        res.sendStatus(204);
    } catch (error) {
        console.error("PRISMA DELETE ERROR:", error);

        res.status(500).json({
            message: error.message,
            code: error.code,
        });
    }
});
// DELETE /todos/completed
router.delete("/completed", async (req, res) => {
    try {
        const result = await prisma.todo.deleteMany({
            where: { completed: true },
        });

        res.json({ deletedCount: result.count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete completed todos" });
    }
});

export default router;
