import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from '../src/components/ProductCard'; // Importing ProductCard component

function App() {
  const { data, isLoading, isError } = useQuery('goods', async () => {
    const res = await axios.get('http://localhost:3001/goods');
    return res.data;
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const likeGoods = data.filter((good) => good.status === true);
  const selseGoods = data.filter((good) => good.isBlackFriday);

  const sortedGoods = [...likeGoods, ...selseGoods];

  const slicedGoods = sortedGoods.slice(0, 15);

  const Armchairs = data.filter((good) => good.type === 'furniture');
  const PC = data.filter((good) => good.type === 'PC');
  const TV = data.filter((good) => good.type === 'TV');
  const audio = data.filter((good) => good.type === 'audio');
  const kitchen = data.filter((good) => good.type === 'kitchen');

  const sections = [
    { slider: "", type: "Armchairs", arr: Armchairs },
    { slider: "", type: "PC", arr: PC },
    { slider: "", type: "TV", arr: TV },
    { slider: "", type: "Audio", arr: audio },
    { slider: "", type: "Kitchen", arr: kitchen },
  ];

  return (
    <>
    <div className="prods_div">
      {slicedGoods.map((good) => (
        <ProductCard key={good.id} good={good} />
      ))}
    </div>
    {sections.map((item, i) => (
      <section key={i} className="section_style">
        <div>
          <h1>
            <p>{item.type}</p>
          </h1>
          <div className="prods_div">
            {item.arr.map((good) => (
              <ProductCard key={`${good.id}_${good.type}`} good={good} />
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
  );
}

export default App;
