import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const Canvas = component$(() => {
  console.log(":(");

  useVisibleTask$(() => {});

  return (
    <div>
      <div>test?</div>
    </div>
  );
});
