"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react/X";
import { trackConversion } from "@/lib/analytics";

const promoEndsAt = new Date("2026-09-01T00:00:00+07:00").getTime();
const whatsappHref = `https://wa.me/6285199391215?text=${encodeURIComponent("Halo Hammad Studio, saya melihat Promo Merdeka di website dan ingin klaim sekaligus konsultasi pembuatan website.")}`;

export function HomepagePromoPopup() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (Date.now() >= promoEndsAt) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03060c]/82 p-3 backdrop-blur-md sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          role="dialog"
          aria-modal="true"
          aria-label="Promo Merdeka Hammad Studio"
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-[500px]"
            initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-1 -top-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#07111f]/92 text-white shadow-xl backdrop-blur transition hover:rotate-90 hover:bg-[#e1262f] sm:-right-4 sm:-top-4"
              aria-label="Tutup promo"
              autoFocus
            >
              <X className="h-5 w-5" weight="bold" />
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion("whatsapp_click", { placement: "homepage_merdeka_popup" })}
              className="group block overflow-hidden rounded-[22px] border border-white/22 bg-[#9d0b12] shadow-[0_34px_100px_rgba(0,0,0,.62)] sm:rounded-[28px]"
              aria-label="Klaim Promo Merdeka melalui WhatsApp"
            >
              <Image
                src="/images/campaign/merdeka-bisnis-popup.webp"
                alt="Promo Merdekakan Bisnis Anda — website mulai Rp499 ribu termasuk domain .com"
                width={900}
                height={1125}
                quality={65}
                sizes="(max-width: 640px) calc(100vw - 24px), 500px"
                className="max-h-[88dvh] w-full object-contain transition duration-500 group-hover:scale-[1.012]"
              />
            </a>
            <p className="mt-3 text-center text-[.68rem] text-white/55">Klik poster untuk klaim promo via WhatsApp · Tekan Esc untuk menutup</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
