import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {
        id: 11,
        name: "Mr. Nice",
        images: [
          "https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg",
          "http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg",
          "https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg",
          "https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg",
          "http://littleguyintheeye.com/wp-content/uploads/2014/08/nature-3.jpg"
        ]
      },
      {
        id: 12,
        name: "Narco",
        images: [
          "https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg",
          "http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg",
          "https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg",
          "https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg",
          "http://littleguyintheeye.com/wp-content/uploads/2014/08/nature-3.jpg"
        ]
      },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "RubberMan" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" }
    ];

    return { teams };
  }
}
