// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
require('@testing-library/jest-dom/extend-expect')

const  { render, fireEvent } = require( '@testing-library/svelte')

const  Button = require( './Button.svelte')

it('shows proper heading when rendered', () => {
  const { getByText } = render(Button, { name: 'World' })

  expect(getByText('Hello World!')).toBeInTheDocument()
})

// Note: This is as an async test as we are using `fireEvent`
it('changes button text on click', async () => {
  const { getByText } = render(Button, { name: 'World' })
  const button = getByText('Button')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(button).toHaveTextContent('Button Clicked')
})
