import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  useVisibleTask$(() => {
    console.log("hi");
  });

  return (
    <div>
      <p>Count: {count.value}</p>
      <p>
        <button onClick$={() => count.value++}>Increment</button>
      </p>
    </div>
  );
});

export const Debug = {
  Counter,
};
