import express from "express";
import controller from "../controllers/UserController";
import { authMiddleware } from "../middlewares/auth";
import { checkRole } from "../middlewares/checkRole";

const router = express.Router();

// Não autenticada

router.post("/register", controller.createUser); // Cadastro de Usuário

// Com autenticação

router.get("/profile/:userId", authMiddleware, controller.readUser);
router.get("/profiles", authMiddleware, controller.readAll);
router.put("/profile/edit", authMiddleware, controller.updateUser);
router.delete("/profile/delete", authMiddleware, checkRole, controller.deleteUser);

export = router;
