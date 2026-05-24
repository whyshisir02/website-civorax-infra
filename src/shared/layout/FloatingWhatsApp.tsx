import { createWhatsappLink } from "@/entities/company";
import { whatsappMessage } from "@/entities/navigation";

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsappLink(whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CivoraX Infra on WhatsApp"
      className="fixed bottom-[92px] right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-[104px] sm:right-7 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9" fill="currentColor">
        <path d="M16.04 3.2A12.7 12.7 0 0 0 5.13 22.4L3.2 29.12l6.9-1.82a12.69 12.69 0 0 0 5.94 1.51h.01A12.8 12.8 0 0 0 28.8 16.04 12.78 12.78 0 0 0 16.04 3.2Zm0 23.45h-.01a10.55 10.55 0 0 1-5.38-1.47l-.39-.23-4.09 1.08 1.09-3.98-.26-.41a10.49 10.49 0 1 1 9.04 5.01Zm5.75-7.86c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.55-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>
  );
}
