import Title from "../atoms/Title";
import PlayerNameInput from "../molecules/PlayerNameInput";

interface HomeContentProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  onStart: () => void;
}

const HomeContent: React.FC<HomeContentProps> = ({
  playerName,
  setPlayerName,
  onStart,
}) => {
  return (
    <div className="p-10 m-10 flex flex-col gap-10 w-1/4">
      <Title />
      <PlayerNameInput
        playerName={playerName}
        setPlayerName={setPlayerName}
        onStart={onStart}
      />
    </div>
  );
};

export default HomeContent;
