import { useEffect, useRef } from 'react';

export const MotionPills = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const p5 = window.p5;
    const Matter = window.Matter;

    const sketch = (p) => {
      let customFont;
      const Engine = Matter.Engine;
      const World = Matter.World;
      const Bodies = Matter.Bodies;
      const Body = Matter.Body;

      let engine;
      const words = [];
      let ground, wallLeft, wallRight;
      const wordsToDisplay = [
        "Quartz",
        "Stichtite",
        "Pyroxene",
        "Malachite",
        "Gypsum",
        "Rhodochrosite",
        "Augite",
        "Mica",
        "Talc",
        "Leucophanite",
        "Lawsonite",
      ];

      p.preload = () => {
        customFont = p.loadFont("/MonumentExtended-Bold.otf");
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 60);
        engine = Engine.create();

        ground = Bodies.rectangle(p.width / 2, p.height - 20, p.width, 10, {
          isStatic: true,
        });
        wallLeft = Bodies.rectangle(0, p.height / 2, 10, p.height, {
          isStatic: true,
        });
        wallRight = Bodies.rectangle(p.width, p.height / 2, 10, p.height, {
          isStatic: true,
        });

        World.add(engine.world, [ground, wallLeft, wallRight]);

        for (let i = 0; i < wordsToDisplay.length; i++) {
          words.push(new Word(p.random(p.width), -200, wordsToDisplay[i]));
        }
      };

      p.draw = () => {
        p.background("#2d2d30");
        Engine.update(engine);
        for (const word of words) {
          word.show();
        }
      };

      class Word {
        constructor(x, y, word) {
          this.body = Bodies.rectangle(x, y, word.length * 20, 40);
          this.word = word;
          World.add(engine.world, this.body);
        }

        show() {
          const pos = this.body.position;
          const angle = this.body.angle;

          p.push();
          p.translate(pos.x, pos.y);
          p.rotate(angle);
          p.rectMode(p.CENTER);
          p.fill('#cfa3c1');
          p.stroke("#fff");
          p.strokeWeight(3);
          p.rect(0, 0, this.word.length * 30 + 80, 100, 60);
          p.noStroke();
          // p.textFont(customFont);
          p.fill("#fff");
          p.textSize(30);
          p.textAlign(p.CENTER, p.CENTER);
          p.text(this.word.toUpperCase(), 0, 0);
          p.pop();
        }
      }

      p.mouseMoved = () => {
        for (const word of words) {
          if (
            p.dist(p.mouseX, p.mouseY, word.body.position.x, word.body.position.y) < 50
          ) {
            Body.applyForce(
              word.body,
              { x: word.body.position.x, y: word.body.position.y },
              { x: p.random(-0.2, 0.2), y: p.random(-0.2, 0.2) }
            );
          }
        }
      };
    };

    new p5(sketch, canvasRef.current);

    return () => {
      // Cleanup 
    };
  }, []);

  return <div style={{height:'100%'}} ref={canvasRef}></div>;
};
