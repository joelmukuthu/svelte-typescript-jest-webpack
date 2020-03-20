<script lang="typescript">
  export let name: string;

  let buttonText: string = 'Button'

  function handleClick() {
    // trigger a TS error:
    buttonText = 1
  }
</script>

<h1>Hello {name}!</h1>

<button on:click="{handleClick}">{buttonText}</button>
