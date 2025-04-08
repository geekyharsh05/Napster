import { Router } from "express";

const router = Router();

router.get("/check");

router.post("/songs");
router.delete("/songs/:id");

router.post("/albums");
router.delete("/albums/:id");

export default router;