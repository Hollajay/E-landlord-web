import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const HeadlessUi = () => {
  return (
    <Menu>
      <MenuButton>Options</MenuButton>
      <MenuItems
        anchor="bottom start"
        className="[--anchor-gap:8px] [--anchor-padding:8px]"
      >
        <MenuItem>
          <button>Edit</button>
        </MenuItem>
        <MenuItem>
          <button>Duplicate</button>
        </MenuItem>
        <hr />
        <MenuItem>
          <button>Archive</button>
        </MenuItem>
        <MenuItem>
          <button>Delete</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}