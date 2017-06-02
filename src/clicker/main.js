import Button from './_button';
import Counter from './_counter';
import Milestone from './_milestone';

export const main = () => {
  const mainContainer = document.createElement('div');

  // set up counter
  const counter = new Counter({
    count: 0,
    incrementBy: 1
  });
  mainContainer.appendChild(counter.DOMElement);
  
  const mileStones = [
    new Milestone({
      counter,
      threshold: 50,
      onHit: () => {
        console.log('reached 50')
      }
    })
  ];

  // set up button
  const button = new Button({
    onClick: counter::counter.increment
  });
  mainContainer.appendChild(button.DOMElement);
  
  const gameLoop = () => {
    counter.refresh();
  };
  
  // auto-increment counter every second
  setInterval(counter::counter.increment, 1000);
  
  // update game at roughly 30 FPS
  setInterval(gameLoop, 1000/30.0)

  return mainContainer;
};
