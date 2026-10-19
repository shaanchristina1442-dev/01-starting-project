const reactDescriptions = ["Fundemental", "React", "Core"]


function UserData() {
  user = {
      first: "British airways",
      second: "Air France",
      firstId: 1200,
      secondId: 1201,
    };
  return (
    <section>
      <h2>User Data</h2>
      <p className="User-data">This a list of unregulated data</p>
      <img src = "src/react/assets.jpg" alt="User Data" />
      <ul>
        <li>{user.first} ({user.firstId})</li>
        <li>{user.second} ({user.secondId})</li>  
      </ul>
    </section>
  );
}
export default UserData;
