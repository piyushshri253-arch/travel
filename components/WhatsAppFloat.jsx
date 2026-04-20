"use client";

export default function WhatsAppFloat() {
  const phoneNumber = "919999999999"; // apna number
  const message = "Hello, I want trip details";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition">
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M19.11 17.36c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.43-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.2-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.14.19 2.02 3.08 4.9 4.31.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
          <path d="M16.02 3C9.94 3 5 7.93 5 14c0 2.47.81 4.76 2.19 6.6L5 29l8.64-2.26c1.75.96 3.76 1.5 5.88 1.5 6.08 0 11.02-4.93 11.02-11s-4.94-11-11.02-11zm0 19.5c-1.86 0-3.61-.5-5.13-1.38l-.37-.22-5.13 1.34 1.37-5-.24-.39C6.57 15.2 6 13.65 6 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
        </svg>
      </div>
    </a>
  );
}