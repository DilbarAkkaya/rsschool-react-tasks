export async function getData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

export default function searchData(param: string) {
  console.log('OK1')
  return getData(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`);
}
