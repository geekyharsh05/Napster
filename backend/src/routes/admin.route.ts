import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";

const router = Router();
const adminController = new AdminController();

// router.get("/check", adminController.checkAdmin);

router.post("/songs", adminController.createSong);
// router.delete("/songs/:id", adminController.deleteSong);

// router.post("/albums", adminController.createAlbum);
// router.delete("/albums/:id", adminController.deleteAlbum);

export default router;