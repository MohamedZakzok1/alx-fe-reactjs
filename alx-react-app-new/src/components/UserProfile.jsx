import PropTypes from 'prop-types';

const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      boxShadow: '4px 4px 10px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', fontSize: '1.1em' }}>Bio: {props.bio}</p>
    </div>
  );
}; 

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired
};

export default UserProfile;
