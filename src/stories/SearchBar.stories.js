import SearchBar from "../common/components/SearchBar/SearchBar.component.jsx"

export default {
  title: "SearchBar",
  component: SearchBar,
}

export function Default(args) {
  return <SearchBar {...args} />;
}