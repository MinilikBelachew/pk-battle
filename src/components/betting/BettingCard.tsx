import React from 'react';

// Define the Participant interface
interface Participant {
  id: string;
  name: string;
  image: string;
  odds: number;
}

interface BettingCardProps {
  id: string;
  title: string;
  // Change the participants type to an array of Participant objects
  participants: Participant[];
  volume: string;
  date: string;
  chance?: number;
  isSettled?: boolean;
  winner?: string;
  onBet?: (participantId: string) => void;
  onNavigate?: (page: string) => void;
}

const BettingCard: React.FC<BettingCardProps> = ({
  //   id,
  title,
  participants,
  volume,
  date,
  chance = 60,
  isSettled = false,
//   winner,
  onBet,
  onNavigate
}) => {
  const handleCardClick = () => {
    if (onNavigate) {
      onNavigate('market-card');
    }
  };

  const handleBetClick = (e: React.MouseEvent, participantId: string) => {
    e.stopPropagation();
    if (onBet) {
      onBet(participantId);
    }
  };

  // Use a nullish coalescing operator to safely access the first two participants
  // This prevents an error if the array has fewer than two items.
  const participant1 = participants[0] ?? null;
  const participant2 = participants[1] ?? null;

  // Add a check to ensure we have the participants we need before rendering.
  // Returning null or an error state is a good practice.
  if (!participant1 || !participant2) {
    return <div>Error: Not enough participants.</div>;
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-2 hover:shadow-lg transition-shadow cursor-pointer border ${isSettled ? 'border-yellow-400 border-2' : 'border-yellow-300'}`}
      onClick={handleCardClick}
    >
      {/* Title */}
      <h3 className="text-base font-semibold text-gray-800 mb-4 leading-tight">{title}</h3>

      {/* Main content area */}
      <div className="flex flex-col">
        {/* Row for images, VS connector, and chance circle */}
        <div className="flex items-start justify-between">
          {/* Left participant image and button */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-200">
              <img
                src="/imgs/img1.png"
                alt={participant1.name}
                className="w-full h-full object-cover"
              />
            </div>
            {!isSettled && (
              <button
                onClick={(e) => handleBetClick(e, participant1.id)}
                className="bg-forest-green hover:bg-green-600 text-white px-6 py-2 text-base font-medium transition-colors"
              >
                Button
              </button>
            )}
          </div>

          {/* VS connector - now responsive and centered with images */}
          <div className="flex items-center flex-grow px-0 mt-5">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="h-0.5 bg-red-400 flex-grow"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          </div>

          {/* Right participant image and button */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-200">
              <img
                src="/imgs/img2.png"
                alt={participant2.name}
                className="w-full h-full object-cover"
              />
            </div>
            {!isSettled && (
              <button
                onClick={(e) => handleBetClick(e, participant2.id)}
                className="bg-cripson hover:bg-red-600 text-white px-6 py-2 text-base font-medium transition-colors"
              >
                Button
              </button>
            )}
          </div>

          {/* Checkmark or chance circle (rightmost column) */}
          <div className="flex flex-col items-center ml-4 -mt-2">
            {isSettled ? (
              <div className="w-20 h-20 bg-vivid-green rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>

              </div>
            ) : (
              <>
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <svg className="w-16 h-16" viewBox="0 0 32 32">
                    {/* Background circle */}
                    <circle cx="16" cy="16" r="14" fill="#e5e7eb"/>
                    {/* First section (chance percentage) - blue */}
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="28"
                      strokeDasharray={`${(chance / 100) * 88} 88`}
                      strokeLinecap="butt"
                      transform="rotate(-90 16 16)"
                    />
                    {/* Second section (remaining percentage) - orange */}
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="28"
                      strokeDasharray={`${((100 - chance) / 100) * 88} 88`}
                      strokeDashoffset={`-${(chance / 100) * 88}`}
                      strokeLinecap="butt"
                      transform="rotate(-90 16 16)"
                    />
                  </svg>
                </div>
                <p className="text-xs text-gray-500 mt-1">Chance {chance}%</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex flex-wrap items-center justify-start mt-4 pt-3 border-t border-gray-100 gap-x-6">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1L2 12l10 10 10-10L12 1z" />
          </svg>
          <span>Volume {volume}</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BettingCard;
