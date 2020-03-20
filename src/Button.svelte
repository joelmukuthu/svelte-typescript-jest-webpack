<script lang="typescript">
  import logo from './logo.png';

  export let name: string;

  let buttonText: string = 'Button'

  function handleClick() {
    buttonText = 'Button Clicked'
  }
</script>

<h1>Hello {name}!</h1>

<img src={logo} alt="some image" />

<button on:click="{handleClick}">{buttonText}</button>
