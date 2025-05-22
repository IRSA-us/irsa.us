import PanelDivider from "./PanelDivider";

const Footer = () => {
  return (
    <footer className="flex-grow w-full h-[300px] bg-[rgb(0,0,0,0.4)]">
      <PanelDivider height={3} />
      <div className="w-full h-full flex items-center justify-center">
        Footer
      </div>
    </footer>
  );
};

export default Footer;
