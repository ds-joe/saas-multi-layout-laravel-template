export type UpdateProfileMainDetailsApi = {
  username: string;
  email: string;
  password?: string;
  password_confirmation?: string;
  _first_name: string;
  _last_name?: string;
}

export type UpdateProfileAvatarApi = {
  avatar: File | null;
}

