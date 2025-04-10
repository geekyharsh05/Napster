import { Request, RequestHandler, Response } from "express";
import { asyncHandler } from "../utils/ayncHandler.util";
import { AdminService } from "../services/admin.service";

export class AdminController {
    private adminService: AdminService;

    constructor() {
      this.adminService = new AdminService();
    }

    public createSong: RequestHandler = asyncHandler(async(req: Request) => {
        const result = this.adminService.createSong(req.body)
        return {
            message: "Song created successfully",
            ...result,
          };
    })

    
}