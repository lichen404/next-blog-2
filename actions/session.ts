import { getIronSession } from "iron-session";
import { cookies } from "next/headers";


interface SessionData {
    userId: number;
  }
const sessionOptions = {
    cookieName: "blog",
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieOptions: {
      secure: false,
    },
  };
export function getSession() {
    return getIronSession<SessionData>(cookies(), sessionOptions);
  }