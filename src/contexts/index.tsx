import { ThemeContextProvider } from "./ThemeContext";

type ProviderType = ({ children }: { children: React.ReactNode }) => JSX.Element;

const composeProvider = (
  contextProviders: (ProviderType | React.FC | React.ComponentClass)[],
  children: React.ReactNode,
) =>
  contextProviders.reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);

const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  return composeProvider([ThemeContextProvider], children);
};

export default RootContextProvider;
