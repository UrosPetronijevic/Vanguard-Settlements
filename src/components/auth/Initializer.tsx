import React, { useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { updateSessionFromSupabase } from "../../utils/auth";

interface InitializerProps {
  children: React.ReactNode;
}

const Initializer: React.FC<InitializerProps> = ({ children }) => {
  useEffect(() => {
    updateSessionFromSupabase();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: any, session: any) => {
      console.log("Supabase Auth Event:", event, "Session:", session);
      updateSessionFromSupabase();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return <>{children}</>;
};

export default Initializer;
