import React, { createContext, useState } from "react";

export interface Post {
  id: number;
  title: string;
  userId: number;
  username?: string;
}

interface JsonDataContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const JsonDataContext = createContext<JsonDataContextType>({
  posts: [],
  setPosts: () => {}
});

export const JsonDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <JsonDataContext.Provider value={{ posts, setPosts }}>
      {children}
    </JsonDataContext.Provider>
  );
};
