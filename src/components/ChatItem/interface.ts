export interface IChatItem {
  avatar: JSX.Element;
  header: JSX.Element;
  date: JSX.Element;
  message: JSX.Element;
  onClick: () => void
}