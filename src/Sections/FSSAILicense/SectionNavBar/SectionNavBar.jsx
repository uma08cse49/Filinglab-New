import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NavWrapper = styled.div`
  position: sticky;
  top: 80px;
  z-index: 999;
  background: #002145;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: 12px 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScrollButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ disabled }) => (disabled ? "#ccc" : "#fff")};
  font-size: 18px;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
  -webkit-tap-highlight-color: transparent; /* Prevent tap highlight */
  outline: none !important; /* Prevent default focus outline */

  &:hover {
    color: ${({ disabled }) => (disabled ? "#ccc !important" : "#eee !important")};
  }

  &:active {
    color: ${({ disabled }) => (disabled ? "#ccc !important" : "#fff !important")};
  }

  &:focus {
    color: ${({ disabled }) => (disabled ? "#ccc !important" : "#fff !important")};
  }

  &:disabled {
    cursor: default;
    color: #ccc !important;
  }
`;

const NavBarWrapper = styled.div`
  overflow: hidden;
  flex: 1;
`;

const NavBar = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 0.3s;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ active }) => (active ? " #ed740a" : " #ffffff")};
    font-weight: ${({ active }) => (active ? 700 : 500)};
    padding: 8px 14px;
    border-radius: 6px;
    transition: 0.3s;
    background: ${({ active }) => (active ? " #fff3e6" : "transparent")};
    display: inline-block;
    white-space: nowrap;
    &:hover {
      color: #ed740a;
      background: #f6f6f6;
    }
  }
`;

const sectionIds = [
 "Overview",
  "Advantages",
  "Eligibilty Criteria",
  "Documents Required",
  "Process",
  "Features",
  "Types",
  "FAQ",
];

const sectionTitles = [
  "Overview",
  "Benefits",
  "Eligibilty Criteria",
  "Documents Required",
  "Process",
  "Features",
  "Types",
  "FAQ",
];

const SectionNavBar = () => {
  const [activeId, setActiveId] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const navRef = useRef(null);
  const sectionRefs = useRef(sectionIds.reduce((acc, id) => {
    acc[id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSection = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        });
        if (visibleSection) {
          setActiveId(visibleSection);
          // Scroll the active item to the center on scroll
          if (navRef.current && sectionRefs.current[visibleSection]?.current) {
            const navBarWidth = navRef.current.offsetWidth;
            const activeItem = sectionRefs.current[visibleSection].current;
            const activeItemWidth = activeItem.offsetWidth;
            const activeItemOffsetLeft = activeItem.offsetLeft;
            const scrollTo = activeItemOffsetLeft - (navBarWidth / 2) + (activeItemWidth / 2);

            navRef.current.scrollTo({
              left: scrollTo,
              behavior: 'smooth',
            });
            setScrollLeft(scrollTo); // Update scrollLeft for button disable state
          }
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i * 0.01),
      }
    );

    const targets = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    targets.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = -80;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollByAmount = 150;

  const handleScroll = (dir) => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: dir === "right" ? scrollByAmount : -scrollByAmount, behavior: "smooth" });
      setScrollLeft(navRef.current.scrollLeft + (dir === "right" ? scrollByAmount : -scrollByAmount));
    }
  };

  const isAtStart = scrollLeft <= 0;
  const isAtEnd = navRef.current && Math.abs(navRef.current.scrollLeft + navRef.current.offsetWidth - navRef.current.scrollWidth) <= 1;

  return (
    <NavWrapper>
      <ScrollButton onClick={() => handleScroll("left")} disabled={isAtStart}>
        <FaChevronLeft />
      </ScrollButton>
      <NavBarWrapper ref={navRef}>
        <NavBar>
          {sectionIds.map((id, i) => (
            <NavItem key={id} active={activeId === id} ref={sectionRefs.current[id]}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(id);
                }}
              >
                {sectionTitles[i]}
              </a>
            </NavItem>
          ))}
        </NavBar>
      </NavBarWrapper>
      <ScrollButton onClick={() => handleScroll("right")} disabled={isAtEnd}>
        <FaChevronRight />
      </ScrollButton>
    </NavWrapper>
  );
};

export default SectionNavBar;