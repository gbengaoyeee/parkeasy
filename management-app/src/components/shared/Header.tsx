import Divider from "@/components/shared/Divider";

const Header = () => {
  return (
    <div className="mb-3">
      <div className="flex justify-end mb-4">
        <span className="flex-center gap-4">
          <img src="/assets/icons/bell.svg" alt="bell" />
          <div className="w-9 h-9 bg-primary-3 rounded-full" />
          Nicola Rich
        </span>
      </div>
      <Divider orientation="horizontal"/>
    </div>
  );
};

export default Header;
