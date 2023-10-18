import { Theme } from '../../context/theme/ThemeContext';
import { rocksData } from '../../utils/data';
import { wordsData, wordsDataDark } from '../../utils/data';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

export function getMotionBodies(theme: Theme) {
  const dataToUse = theme === 'light' ? wordsDataDark : wordsData;
  const combinedData = [...rocksData, ...dataToUse];
  shuffleArray(combinedData);

  const isLargeDevice = window.innerWidth > 768;

  const scale = isLargeDevice ? 0.75 : 0.5;
  const divisor = isLargeDevice ? 1.5 : 2;

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