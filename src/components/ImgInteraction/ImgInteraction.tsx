import { useEffect, useRef } from 'react'
import './style.css';
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
// import { ModalPlugin } from "./plugins/scroll-disable";
import { DATA } from "./data";
import { ProjectHeader } from '../Projects/sections/ProjectHeader';
import { ProjectFooter } from '../Projects/sections/ProjectFooter';

const project =  
  {
    title: 'Image interaction',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    category: 'Gsap | Intersection Observer API',
    year: '2023'
  }

export const ImgInteraction = () => {
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  //fix top position on resize!!

  useEffect(() => {
    const PADDING = 8;
    const ITEM_SIZE = 182.4 - PADDING;

    const select = (elem) => document.querySelector(elem);
    const selectAll = (elem) => Array.from(document.querySelectorAll(elem));
    const create = (elem) => document.createElement(elem);

    const content = contentRef.current;
    const heading = headingRef.current;

    Scrollbar.use();
    const verticalScrollbar = Scrollbar.init(content, {
      damping: 0.03,
      delegateTo: document,
    });
    
    verticalScrollbar.setPosition(0, 0);
    verticalScrollbar.track.yAxis.element.remove();
    verticalScrollbar.track.xAxis.element.remove();
    verticalScrollbar.addListener(({ offset }) => {
      const itemFull = selectAll(".item-full");

      if (offset.y > 50) {
        gsap.to(heading, { opacity: 0 });
      } else {
        gsap.to(heading, { opacity: 1 });
      }

      gsap.to(itemFull, { y: -offset.y, duration: 0 });
    });

    window.addEventListener("resize", () => setPositionCalculations());

    const setPositionCalculations = () => {
      const continerFull = select(".item-container-full");
      const containerTransparent = select(".item-container-transparent");
      const scrollContent = select(".scroll-content");

      const scrollContentHeight = DATA.length * (ITEM_SIZE + PADDING);
      const multiplyTime = window.innerHeight / (ITEM_SIZE + PADDING) - 2;

      gsap.set(scrollContent, {
        blockSize: scrollContentHeight + ITEM_SIZE * multiplyTime + ITEM_SIZE,
      });
      gsap.set(continerFull, { top: ITEM_SIZE * multiplyTime });
      gsap.set(containerTransparent, { y: ITEM_SIZE * multiplyTime });
    };

    const generateList = () => {
      const scrollContent = select(".scroll-content");
      const picture = create("div");
      const containerFull = create("div");
      const containerTransparent = create("div");

      gsap.set(picture, { className: "picture" });
      gsap.set(containerFull, { className: "item-container-full" });
      gsap.set(containerTransparent, { className: "item-container-transparent" });

      content.appendChild(containerFull);
      scrollContent.insertAdjacentElement("beforeend", containerTransparent);

      DATA.forEach((item, i) => {
        const image = create("img");
        gsap.set(image, {
          className: "img-select",
          attr: { src: item.imgUrl, "data-id": item.id },
          zIndex: i + 1,
        });

        picture.appendChild(image);
        containerFull.appendChild(createItem(item, false));
        containerTransparent.appendChild(createItem(item, true));
      });

      content.appendChild(picture);
    };

    const createItem = (item, isTransparent = false) => {
      const itemList = item.title.split(" ");

      const itemContainer = create("div");
      const title = create("p");

      gsap.set(itemContainer, {
        className: `item ${isTransparent ? "item-transparent" : "item-full"}`,
        attr: { "data-id": item.id },
      });

      gsap.set(title, {
        className: `title ${isTransparent ? "title-transparent" : "title-full"}`,
        textContent: itemList[itemList.length - 1],
      });

      itemContainer.appendChild(title);

      return itemContainer;
    };

    const initObserver = () => {
      const pictureList = selectAll(".img-select");

      const options = {
        root: verticalScrollbar.containerEl,
        rootMargin: `${ITEM_SIZE}px 0px -${ITEM_SIZE}px 0px`,
        threshold: 0.4,
      };

      const observer = new IntersectionObserver((entries, _) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry, pictureList, "in");
          } else {
            animate(entry, pictureList, "out");
          }
        });
      }, options);

      verticalScrollbar.containerEl
        .querySelectorAll(".item-transparent")
        .forEach((item) => observer.observe(item));
    };

    const animate = (entry, pictureList, dir) => {
      const targetDown = pictureList[entry.target.dataset.id - 1];

      gsap.to(targetDown, {
        translateY: dir === "in" ? 0 : 500,
        scale: dir === "in" ? 1 : 1.5,
        duration: 0.5,
      });
    };

    generateList();
    setPositionCalculations();
    initObserver();
  }, [])

  return (
    <div className="main-wrapper">
      <ProjectHeader/>
    <div className="main">
      <div className="heading" ref={headingRef}>
        <h4 className="heading-text">Scroll</h4>
        <p className="scroll-down">&darr;</p>
      </div>
      <section className="content" ref={contentRef}></section>
    </div>
    <ProjectFooter project={project}/>
    </div>

  )
}