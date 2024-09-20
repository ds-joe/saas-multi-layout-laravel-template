export interface UserMetaModel {
  _first_name: string;
  _last_name?: string;
  _phone?: string;
}

export interface UserModel extends UserMetaModel {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

