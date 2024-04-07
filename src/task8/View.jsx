const View = ({ userDetails }) => {
  if (userDetails) {
    const { firstname, lastname, role, phone, email } = userDetails;
    return (
      <div>
        <h2>Your form inputs</h2>
        <div>
            <p>Name: {firstname} {lastname}</p>
            <p>Phone number: {phone}</p>
            <p>E-mail: {email}</p>
            <p>Role: {role}</p>
        </div>
      </div>
    );
  }
};

export default View;
