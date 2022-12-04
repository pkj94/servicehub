const ADMIN = {
  emailId: 'admin@cqs.in',
  firstName: 'Admin',
  lastName: "",
  phoneNumber: '',
  isVerified: true,
  isRegistered: true,
  password: "8f52b869e3e6096e23e8dca903cee9dfb4d6d882324ff9038f52b869e3e6", //Roots@123
  isFirstLogin: false,
}

const ROLES = [
  {
    name: 'Admin',
    description: 'Administrator role',
  },
  {
    name: 'Supervisor',
    description: 'Supervisor role',
  },
  {
    name: 'Account Manager',
    description: 'Account Manager role',
  },
  {
    name: 'Rework Manager',
    description: 'Rework Manager role',
  },
  {
    name: 'Rework Engineer',
    description: 'Rework Engineer role',
  }
];

const WIP_STATUSES = [
  {
    name: "Jobcard Created",
    description: "Jobcard has been created and assigned to a workshop by the Admin. Waiting for Supervisor to assign it to a team."
  },
  {
    name: "Assigned To Team",
    description: "Jobcard has been assigned to a team by the Supervisor. Waiting for Rework Manager to assign it to a Bay and a Rework Engineer."
  },
  {
    name: "Assigned To Bay",
    description: "Jobcard has been assigned to a bay by the Rework Manager. He has to assign it to a Rework Engineer to start the work."
  },
  {
    name: "Assigned To Engineer",
    description: "Jobcard has been assigned to an Rework Engineer by the Rework Manager. Waiting for Rework Engineer to accept and start the job."
  },
  {
    name: "Rework Started",
    description: "Jobcard has been accepted and started by the Rework Engineer."
  },
  {
    name: "Hold",
    description: "Work on hold due to part unavailability or any other reason."
  },
  {
    name: "Rework Resumed",
    description: "Work has been resumed by Rework Engineer."
  },
  {
    name: "Awaiting RM Approval",
    description: "Jobcard has been completed by the Rework Engineer. Waiting for Rework Manager's approval."
  },
  {
    name: "Awaiting Supervisor Approval",
    description: "Jobcard has been completed and approved by Rework Manager. Waiting for Supervisor approval."
  },
  {
    name: "Rework Completed",
    description: "Jobcard has been completed and approved by the Supervisor."
  },
];

const TASK_STATUSES = [
  {
    name: "Started",
    description: "Vehicle task has been started"
  },
  {
    name: "Hold",
    description: "Vehicle task paused"
  },
  {
    name: "Resumed",
    description: "Vehicle task has been resumed"
  },
  {
    name: "Skipped",
    description: "Vehicle task has been skipped!"
  },
  {
    name: "Completed with Errors",
    description: "Vehicle task has been completed with errors!"
  },
  {
    name: "Completed",
    description: "Vehicle task has been completed!"
  },
];

module.exports = {
  ADMIN,
  ROLES,
  WIP_STATUSES,
  TASK_STATUSES,
}