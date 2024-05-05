import React, { useEffect } from "react";

const BouncingBall = () => {
  const ballRef = React.useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    ball.style.animation = "bounce 3s ease-in-out infinite";
  }, []);

  return (



    <div className=" mx-auto mt-10 h-10 bouncingallWrraper  border-white">
      <div ref={ballRef} className="ball" />
  </div>
  )
};

export default BouncingBall;