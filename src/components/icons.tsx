import React from "react";

export function HammadStudioLogo({ className = "h-auto" }: { className?: string }) {
  return (
    <span className={`text-[0.72rem] font-semibold tracking-[0.22em] text-white uppercase select-none sm:text-xs ${className}`}>
      HAMMAD<span className="text-[#8e8e8a] font-medium">.STUDIO</span>
    </span>
  );
}

export function StarIcon({ className = "w-4 h-4 text-zinc-300" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.988L2 22l5.167-1.348A9.957 9.957 0 0 0 12.012 22c5.51 0 9.99-4.478 9.99-9.984s-4.48-9.984-9.99-9.984zm5.795 14.154c-.244.686-1.42 1.309-1.956 1.393-.536.084-1.222.124-3.535-.806-2.956-1.189-4.858-4.17-5.006-4.368-.148-.198-1.207-1.604-1.207-3.059 0-1.455.762-2.17 1.033-2.464.271-.294.59-.368.788-.368.198 0 .395.003.567.011.183.008.43-.069.673.515.244.584.834 2.036.907 2.184.073.148.122.321.024.515-.098.194-.148.315-.294.487-.148.172-.311.385-.444.517-.148.148-.302.309-.13.605.172.296.764 1.262 1.639 2.043 1.127 1.006 2.077 1.318 2.373 1.466.296.148.469.123.642-.074.172-.198.74-.863.937-1.16.198-.297.395-.247.665-.148.271.098 1.725.814 2.021.962.296.148.493.222.567.345.074.123.074.714-.17 1.401z"/>
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4 text-white" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
