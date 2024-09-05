import { getCookie } from "cookies-next";

export function getookieClient(){
    const token = getCookie("session");

    return token;
}