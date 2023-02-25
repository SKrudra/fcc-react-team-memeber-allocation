const Header = ({ selectedTeam, numberOfEmployees }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Memeber Allocation</h1>
          <h2>
            {selectedTeam} has {numberOfEmployees} members.
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
