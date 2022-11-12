import "./styles.css";

import list from "./hello.preval";

document.body.innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <pre><code>${JSON.stringify(list, null, 2)}</code></pre>.
</div>
`;
