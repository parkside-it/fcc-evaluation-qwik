import { component$, Host, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./ticket-detail.css";

import { Chip } from "~/components/chip/chip";
import { UserInitials } from "~/components/user-initials/user-initials";

import { ticket, ticketTwo } from "../../shared/__mocks__/ticket";
import { stateColorMap, statusTextMap } from "../../shared/interfaces/ticket";

export default component$(() => {
  useStyles$(styles);
  const { params } = useLocation();
  const tickets = [ticket, ticketTwo];
  let selectedTicket = tickets.find((ticket) => ticket.id === params.id);
  if (!selectedTicket) {
    selectedTicket = ticket;
  }
  return (
    <Host>
      <div class="go-back">
        <a href="/tickets">
          <span>&#8592;</span>
          Tickets
        </a>
      </div>
      <div class="ticket-detail">
        <div style="float: right">
          <Chip
            state={
              stateColorMap[selectedTicket.status]
                ? stateColorMap[selectedTicket.priority]
                : ""
            }
            label={selectedTicket.priority}
          />
        </div>
        <h2>{selectedTicket.name}</h2>
        <p>{selectedTicket.description}</p>
        <p>
          <b>Creation date: </b> {selectedTicket.created}
        </p>
        <p style="display: inline">
          <b>Assignee: </b>
          <UserInitials
            style="display: inline-block; padding-right: 3px;"
            initials="AM"
          />
          {selectedTicket.createdBy.name}
        </p>
        <select>
          <option value="TODO">{statusTextMap.TODO}</option>
          <option value="IN_PROGRESS">{statusTextMap.IN_PROGRESS}</option>
          <option value="IN_REVIEW">{statusTextMap.IN_REVIEW}</option>
          <option value="DONE">{statusTextMap.DONE}</option>
        </select>
      </div>
    </Host>
  );
});
