import { useState } from "react";

import useInterval from "use-interval";

import { TextInput } from "@mantine/core";

function App() {
  const [, setCounter] = useState(0);

  useInterval(() => setCounter((c) => c + 1), 250);

  return (
    <div>
      <h3>TextInput</h3>
      <TextInput label="A" />
      <TextInput label="B" />
      <TextInput label="C" />
      <TextInput label="D" />
      <TextInput label="E" />
    </div>
  );
}

export default App;
