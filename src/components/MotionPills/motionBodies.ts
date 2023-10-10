import stichite from '../../assets/images/rock-stichite.png';
import zinc from '../../assets/images/rock-zinc.png';
import { rocksData } from '../../assets/images/index';
import { wordsData } from '../../assets/images/index';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

const combinedData = [...rocksData, ...wordsData];

shuffleArray(combinedData);

export const motionBodies = combinedData.map((item, i) => ({
  x: Math.floor(Math.random() * window.innerWidth),
  y: 0,   // You can adjust this value if needed
  width: item.width / 1.5,
  height: item.height / 1.5,
  render: {
    sprite: {
      texture: item.img,
      xScale: 0.75,
      yScale: 0.75
    }
  }
}));

export const motionBodiess = [
  {
    x: 100,
    y: 0,
    width: 300,
    height: 240,
    render: {
      sprite: {
        texture: 'img',
        xScale: 0.5,
        yScale: 0.5
      }
    }
  },
  {
    x: 120,
    y: 0,
    width: 250,
    height: 306,
    render: {
      sprite: {
        texture: stichite,
        xScale: 0.5,
        yScale: 0.5
      }
    }
  },
  {
    x: 300,
    y: 140,
    width: 300,
    height: 260,
    render: {
      sprite: {
        texture: zinc,
        xScale: 0.5,
        yScale: 0.5
      }
    }
  },
  // {
  //   x: 400,
  //   y: 160,
  //   width: 80,
  //   height: 130,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // },
  // {
  //   x: 500,
  //   y: 180,
  //   width: 90,
  //   height: 140,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // },
  // {
  //   x: 600,
  //   y: 200,
  //   width: 100,
  //   height: 150,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // },
  // {
  //   x: 700,
  //   y: 220,
  //   width: 110,
  //   height: 160,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // },
  // {
  //   x: 800,
  //   y: 240,
  //   width: 120,
  //   height: 170,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // },
  // {
  //   x: 900,
  //   y: 260,
  //   width: 130,
  //   height: 180,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // },
  // {
  //   x: 1000,
  //   y: 280,
  //   width: 140,
  //   height: 190,
  //   render: {
  //     sprite: {
  //       texture: kImage,
  //       xScale: 1,
  //       yScale: 1
  //     }
  //   }
  // }

];