import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams = [
      {
        id: 11,
        name: "Mr. Nice",
        images: [
          "https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg",
          "https://www.youtube.com/watch?v=_m8EyO5kG2E",
          "http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg",
          "https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg",
          "https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg",
        ],
        marker: {
          lat: -32.9384566,
          lng: -60.6369745
        },
        post: "https://www.instagram.com/p/Bk5AO12naju/",
        shortDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus congue ante a maximus.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in urna dignissim dictum. Integer posuere venenatis erat sed condimentum. Maecenas non fermentum augue."
      },
      {
        id: 12,
        name: "Narco",
        images: [
          "https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg",
          "https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg",
          "http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg",
          "https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg",
        ],
        marker: {
          lat: -32.932245,
          lng: -60.646825
        },
        post: "https://www.instagram.com/p/BjOMDnqBDqK/",
        shortDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus congue ante a maximus. Etiam vitae nunc id ante euismod elementum. Suspendisse vel lobortis massa.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in urna dignissim dictum. Integer posuere venenatis erat sed condimentum. Maecenas non fermentum augue. Cras vitae leo vitae velit accumsan suscipit. Duis dapibus quis felis eu varius. Nulla luctus neque ut turpis faucibus bibendum. Donec vel magna id nibh euismod ultricies sit amet quis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer elementum vel elit eget congue. Aliquam fringilla neque sit amet mi scelerisque viverra. Duis auctor dignissim hendrerit. Aenean condimentum vulputate porta. Ut at ultricies lacus. Vivamus efficitur velit vitae neque rhoncus, hendrerit gravida sapien dictum. Nam sagittis ultricies dui faucibus sodales. Curabitur vitae felis nec magna auctor eleifend. Pellentesque faucibus augue id dui molestie mollis in vel sem. Aliquam a tincidunt massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ac lobortis sapien. Nam vestibulum sem felis, vel malesuada velit fermentum sit amet. Maecenas ornare vehicula augue. Cras tellus felis, lobortis at lectus egestas, interdum blandit ligula. Quisque euismod arcu enim. Ut consectetur, neque a faucibus condimentum, orci libero tincidunt leo, quis ultricies justo magna ut mi. Vivamus id leo quis est hendrerit tincidunt. Aliquam luctus suscipit dignissim. Praesent vulputate hendrerit felis pretium dapibus. Donec molestie, augue id gravida dapibus, elit ligula facilisis nibh, et tincidunt dui enim vitae felis. Donec sed ipsum sem."
      },
      {
        id: 13,
        name: "Bombasto",
        marker: {
          lat: -32.931328,
          lng: -60.65135
        },
        post: "https://www.instagram.com/p/Bi8avOnhfd1/",
        shortDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus congue ante a maximus. Etiam vitae nunc id ante euismod elementum. Suspendisse vel lobortis massa.",
        images: [
          "http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg",
          "https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg",
          "https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg",
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in urna dignissim dictum. Integer posuere venenatis erat sed condimentum. Maecenas non fermentum augue. Cras vitae leo vitae velit accumsan suscipit. Duis dapibus quis felis eu varius. Nulla luctus neque ut turpis faucibus bibendum. Donec vel magna id nibh euismod ultricies sit amet quis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer elementum vel elit eget congue. Aliquam fringilla neque sit amet mi scelerisque viverra. Duis auctor dignissim hendrerit. Aenean condimentum vulputate porta. Ut at ultricies lacus. Vivamus efficitur velit vitae neque rhoncus, hendrerit gravida sapien dictum. Nam sagittis ultricies dui faucibus sodales. Curabitur vitae felis nec magna auctor eleifend. Pellentesque faucibus augue id dui molestie mollis in vel sem. Aliquam a tincidunt massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ac lobortis sapien. Nam vestibulum sem felis, vel malesuada velit fermentum sit amet. Maecenas ornare vehicula augue. Cras tellus felis, lobortis at lectus egestas, interdum blandit ligula. Quisque euismod arcu enim. Ut consectetur, neque a faucibus condimentum, orci libero tincidunt leo, quis ultricies justo magna ut mi. Vivamus id leo quis est hendrerit tincidunt. Aliquam luctus suscipit dignissim. Praesent vulputate hendrerit felis pretium dapibus. Donec molestie, augue id gravida dapibus, elit ligula facilisis nibh, et tincidunt dui enim vitae felis. Donec sed ipsum sem."
      }
    ];

    return { teams };
  }
}
