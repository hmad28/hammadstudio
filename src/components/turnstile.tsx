"use client";
import Script from "next/script";
import { useEffect } from "react";

export function Turnstile({onToken}:{onToken:(token:string)=>void}){
  const siteKey=process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  useEffect(()=>{const target=window as typeof window&{onHammadTurnstile?:(token:string)=>void};target.onHammadTurnstile=onToken;return()=>{delete target.onHammadTurnstile}},[onToken]);
  if(!siteKey)return null;
  return <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload"/><div className="cf-turnstile" data-sitekey={siteKey} data-theme="dark" data-callback="onHammadTurnstile"/></>;
}
