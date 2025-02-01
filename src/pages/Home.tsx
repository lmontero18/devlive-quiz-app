import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeTemplate from "../templates/HomeTemplate";

const Home: React.FC = () => {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz", { state: { playerName } });
  };

  return (
    <WelcomeTemplate
      playerName={playerName}
      setPlayerName={setPlayerName}
      onStart={handleStartQuiz}
    />
  );
};

export default Home;
