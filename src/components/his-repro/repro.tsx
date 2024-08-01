import { component$, useVisibleTask$ } from "@builder.io/qwik";

export const Canvas = component$<CanvasProps>(() => {
  console.log(":(");

  useVisibleTask$(() => {});

  return (
    <div>
      <div>test?</div>
    </div>
  );
});
