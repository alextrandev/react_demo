const UserProfile = ({ user, handleLogOut }) => (
  <>
    <h1>Welcome, {user}!</h1>
    {/* TODO: Include handleLogOut function in the onClick event to log the user out */}
    <button onClick={handleLogOut}>Log out</button>
  </>
);

export default UserProfile;
