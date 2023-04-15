import Button from "../common/components/Button/Button.component.jsx"


export default {
  title: "Button",
  component: Button,
  argTypes: {
    height: { control: "text" },
    width: { control: "text" },
    backgroundColor: { control: "text" },
    animation: { control: "text" },
    color: { control: "text" },
    shadow: { control: "text" },
    description: { control: "text" }
  }
}

export function Default(args) {
  return <Button {...args} />;
}