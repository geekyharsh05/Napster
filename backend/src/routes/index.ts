import { Router } from "express";
import AuthRoutes from "./auth.route";
import UserRoutes from "./user.route";
import AlbumRoutes from "./album.route"
import AdminRoutes from './admin.route'
import SongRoutes from "./song.route"
import StatRoutes from "./stat.route"
import { isAuthenticated, verifyAdminAccess } from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/admin", isAuthenticated, verifyAdminAccess, AdminRoutes);
// router.use("/users", UserRoutes);
// router.use("/songs", SongRoutes);
// router.use("/albums", AlbumRoutes);
// router.use("/stats", StatRoutes);

export default router;
