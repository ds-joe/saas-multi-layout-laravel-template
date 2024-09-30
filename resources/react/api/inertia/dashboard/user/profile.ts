// Types
import type { UpdateProfileAvatarApi, UpdateProfileMainDetailsApi } from "@/types/Api/Inertia/Dashboard/User/Profile";

export const updateMainDetails = routerService.createInertiaRequest<UpdateProfileMainDetailsApi>('post', route('user.profile.update.details'));
export const updateAvatar = routerService.createInertiaRequest<UpdateProfileAvatarApi>('post', route('user.profile.update.avatar'));
export const removeAvatar = routerService.createInertiaRequest('delete', route('user.profile.remove.avatar'));
