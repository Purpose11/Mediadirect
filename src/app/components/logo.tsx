export const MedidirectAiLogo = ({ className = "" }: { className?: string }) => {
    return (
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Main logo container */}
        <rect x="5" y="10" width="190" height="30" rx="6" fill="none" />
  
        {/* MD icon - now black circle with white text */}
        <circle cx="25" cy="25" r="15" fill="yellow" />
        <text x="15" y="30" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="black">
          MD
        </text>
  
        {/* Text elements as a single word - now black */}
        <text x="45" y="32" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="white">
          Mediadirect
        </text>
        <text x="155" y="32" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="white">
          Ai
        </text>
      </svg>
    )
  }
  