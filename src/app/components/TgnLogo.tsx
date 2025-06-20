export default function TgnLogo() {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-xl shadow-sm"
    >
      <rect width="100" height="100" rx="20" fill="#14b8a6"/>
      
      {/* Refined custom 't' shape */}
      <path 
        d="M 50 28 V 72 M 25 50 C 40 45, 60 45, 75 50" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />

      {/* 'gn' text, adjusted for balance */}
      <text 
        x="60" 
        y="77" 
        fontFamily="'Comic Sans MS', 'Chalkboard SE', 'Marker Felt', sans-serif" 
        fontSize="30" 
        fontWeight="bold" 
        fill="white"
      >
        gn
      </text>
    </svg>
  );
} 