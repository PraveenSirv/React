import React from 'react'

const Card = ({user}) => {
  const {name,profilePhoto,role,age,email} = user
  return (
    <>
    <div className="card">
      <img src={profilePhoto} alt={name} />
      <h1>{name}</h1>
      <p>Age : {age} <br/>
      Email : {email} <br />
      Role : {role}
      </p>
      {/* <button>View Profile</button> */}
    </div>
    </>
  )
}

// const Card = (props) => {
//   const { name, age, role, email, profilePhoto } = props.user;

//   return (
//     <div className="card">
//       <img src={profilePhoto} alt={name} />
//       <h1>{name}</h1>
//       <p>
//         Age: {age} <br />
//         Email: {email} <br />
//         Role: {role}
//       </p>
//     </div>
//   );
// };


export default Card