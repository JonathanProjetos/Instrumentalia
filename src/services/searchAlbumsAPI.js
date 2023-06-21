const searchAlbumsAPI = async (artist) => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  const response = results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }) => {
      const ReleaseDate = releaseDate.split('T')[0];
      const price = collectionPrice && collectionPrice.toFixed(2).replace('.', ',');
      return {
        artistId,
        artistName,
        collectionId,
        collectionName,
        price,
        artworkUrl100,
        ReleaseDate,
        trackCount,
      };
    },
  );
  return response;
};

export default searchAlbumsAPI;
