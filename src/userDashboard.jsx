import { useState } from "react";

export const UserDashboard = ({ isPremium }) => {
  const [credits, setCredits] = useState(100);

  if (!isPremium) {
    return <div>Upgrade to premium to see credits</div>;
  }

  return (
    <>
      <p>Credits {credits}</p>
      <button onClick={() => setCredits(0)}>Spend All</button>
    </>
  );
};
