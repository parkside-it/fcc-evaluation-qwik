import { component$, Host, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(
  (props: { fullWidth?: boolean }) => {
    useStyles$(styles);

    const pathname = useLocation().pathname;

    return (
      <Host class={{ "full-width": !!props.fullWidth }}>
        <div class="title">PS Tech Consulting Angular</div>
      </Host>
    );
  },
  {
    tagName: "header",
  }
);
