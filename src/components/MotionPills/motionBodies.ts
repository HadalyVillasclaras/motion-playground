import stichite from '../../assets/images/rock-stichite.png';
import zinc from '../../assets/images/rock-zinc.png';
import { rocksData } from '../../utils/data';
import { wordsData } from '../../utils/data';

// mix rocks and words in the array.
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
  y: 0, 
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
];