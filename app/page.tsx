import { Button } from "@/components/ui/button";

const Home = () => {
    return <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl">ようこそプログラミングチュートリアルへ</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatibus, est magnam nam ipsum placeat voluptatum dolor vero facere doloremque.</p>
      </div>
      <div className="flex gap-4 items-center">
      <Button>Click Here</Button>
      <Button>Click Here</Button>
      </div>
    </main>;
};

export default Home;