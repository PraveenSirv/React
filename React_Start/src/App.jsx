import React, { useState } from "react";
import Card from "./components/card";

const users = [
  {
    name: "Aarav Sharma",
    age: 25,
    role: "Frontend Developer",
    email: "aarav.sharma@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya Verma",
    age: 24,
    role: "UI/UX Designer",
    email: "priya.verma@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rohan Mehta",
    age: 27,
    role: "Backend Developer",
    email: "rohan.mehta@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sneha Patel",
    age: 26,
    role: "QA Engineer",
    email: "sneha.patel@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Kunal Singh",
    age: 28,
    role: "DevOps Engineer",
    email: "kunal.singh@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Ananya Iyer",
    age: 23,
    role: "Product Analyst",
    email: "ananya.iyer@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Vikram Rao",
    age: 29,
    role: "Project Manager",
    email: "vikram.rao@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Neha Kapoor",
    age: 25,
    role: "Full Stack Developer",
    email: "neha.kapoor@example.com",
    profilePhoto: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextUser = () => {
    setCurrentIndex((prev) => (prev === users.length - 1 ? 0 : prev + 1));
  };

  const prevUser = () => {
    setCurrentIndex((prev) => (prev === 0 ? users.length - 1 : prev - 1));
  };

  return (
    //     <>
    //     <div className="parent">
    // <Card user='Praveen' age={25} img='https://plus.unsplash.com/premium_photo-1760544962324-6baac83843dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'/>
    //       <Card user="Rinku" img='https://images.unsplash.com/photo-1761839256951-10c4468c3621?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'/>
    //     </div>
    //     </>
    <>
      {/* <div className="parent">
        {users.map(function (elem) {
          return <>
          <Card
              role={elem.role}
              name={elem.name}
              img={elem.profilePhoto}
              email={elem.email}
              age={elem.age}
            />
          </>
        })}        
      </div> */}

      {/* <div className="parent">
        {users.map((user, index) => (
          <div key={index}>
            <Card user={user} />
          </div>
        ))}
      </div> */}

       <div className="parent">
      <Card user={users[currentIndex]} />

      <div style={{ marginTop: "20px" }}>
        <button style={{ padding: "10px 20px " , margin : "10px"}} onClick={prevUser}>⬅ Prev</button>
        <button style={{ padding: "10px 20px " , margin : "10px"}} onClick={nextUser}>Next ➡</button>
      </div>
    </div>
    </>
  );
};

export default App;
