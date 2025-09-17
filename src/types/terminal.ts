export interface Command {
  command: string;
  output: string[] | string;
  isError?: boolean;
  showMenu?: boolean;
}

export interface MenuOption {
  command: string;
  description: string;
}
