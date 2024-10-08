import { access_token } from "../cookie/index";

export const current_user = () => {
  if (access_token !== undefined) {
    const user = JSON.parse(access_token);
    delete user.token;
    return user;
  }
  return null;
};
