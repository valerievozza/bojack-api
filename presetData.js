const unknown = {
    id: "unknown",
    name: "unknown",
    birthDate: "unknown",
    birthPlace: "unknown",
    species: "unknown",
    voiceActor: "unknown",
    image: "unknown",
    quote: "unknown",
  };

const endPoint = {
    characters: "https://bojack-api.herokuapp.com/api/characters",
    searh_by_id: "https://bojack-api.herokuapp.com/api/characters/ Character Id",
    searh_by_name: "https://bojack-api.herokuapp.com/api/characters/name/ Name Character"
}
 

module.exports = {
    unknown: unknown,
    endPoints: endPoint
}