import { User } from "../models/user.model";
import { validateSchema } from "../utils/validateSchema.util";
import { AuthInput, userSchema } from "../validators/user.schema";

export class AuthService {
  public async authCallback(input: AuthInput) {
    const { id, firstName, lastName, imageUrl } = validateSchema(userSchema, input)

    let user = await User.findOne({ clerkId: id });

    if (!user) {
      const fullName = [firstName, lastName].filter(Boolean).join(" ");
      
      user = await User.create({
        clerkId: id,
        fullName,
        imageUrl,
      });
    }

    return { success: true };
  }
}
