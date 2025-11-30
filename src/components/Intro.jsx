import myPic from "../assests/profile.jpg"
function Intro() {
  return (
    <div className="section">
      <img
        src={myPic}
        alt="My Profile"
        width="150"
        style={{ borderRadius: "50%" }}
      />
      <h2>Alishba Nadeem</h2>
      <p>Email: nad.alishba@gmail.com</p>
      <p>Phone: 0300-4121809</p>
      <p>Location: Pakistan</p>
    </div>
  );
}

export default Intro;
