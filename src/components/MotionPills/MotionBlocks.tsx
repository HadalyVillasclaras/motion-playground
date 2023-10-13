import { useEffect, useRef, useState } from 'react'
import { Engine, Render, World, Runner, Body, Bodies, Composite, Mouse, MouseConstraint, Events, IChamferableBodyDefinition } from 'matter-js';
import { getMotionBodies } from './motionBodies';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export const MotionBlocks = () => {
  const canvasDivRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef(null);  
  const renderRef = useRef(null);
  const [motionBodies, setMotionBodies] = useState(getMotionBodies());

  useEffect(() => {
    if (!canvasDivRef.current) return;

    const canvasDiv = canvasDivRef.current;
    const canvasHeight = canvasDiv.clientHeight;
    const canvasWidth = canvasDiv.clientWidth;

    const engine = Engine.create({ 
      positionIterations: 8,
      velocityIterations: 8
    });
    const runner = Runner.create();

    const render = Render.create({
      element: canvasDiv,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: 'transparent'
      },
    });

    engineRef.current = engine;
    renderRef.current = render;

    // Bodies
    const bodyProperties = {
      restitution: 0,   // 0-1 Very little bounciness
      friction: 1,        //  0 means no friction (like ice), and a value of 1 means high frictio
      frictionStatic: 1, // Higher static friction
      density: 10,
      frictionAir: 0.05,
      slop: 0.05,
    };

    const bodyPropertiess = {
      restitution: 0.2,      // Very low bounce for rocks
      friction: 0.05,         // High friction because rocks have a rough surface
      frictionStatic: 0.05,   // Even higher static friction to resist initial movement
      density: 0.001,         // Increase the density to make it feel heavier
      frictionAir: 0.02,     // Small air resistance; rocks aren't affected by air much
      slop: 0.2,            // Tolerance for penetration, making collisions more stable
      //inertia: 0,     // Prevents rocks from spinning easily
      //timeScale: 1           // Speed multiplier; you can adjust if you want to slow down or speed up the physics
    };

    const bodies = motionBodies.map(config => {
      const mergedProperties = {
        ...bodyProperties,
        render: config.render
      };

      return Bodies.rectangle(config.x, config.y, config.width, config.height, mergedProperties);
    });

    Composite.add(engine.world, bodies);


    // Boundaries
    // const top = Bodies.rectangle(canvasWidth / 2, -10, canvasWidth, 10, { isStatic: true });
    const ground = Bodies.rectangle(canvasWidth / 2, canvasHeight + 10, canvasWidth, 20, { isStatic: true });
    const leftWall = Bodies.rectangle(-10, canvasHeight / 2, 10, canvasHeight, { isStatic: true });
    const rightWall = Bodies.rectangle(canvasWidth + 10, canvasHeight / 2, 10, canvasHeight, { isStatic: true });

    Composite.add(engine.world, [ground, leftWall, rightWall]);


    // Mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    render.mouse = mouse;

    Composite.add(engine.world, mouseConstraint);

    // Run the engine
    Render.run(render);
    Runner.run(runner, engine);

    const handleResize = debounce(() => {
      setMotionBodies(getMotionBodies());

      if (canvasDivRef.current && renderRef.current) {
        const updatedWidth = canvasDivRef.current.clientWidth;
        const updatedHeight = canvasDivRef.current.clientHeight;

        // Update canvas dimensions
        renderRef.current.canvas.width = updatedWidth;
        renderRef.current.canvas.height = updatedHeight;

        // Update boundaries
        Body.setPosition(ground, { x: updatedWidth / 2, y: updatedHeight });
        Body.setPosition(leftWall, { x: -10, y: updatedHeight / 2 });
        Body.setPosition(rightWall, { x: updatedWidth + 10, y: updatedHeight / 2 });
      }
    }, 250);  // Debounce for 250ms

    window.addEventListener('resize', handleResize);

    // Unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, true)
      Engine.clear(engine)
      Composite.clear(engine.world, true);
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
      window.removeEventListener('resize', handleResize);
    }

  }, [motionBodies])
  return (
    <div style={{ width: '100%', height: '100%' }} ref={canvasDivRef} id="matterCanvas" />
  )
}