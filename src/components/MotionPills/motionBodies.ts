import { rocksData } from '../../utils/data';
import { wordsData } from '../../utils/data';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

const combinedData = [...rocksData, ...wordsData];
shuffleArray(combinedData);

export function getMotionBodies() {
  const isLargeDevice = window.innerWidth > 768;

  const scale = isLargeDevice ? 0.8 : 0.5;
  const divisor = isLargeDevice ? 1.4 : 2;

  return combinedData.map((item) => {
    return {
      x: Math.floor(Math.random() * window.innerWidth),
      y: 0,
      width: item.width / divisor,
      height: item.height / divisor,
      render: {
        sprite: {
          texture: item.img,
          xScale: scale,
          yScale: scale
        }
      }
    }
  });
}