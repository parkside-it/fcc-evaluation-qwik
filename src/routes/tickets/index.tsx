import { component$, Host, useStyles$ } from "@builder.io/qwik";
import styles from "./tickets.css";

import { ticket, ticketTwo } from "../../shared/__mocks__/ticket";
import { stateColorMap } from "../../shared/interfaces/ticket";

import { Chip } from "~/components/chip/chip";
import { UserInitials } from "~/components/user-initials/user-initials";

export default component$(() => {
  useStyles$(styles);
  const tickets = [ticket, ticketTwo];
  return (
    <Host>
      <table class="tickets-table">
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th>Status</th>
          <th>Creation Date</th>
          <th>Assignee</th>
          <th>Priority</th>
          <th>Details</th>
        </tr>
        {tickets.map((ticket) => (
          <tr>
            <td class="text-center">{ticket.id}</td>
            <td>{ticket.name}</td>
            <td>
              <Chip
                state={
                  stateColorMap[ticket.status]
                    ? stateColorMap[ticket.status]
                    : ""
                }
                label={ticket.status}
              />
            </td>
            <td>{ticket.created}</td>
            <td>
              <UserInitials
                style="display: inline-block; padding-right: 3px;"
                initials="AM"
              />
              {ticket.createdBy.name}
            </td>
            <td>
              <Chip
                state={
                  stateColorMap[ticket.priority]
                    ? stateColorMap[ticket.priority]
                    : ""
                }
                label={ticket.priority}
              />
            </td>
            <td>
              <button
                onClick$={() =>
                  (window.location.href = `/ticket-detail/${ticket.id}`)
                }
              >
                Details
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Host>
  );
});
