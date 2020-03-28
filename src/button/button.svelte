<script lang="typescript">
  import logo from "./logo.png";

  export let name: string;

  let buttonText: string = "Button";

  function handleClick() {
    buttonText = "Button Clicked";
  }

  // These lines are not covered by tests:
  const add = (a: number, b: number) => a + b;
  add(1, 2);
</script>

<h1>Hello {name}!</h1>

<img src={logo} alt="the logo" />

<button on:click={handleClick}>{buttonText}</button>
