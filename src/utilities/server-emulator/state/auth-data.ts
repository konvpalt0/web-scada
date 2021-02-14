type UserData = {password: string, id: number};
type UsersList = Map<string, UserData>;

const usersList: UsersList = new Map();

usersList.set("admin@admin", {password: "admin", id: 1});

export {usersList};


export const checkLoginUser = (email: string, password: string): number => {
  const user = usersList.get(email);
  if (user && user.password === password) return user.id
  return -1;
}
