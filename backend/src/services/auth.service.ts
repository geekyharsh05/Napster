import { User } from "../models/user.model";

export class AuthService {
  public async authCallback(data: {
    id: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
  }) {
    const { id, firstName, lastName, imageUrl } = data;

    let user = await User.findOne({ clerkId: id });

    if (!user) {
      const fullName = `${firstName || ""} ${lastName || ""}`.trim();
      user = await User.create({
        clerkId: id,
        fullName,
        imageUrl,
      });
    }

    return { success: true };
  }
}
