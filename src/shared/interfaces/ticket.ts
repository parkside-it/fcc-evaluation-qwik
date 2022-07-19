export enum TicketPriority {
  High = "HIGH",
  Medium = "MEDIUM",
  Low = "LOW",
}

export enum TicketStatus {
  Todo = "TODO",
  InProgress = "IN_PROGRESS",
  InReview = "IN_REVIEW",
  Done = "DONE",
}

export const statusTextMap = {
  [TicketStatus.Done]: "Done",
  [TicketStatus.InProgress]: "In progress",
  [TicketStatus.InReview]: "In review",
  [TicketStatus.Todo]: "Todo",
};

export const chipColorClassNameMap = {
  GREEN: "green",
  ORANGE: "orange",
  RED: "red",
};

export const stateColorMap = {
  [TicketStatus.Done]: chipColorClassNameMap.GREEN,
  [TicketStatus.InProgress]: chipColorClassNameMap.ORANGE,
  [TicketStatus.InReview]: chipColorClassNameMap.ORANGE,
  [TicketStatus.Todo]: chipColorClassNameMap.RED,
  [TicketPriority.High]: chipColorClassNameMap.RED,
  [TicketPriority.Medium]: chipColorClassNameMap.ORANGE,
  [TicketPriority.Low]: chipColorClassNameMap.GREEN,
};
