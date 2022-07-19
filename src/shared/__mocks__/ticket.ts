import { UserRoles } from "../interfaces/user";
import { TicketPriority, TicketStatus } from "../interfaces/ticket";

const user = {
  id: "1",
  name: "Test User",
  email: "test@test.at",
  roles: [UserRoles.Admin],
};

export const ticket = {
  id: "1",
  name: "Test Ticket 1",
  description: "Test",
  priority: TicketPriority.Low,
  status: TicketStatus.Done,
  created: "15.07.2022",
  updated: "",
  assignee: user,
  createdBy: user,
};

export const ticketTwo = {
  id: "2",
  name: "Test Ticket 2",
  description: "Test",
  priority: TicketPriority.High,
  status: TicketStatus.Done,
  created: "15.07.2022",
  updated: "",
  assignee: user,
  createdBy: user,
};
