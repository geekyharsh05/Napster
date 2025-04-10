import { Request, RequestHandler } from "express";
import { AuthService } from "../services/auth.service";
import { asyncHandler } from "../utils/ayncHandler.util";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public authCallback: RequestHandler = asyncHandler(async (req: Request) => {
    const result = await this.authService.authCallback(req.body);
    return {
      message: "User authenticated successfully",
      ...result,
    };
  });
}
