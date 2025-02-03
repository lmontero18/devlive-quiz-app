import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

interface PlayerNameInputProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  onStart: () => void;
}

const PlayerNameInput: React.FC<PlayerNameInputProps> = ({
  playerName,
  setPlayerName,
  onStart,
}) => {
  return (
    <div className="flex flex-col gap-14">
      <InputField
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder=""
      />
      <Button
        label="Start Quiz"
        onClick={onStart}
        disabled={!playerName.trim()}
      />
    </div>
  );
};

export default PlayerNameInput;
