import { component$, useStyles$ } from "@builder.io/qwik";

export const UserInitials = component$((props: { initials: string }) => {
  useStyles$(`
  .user-initials {
    padding: 5px;
    width: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50px;
    background-color: blue;
    color: white;
    font-weight: bold;
  }
`);

  return <div class="user-initials">{props.initials}</div>;
});
