import React from "react";
import { useEffect } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "./Cryptoverse.scss";

const Cryptoverse = () => {
  const count = 10;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  console.log(cryptoList);

  const [cryptos, setCryptos] = useState();
  //loop through list
  useEffect(() => {

  }, [])

  if (isFetching) return "Loading...";
  return (
    <section className="crypto">
      <h1>Cryptoverse</h1>
      
    </section>
    );
};

export default Cryptoverse;
