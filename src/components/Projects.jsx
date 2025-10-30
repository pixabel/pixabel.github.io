import React, { useState } from "react";
import csharpLogo from "../assets/csharp.png"; 
import "../components/Style/index.css";

function Projects() {
  // Modal state: holds which project modal is open, or null if none
  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="projects">
      <h4>Projects</h4>
      <div className="row">
        {/* Project 1: Airportsimulator */}
        <div className="col-md-4 project-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Airportsimulator</h5>
              <img src={csharpLogo} height="20px" alt="C#" />
              <p className="card-text">
                A Windows Forms application built in C# that simulates
                an airport environment, allowing users to manage
                aircraft takeoffs, landings, calculate flight times, and
                more.
              </p>
              <a
                href="https://github.com/pixabel/airportsimulator.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <i className="fab fa-github"></i> View on GitHub
              </a>
              <button
                type="button"
                className="btn btn-dark ms-2"
                onClick={() => setOpenModal("airportsimulator")}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
        {/* Project 2: AnimalManager */}
        <div className="col-md-4 project-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">AnimalManager</h5>
              <img src={csharpLogo} height="20px" alt="C#" />
              <p className="card-text">
                AnimalManager is a C# application designed to streamline
                the management of animals. It allows users to track and
                manage details about various animals.
              </p>
              <a
                href="https://github.com/pixabel/AnimalManager.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <i className="fab fa-github"></i> View on GitHub
              </a>
              <button
                type="button"
                className="btn btn-dark ms-2"
                onClick={() => setOpenModal("animalmanager")}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
        {/* Project 3: Math Zombies */}
        <div className="col-md-4 project-item">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Math Zombies</h5>
              <i className="fa-brands fa-python" style={{ fontSize: "20px" }}></i>
              <p className="card-text">
                MathZombies is an educational application that blends
                the excitement of a zombie-themed game with the
                challenge of solving math problems. Built using Python.
              </p>
              <a
                href="https://github.com/pixabel/mathzombies.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <i className="fab fa-github"></i> View on GitHub
              </a>
              <button
                type="button"
                className="btn btn-dark ms-2"
                onClick={() => setOpenModal("mathzombies")}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {openModal === "airportsimulator" && (
        <Modal
          title="AirportSimulator Details"
          onClose={() => setOpenModal(null)}
          githubLink="https://github.com/pixabel/airportsimulator.git"
        >
          <p>
            AirportSimulator is a desktop application I built for
            my C# II class at Malmö University, using C# and
            Windows Forms, simulating the operations of an airport
            in real-time. This project provides users with the
            ability to manage various aspects of airport activity,
            focusing on the scheduling and coordination of
            aircraft movements. <br /><br />
            <strong>Key Features:</strong> <br />
            Flight Scheduling: Users can simulate both takeoff and
            landing operations for multiple aircraft. <br />
            Aircraft Management: Allows tracking of multiple
            aircraft, including details such as model, flight
            number, origin, and destination. <br />
            Runway Utilization: The application efficiently
            manages runway availability, ensuring that no two
            aircraft are using the same runway simultaneously.
            <br />
            Time Simulation: Calculate and display estimated
            arrival times based on real-world data. <br />
            Emergency Handling: Simulate emergency landings and
            prioritize emergency flights. <br />
            Realistic Visual Representation: A simplified yet
            functional user interface simulates the flow of air
            traffic at an airport. <br />
            <br />
            This application serves as a demonstration of how
            object-oriented principles can be applied to simulate
            real-world systems. It showcases my skills in C#,
            event-driven programming, and design through the use
            of Windows Forms.
          </p>
        </Modal>
      )}
      {openModal === "animalmanager" && (
        <Modal
          title="AnimalManager Details"
          onClose={() => setOpenModal(null)}
          githubLink="https://github.com/pixabel/AnimalManager.git"
        >
          <p>
            AnimalManager is a comprehensive C# application that
            simplifies the management of animal information for
            various users. It provides a user-friendly interface
            where users can track and manage animals'
            characteristics, health records, and habitat
            information. <br /><br />
            <strong>Key Features:</strong> <br />
            - Animal Tracking: Add and view detailed information
            about animals, including breed, age, health records,
            and more. <br />
            - Health Record Management: Keep track of veterinary
            visits, medical records, and treatments. <br />
            - Habitat Information: Record and manage details about
            the living environment for each animal. <br />
            - User-Friendly Interface: Built using Windows Forms,
            ensuring a smooth and intuitive user experience.
            <br />
            - Database Integration: Efficiently stores data for
            easy access and retrieval, ensuring scalability and
            performance. <br />
          </p>
        </Modal>
      )}
      {openModal === "mathzombies" && (
        <Modal
          title="Math Zombies More Details"
          onClose={() => setOpenModal(null)}
          githubLink="https://github.com/pixabel/mathzombies.git"
        >
          <p>
            This Python program is an interactive math-based game
            called "Math Zombies!" where players must solve math
            questions to avoid encountering zombies behind doors.
            <br /><br />
            <strong>Here's an overview of its functionality:</strong> <br />
            - Question Generation: Based on the player's chosen
            operation (multiplication, division, or modulus),
            random math questions are generated. For
            multiplication, the user selects a table, while for
            division and modulus, a divisor is chosen. <br />
            - Gameplay: The player is asked to solve 12 randomly
            generated math questions. For each correct answer,
            they must choose one of several doors, behind which
            zombies may be hiding. The number of doors decreases
            as the player progresses, increasing the challenge.
            <br />
            - User Interaction: The player inputs their answers
            and door choices. If they solve all the questions
            correctly and avoid zombies, they win. Incorrect
            answers or bad door choices end the game. <br />
            - Replay Option: After each game, the player is asked
            if they want to play again. The program emphasizes
            user input validation, randomization for question
            generation, and a simple but fun storyline to engage
            users in solving math problems.
          </p>
        </Modal>
      )}
    </section>
  );
}

// A simple modal component
function Modal({ title, children, onClose, githubLink }) {
  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;