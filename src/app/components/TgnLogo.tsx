import Link from 'next/link';

export default function TgnLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-lg shadow-sm"
      >
        <rect width="100" height="100" rx="20" fill="#14b8a6"/>
        <path
          d="M 50 28 V 72 M 25 50 C 40 45, 60 45, 75 50" 
          stroke="white" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-white font-bold text-xl tracking-wider">tegana</span>
    </Link>
  );
} 