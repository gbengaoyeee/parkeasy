import Divider from "@/components/shared/Divider";

const Header = () => {
  return (
    <div className="mb-3">
      <div className="flex justify-between">
        <h3 className="h3-bold">Create Profile and Get Verified</h3>
        <span className="flex-center gap-4">
          <img src="/assets/icons/bell.svg" alt="bell" />
          <div className="w-9 h-9 bg-primary-3 rounded-full" />
          Nicola Rich
        </span>
      </div>
      <ul className="flex-center gap-8 base-semibold mt-5">
        <li className="flex-center gap-1"><img src="/assets/icons/profile.svg" alt="" /> Profile Info</li>
        <li className="flex-center gap-1"><img src="/assets/icons/apartment.svg" alt="" /> Add Building</li>
      </ul>
      <Divider orientation="horizontal"/>
    </div>
  );
};

export default Header;
