import { useEffect, useRef } from 'react'
import './style.css';
import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import { DATA } from "./data";
import { imgInteractionData } from '../../utils/data';
import { ProjectTemplate } from '../Projects/ProjectTemplate';

const project =
{
  title: 'Image interaction',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis itaque laboriosam! Temporibus esse eius iusto voluptatum maiores at asperiores, quo quos omnis delectus cumque consequuntur provident dolores minus tenetur quisquam rem odit. Aut unde velit sint natus recusandae eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  category: 'Gsap | Intersection Observer API',
  year: '2023'
};

export const ImgInteraction = () => {
  const contentRef = useRef(null);
  const headingRef = useRef(null);

  //fix top position on resize!!
  // fix: images dont fit!
  useEffect(() => {



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

      // heading-instruction
      if (offset.y > 50) {
        gsap.to(heading, { opacity: 0 });
      } else {
        gsap.to(heading, { opacity: 1 });
      }

      gsap.to(itemFull, { y: -offset.y, duration: 0 });
    });


    const setPositionCalculations = () => {
      let PADDING, ITEM_SIZE;

      if (window.innerWidth <= 768) {  
          PADDING = 8 / 2;
          ITEM_SIZE = (182.4 - PADDING) / 2;
      } else {
          PADDING = 8;
          ITEM_SIZE = 182.4 - PADDING;
      }
      const continerFull = select(".item-container-full");
      const containerTransparent = select(".item-container-transparent");
      const scrollContent = select(".scroll-content");

      const scrollContentHeight = imgInteractionData.length * (ITEM_SIZE + PADDING);
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

      imgInteractionData.forEach((item, i) => {
        const image = create("img");

        gsap.set(image, {
          className: "img-select",
          attr: { src: item.img, "data-id": item.id },
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
      let PADDING, ITEM_SIZE;

      if (window.innerWidth <= 768) {  
          PADDING = 8 / 2;
          ITEM_SIZE = (182.4 - PADDING) / 2;
      } else {
          PADDING = 8;
          ITEM_SIZE = 182.4 - PADDING;
      }
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
    window.addEventListener("resize", () => {setPositionCalculations(); initObserver();});

    return () => {
      verticalScrollbar.destroy();

      gsap.killTweensOf(heading);
      gsap.killTweensOf(".item-full");
      gsap.killTweensOf(".img-select");

      window.removeEventListener("resize", setPositionCalculations);
    }
  }, [])

  return (
    <>
      <ProjectTemplate projectInfo={project}>
        <div className="header-instr" ref={headingRef}>
          {/* <p className="scroll-down">&darr;</p> */}
          <p>[Scroll]</p>
        </div>
          <div className='no-blend'></div>
          <section className="content" ref={contentRef}>
          </section>
      </ProjectTemplate>
    </>
  )
}