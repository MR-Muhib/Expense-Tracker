import BalanceInfo from "./components/home/balanceInfo/BalanceInfo";
import TrackerForm from "./components/home/form/TrackerForm";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between">
        <div className="w-[40%]">
          <TrackerForm />
        </div>

        <div className="w-[60%]">
          <BalanceInfo />
        </div>
      </div>
    </div>
  );
}
