import "./styles.css";
import { createRoot } from "react-dom/client";

import list from "./hello.preval";
import Hello from "./hello.mdx";

const root = createRoot(document.getElementById("app"));

root.render(
  <>
    <h1>Hello Vanilla!</h1>
    <div>
      We use the same configuration as Parcel to bundle this sandbox, you can
      find more info about Parcel.
      <pre>
        <code>{JSON.stringify(list, null, 2)}</code>
      </pre>
    </div>
    <Hello />
  </>
);
