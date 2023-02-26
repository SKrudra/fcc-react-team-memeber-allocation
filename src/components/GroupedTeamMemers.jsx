import { useState } from "react";

const GroupedTeamMemers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  function groupTeamMembers() {
    let teams = [];
    teams.push({
      team: "TeamA",
      members: employees.filter((employee) => employee.teamName === "TeamA"),
      collapsed: selectedTeam === "TeamA" ? false : true,
    });
    teams.push({
      team: "TeamB",
      members: employees.filter((employee) => employee.teamName === "TeamB"),
      collapsed: selectedTeam === "TeamB" ? false : true,
    });
    teams.push({
      team: "TeamC",
      members: employees.filter((employee) => employee.teamName === "TeamC"),
      collapsed: selectedTeam === "TeamC" ? false : true,
    });
    teams.push({
      team: "TeamD",
      members: employees.filter((employee) => employee.teamName === "TeamD"),
      collapsed: selectedTeam === "TeamD" ? false : true,
    });
    return teams;
  }

  const handleTeamClick = (event) => {
    const transformedGroupData = groupedEmployees.map((groupData) =>
      groupData.team === event.currentTarget.id
        ? { ...groupData, collapsed: !groupData.collapsed }
        : groupData
    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  };

  return (
    <div className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            id={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team: {item.team}
            </h4>
            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">{member.fullName}</span>
                    </h5>
                    <p>{member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupedTeamMemers;
