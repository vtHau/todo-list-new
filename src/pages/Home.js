import React, { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Trang chủ";
  }, []);

  return (
    <div>
      <h2 className="title-home">React App</h2>
    </div>
  );
}

export default Home;
