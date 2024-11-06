// context/SessionContext.tsx
import { createContext, useContext, useState } from "react";

export type UserData = {
  id: string;
  usuario: string;
  nombre: string;
};

type SessionContextType = {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserData | null>(null);
  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession debe ser usado dentro de un SessionProvider");
  return context;
};
