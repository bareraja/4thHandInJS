// Data API fetching function
class Data {
	
  static getBitcoinData = async () =>
    await fetch(
      "https://apiv2.bitcoinaverage.com/constants/exchangerates/local"
    )
      .then(res => res.json())
      .then(data => data);
}

export default Data;
