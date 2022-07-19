import { component$, useStyles$ } from "@builder.io/qwik";

export const Chip = component$((props: { label: string; state: string }) => {
  useStyles$(`
  .ticket-chip {
    padding: 0 5px;
    max-width: 100px;
    width: auto;
    line-height: 25px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid gray;
    text-transform: lowercase;
  }

  .ticket-chip::first-letter {
    text-transform: uppercase;
  }

  .green {
    background-color: #4caf50;
    color: white;
  }

  .orange {
    background-color: #f9a825;
    color: white;
  }

  .red {
    background-color: #d32f2f;
    color: white;
  }
`);

  return <div class={props.state + " ticket-chip"}>{props.label}</div>;
});
