import HeaderComponent from "../../common/components/layouts/WebpageWrapper/header.component.jsx"

export default {
  title: "Header",
  component: HeaderComponent
}

export function Default(args) {
  return <HeaderComponent {...args} />;
}