import HomeContent from "../components/organisms/HomeContent";

interface HomeTemplateProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  onStart: () => void;
}

const WelcomeTemplate: React.FC<HomeTemplateProps> = ({
  playerName,
  setPlayerName,
  onStart,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <HomeContent
        playerName={playerName}
        setPlayerName={setPlayerName}
        onStart={onStart}
      />
    </div>
  );
};

export default WelcomeTemplate;
